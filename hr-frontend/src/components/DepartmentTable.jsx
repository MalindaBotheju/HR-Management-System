export default function DepartmentTable({ departments, handleEdit, handleDelete }) {
  if (departments.length === 0) {
    return <p className="text-gray-400 italic text-center py-8">No departments have been established yet.</p>;
  }

  return (
    <div className="overflow-hidden bg-white border border-gray-100 rounded-2xl shadow-xs">
      <table className="w-full border-collapse text-left text-sm text-gray-500">
        <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-700 border-b border-gray-100">
          <tr>
            <th className="px-6 py-4">ID</th>
            <th className="px-6 py-4">Department Name</th>
            <th className="px-6 py-4">Description</th>
            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {departments.map(dept => (
            <tr key={dept.id} className="hover:bg-gray-50/70 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">#{dept.id}</td>
              <td className="px-6 py-4 font-semibold text-gray-900">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1 text-sm font-bold text-slate-700 border border-slate-200">
                  {dept.name}
                </span>
              </td>
              <td className="px-6 py-4 text-gray-600">{dept.description}</td>
              <td className="px-6 py-4">
                <div className="flex justify-end gap-3">
                  <button 
                    onClick={() => handleEdit(dept)}
                    className="text-amber-600 hover:text-amber-700 font-semibold cursor-pointer text-sm transition-colors"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(dept.id)}
                    className="text-red-600 hover:text-red-700 font-semibold cursor-pointer text-sm transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}