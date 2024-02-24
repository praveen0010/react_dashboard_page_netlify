import Buttons from "./components/Buttons";
import Navbar from "./components/Navbar";
import Recenttransaction from "./components/Recenttransaction";
import Revenue from "./components/Revenue";
import Sidebar from "./components/Sidebar";
import Tableg from "./components/Tableg";
import "./styles/app.css";
function App() {
  return (
    <main>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <div>
          <Navbar />
        </div>
        <div>
          <Buttons />
        </div>
        <div>
          <Revenue />
        </div>
        <div>
          <Tableg />
        </div>
        <div>
          <Recenttransaction />
        </div>
      </div>
    </main>
  );
}

export default App;
