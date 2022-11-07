import logo from "./logo.svg";
import "./App.css";
import AppBar from "./components/AppBar";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import PickoftheWeek from "./components/PickoftheWeek";

function App() {
  return (
    <>
      <AppBar />
      <Banner />
      <Menu/>
      <PickoftheWeek/>
    </>
  );
}

export default App;
