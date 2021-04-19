export default function Header({ setSearchTerm }) {
  return (
    <div className="w-5/6 h-36 flex justify-between items-center">
      <h1 className="text-white text-5xl font-bold">VOCABULATED</h1>

      <div className="searchWord">
        <input
          className="bg-transparent text-white font-medium text-2xl border-b-2 border-gray-200 hover:border-white  focus:border-white focus:outline-none"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}
