import { useState, useEffect } from 'react';

// Import our new components!
import Notification from '../components/Notification';
import EmployeeForm from '../components/EmployeeForm';
import SearchBar from '../components/SearchBar';
import EmployeeTable from '../components/EmployeeTable';
import ConfirmModal from '../components/ConfirmModal';

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', jobTitle: '', departmentId: 1
  });
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState(null);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_URL;

  // The master key to unlock Spring Boot
  const authHeader = import.meta.env.VITE_AUTH_HEADER;

  const showNotification = (message, color = '#28a745') => {
    setNotification({ message, color });
    setTimeout(() => setNotification(null), 3000);
  };

  useEffect(() => {
    // 1. Added auth header to GET employees
    fetch(`${API_BASE_URL}/api/employees`, {
      headers: { 'Authorization': authHeader }
    })
      .then(res => res.json())
      .then(data => setEmployees(data))
      .catch(err => console.error("Error fetching data:", err));

    // 2. Added auth header to GET departments
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

  const handleEdit = (employee) => {
    setFormData({
      firstName: employee.firstName, lastName: employee.lastName,
      email: employee.email, jobTitle: employee.jobTitle,
      departmentId: employee.department ? employee.department.id : departments[0]?.id || 1
    });
    setEditingId(employee.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const employeePayload = {
      firstName: formData.firstName, lastName: formData.lastName,
      email: formData.email, jobTitle: formData.jobTitle,
      department: { id: formData.departmentId }
    };

    if (editingId) {
      // 3. Added auth header to PUT (update) employee
      fetch(`${API_BASE_URL}/api/employees/${editingId}`, {
        method: 'PUT', 
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': authHeader
        },
        body: JSON.stringify(employeePayload)
      })
        .then(res => res.json())
        .then(updatedData => {
          setEmployees(employees.map(emp => (emp.id === editingId ? updatedData : emp)));
          handleCancelEdit();
          showNotification("Employee updated successfully!");
        });
    } else {
      // 4. Added auth header to POST (create) employee
      fetch(`${API_BASE_URL}/api/employees`, {
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': authHeader
        },
        body: JSON.stringify(employeePayload)
      })
        .then(res => res.json())
        .then(data => {
          setEmployees([...employees, data]);
          handleCancelEdit();
          showNotification("New employee hired!");
        });
    }
  };

  const executeDelete = () => {
    if (!employeeToDelete) return;

    // 5. Added auth header to DELETE employee
    fetch(`${API_BASE_URL}/api/employees/${employeeToDelete}`, { 
      method: 'DELETE',
      headers: { 'Authorization': authHeader } 
    })
        .then(res => {
        if (res.ok) {
            setEmployees(employees.filter(emp => emp.id !== employeeToDelete));
            showNotification("Employee removed from system.", '#dc3545');
            setEmployeeToDelete(null); // Close the modal
        }
        });
    };

  const handleCancelEdit = () => {
    setFormData({ firstName: '', lastName: '', email: '', jobTitle: '', departmentId: 1 });
    setEditingId(null);
  };

  const filteredEmployees = employees.filter(emp => {
    const fullName = `${emp.firstName} ${emp.lastName}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      
      <Notification notification={notification} />

      <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-8">
        Staff Directory Dashboard
      </h1>
      
      <EmployeeForm 
        formData={formData} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        departments={departments} 
        editingId={editingId} 
        handleCancelEdit={handleCancelEdit} 
      />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-xl font-bold text-gray-800">Active Personnel</h2>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <EmployeeTable 
        filteredEmployees={filteredEmployees} 
        handleEdit={handleEdit}
        handleDelete={(id) => setEmployeeToDelete(id)} 
      />

      <ConfirmModal 
        isOpen={employeeToDelete !== null} 
        onClose={() => setEmployeeToDelete(null)} 
        onConfirm={executeDelete} 
        title="Confirm Termination" 
        message="Are you sure you want to delete this employee? This action is permanent and cannot be undone."
      />

    </div>
  );
}

export default Employees;