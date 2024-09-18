import Home from "./components/body/Home";
import Navbar from "./components/navbar/Navbar";


function App() {



  return (
    <div className="w-screen h-screen bg-blue-400 flex justify-around items-center flex-col">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
