export default function DepartmentForm({ 
  formData, handleChange, handleSubmit, 
  editingId, handleCancelEdit 
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100 mb-8">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        {editingId ? "✏️ Edit Department Details" : "➕ Create New Department"}
      </h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
        <input 
          name="name" 
          placeholder="Department Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
          className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
        <input 
          name="description" 
          placeholder="Brief Description" 
          value={formData.description} 
          onChange={handleChange} 
          required 
          className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
        
        <div className="flex gap-2">
          <button 
            type="submit" 
            className={`flex-1 px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-xs cursor-pointer transition-colors ${
              editingId ? 'bg-amber-500 hover:bg-amber-600' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {editingId ? "Update Department" : "Add Department"}
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