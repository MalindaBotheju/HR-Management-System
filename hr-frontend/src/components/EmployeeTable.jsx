export default function EmployeeTable({ filteredEmployees, handleEdit, handleDelete }) {
  if (filteredEmployees.length === 0) {
    return <p className="text-gray-400 italic text-center py-8">No matching records found in directory.</p>;
  }

  return (
    <div className="overflow-hidden bg-white border border-gray-100 rounded-2xl shadow-xs">
      <table className="w-full border-collapse text-left text-sm text-gray-500">
        <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-700 border-b border-gray-100">
          <tr>
            <th className="px-6 py-4">ID</th>
            <th className="px-6 py-4">Employee</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4">Title</th>
            <th className="px-6 py-4">Department</th>
            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {filteredEmployees.map(employee => (
            <tr key={employee.id} className="hover:bg-gray-50/70 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">#{employee.id}</td>
              <td className="px-6 py-4 font-semibold text-gray-900">{employee.firstName} {employee.lastName}</td>
              <td className="px-6 py-4 text-gray-600">{employee.email}</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  {employee.jobTitle}
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-1 text-xs font-semibold text-slate-600">
                  {employee.department ? employee.department.name : 'Unassigned'}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex justify-end gap-3">
                  <button 
                    onClick={() => handleEdit(employee)}
                    className="text-amber-600 hover:text-amber-700 font-semibold cursor-pointer text-sm transition-colors"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(employee.id)}
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