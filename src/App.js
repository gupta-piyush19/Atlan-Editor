import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
