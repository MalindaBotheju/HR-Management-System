import { useState, useEffect } from 'react';
import Notification from '../components/Notification';
import DepartmentForm from '../components/DepartmentForm';
import DepartmentTable from '../components/DepartmentTable';
import ConfirmModal from '../components/ConfirmModal';

export default function Departments() {
  const [departments, setDepartments] = useState([]);
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [editingId, setEditingId] = useState(null);
  const [notification, setNotification] = useState(null);
  const [departmentToDelete, setDepartmentToDelete] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_URL;

  // The master key to unlock Spring Boot
  const authHeader = import.meta.env.VITE_AUTH_HEADER;

  const showNotification = (message, color = '#28a745') => {
    setNotification({ message, color });
    setTimeout(() => setNotification(null), 3000);
  };

  // 1. Fetch data on load with auth header (Read)
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/departments`, {
      headers: { 'Authorization': authHeader }
    })
      .then(res => res.json())
      .then(data => setDepartments(data))
      .catch(err => console.error("Error fetching departments:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEdit = (department) => {
    setFormData({
      name: department.name || '',
      description: department.description || ''
    });
    setEditingId(department.id);
  };

  const handleCancelEdit = () => {
    setFormData({ name: '', description: '' });
    setEditingId(null);
  };

  // 2. Handle Create and Update with auth headers
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: formData.name,
      description: formData.description
    };

    if (editingId) {
      fetch(`${API_BASE_URL}/api/departments/${editingId}`, {
        method: 'PUT', 
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': authHeader
        },
        body: JSON.stringify(payload)
      })
        .then(res => res.json())
        .then(updatedData => {
          setDepartments(departments.map(dept => (dept.id === editingId ? updatedData : dept)));
          handleCancelEdit();
          showNotification("Department updated successfully!");
        });
    } else {
      fetch(`${API_BASE_URL}/api/departments`, {
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': authHeader
        },
        body: JSON.stringify(payload)
      })
        .then(res => res.json())
        .then(data => {
          setDepartments([...departments, data]);
          handleCancelEdit();
          showNotification("New department created!");
        });
    }
  };

  // 3. Execute Delete with auth header
  const executeDelete = () => {
    if (!departmentToDelete) return;

    fetch(`${API_BASE_URL}/api/departments/${departmentToDelete}`, { 
      method: 'DELETE',
      headers: { 'Authorization': authHeader }
    })
      .then(res => {
        if (res.ok) {
          setDepartments(departments.filter(dept => dept.id !== departmentToDelete));
          showNotification("Department removed from system.", '#dc3545');
          setDepartmentToDelete(null); // Close the modal
        }
      });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Notification notification={notification} />
      
      <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-8">
        Organization Departments
      </h1>
      
      <DepartmentForm 
        formData={formData} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        editingId={editingId} 
        handleCancelEdit={handleCancelEdit} 
      />

      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">Active Departments</h2>
      </div>

      <DepartmentTable 
        departments={departments} 
        handleEdit={handleEdit} 
        handleDelete={(id) => setDepartmentToDelete(id)} 
      />

      <ConfirmModal 
        isOpen={departmentToDelete !== null} 
        onClose={() => setDepartmentToDelete(null)} 
        onConfirm={executeDelete} 
        title="Delete Department" 
        message="Are you sure you want to delete this department? Any employees assigned to it may be affected."
      />
    </div>
  );
}