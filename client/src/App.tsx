import NarendraModiImage from "./assets/narendra_modi.jpg";
function App() {
  return (
    <>
      <div className="w-[70%] mx-auto text-center mb-32 flex justify-between items-center border-b-2">
        <h1 className="font-bold text-slate-800 text-4xl p-4">
          SurakshaSaathi
        </h1>
        <a
          href="https://github.com/MahendraDani/SurakshaSaathi-web"
          target="blank"
          className="border-2 px-4 py-1 rounded-md border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-slate-100 duration-200 ease-in cursor-pointer"
        >
          Github
        </a>
      </div>
      <div className="w-[60%] mx-auto flex justify-between items-center gap-12">
        <img
          src={NarendraModiImage}
          className="w-64 h-64 rounded-lg border-2 border-slate-200"
        />
        <div>
          <h2 className="text-slate-700 text-3xl font-bold text-center">
            Platform to findrescue agencies near you and the support they can
            provide!
          </h2>
        </div>
      </div>
      <div className="fixed bottom-0 w-full h-24 border-2 border-slate-200">
        <div className="w-[45%] h-24 mx-auto flex justify-between items-center">
          <h3 className="text-slate-800 font-semibold text-xl mb-1">
            SurakshaSaathi
          </h3>
          <a
            href="https://github.com/MahendraDani/SurakshaSaathi-web"
            target="blank"
            className="text-slate-700 hover:text-black duration-200 ease-in cursor-pointer"
          >
            Github
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
