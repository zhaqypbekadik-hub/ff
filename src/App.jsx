import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;