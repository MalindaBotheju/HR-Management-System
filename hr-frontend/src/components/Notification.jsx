export default function Notification({ notification }) {
  if (!notification) return null;

  // Dynamically choose background based on the custom color passed
  const isDelete = notification.color === '#dc3545';

  return (
    <div className={`fixed top-24 right-6 px-6 py-4 rounded-xl shadow-lg text-white font-semibold tracking-wide z-50 animate-bounce ${
      isDelete ? 'bg-red-500' : 'bg-emerald-500'
    }`}>
      {notification.message}
    </div>
  );
}