export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative">
      <input 
        type="text" 
        placeholder="Search employees..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-64 pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl shadow-xs text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      />
      <span className="absolute left-3 top-2.5 text-gray-400 text-sm">🔍</span>
    </div>
  );
}