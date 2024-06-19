export const Header = () => {
  return (
    <div>
      <div className="flex justify-between p-8 items-center">
        <h1 className="font-bold bg-clip-text text-transparent text-2xl bg-gradient-to-r from-cyan-500  via-blue-600-600 to-emerald-500 tracking-wide">
          IFF 2024
        </h1>
        <div className="flex items-center space-x-3">
          <p className="text-white font-medium">Yusuf</p>
          <button className="bg-indigo-500 p-2 text-white font-semibold rounded-full w-8 h-8 flex justify-center items-center">
            Y
          </button>
        </div>
      </div>
    </div>
  );
};
