export default function EmployeeForm({ 
  formData, handleChange, handleSubmit, 
  departments, editingId, handleCancelEdit 
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100 mb-8">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        {editingId ? "✏️ Edit Employee Details" : "➕ Hire New Employee"}
      </h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <input 
          name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required 
          className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500" 
        />
        <input 
          name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required 
          className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500" 
        />
        <input 
          name="email" placeholder="Email Address" type="email" value={formData.email} onChange={handleChange} required 
          className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500" 
        />
        <input 
          name="jobTitle" placeholder="Job Title" value={formData.jobTitle} onChange={handleChange} required 
          className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500" 
        />
        <select 
          name="departmentId" value={formData.departmentId} onChange={handleChange} 
          className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500"
        >
          {departments.map(dept => (
            <option key={dept.id} value={dept.id}>{dept.name}</option>
          ))}
        </select>
        
        <div className="flex gap-2 lg:col-span-1">
          <button 
            type="submit" 
            className={`flex-1 px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-xs cursor-pointer transition-colors ${
              editingId ? 'bg-amber-500 hover:bg-amber-600' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {editingId ? "Update Info" : "Confirm Hire"}
          </button>

          {editingId && (
            <button 
              type="button" onClick={handleCancelEdit} 
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl text-sm font-semibold cursor-pointer transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}