export default function ConfirmModal({ isOpen, onClose, onConfirm, title, message }) {
  // If the modal isn't supposed to be open, don't render anything
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md transform transition-all border border-gray-100">
        
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xl">
            ⚠️
          </div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        
        <p className="text-gray-600 mb-8 pl-13">
          {message}
        </p>
        
        <div className="flex justify-end gap-3">
          <button 
            onClick={onClose} 
            className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm} 
            className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold shadow-sm transition-colors cursor-pointer"
          >
            Yes, Delete
          </button>
        </div>

      </div>
    </div>
  );
}