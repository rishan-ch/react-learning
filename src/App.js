import Navbar from "./components/Navbar.js";
import Cardholder from "./components/Cardholder.js"
import Date from "./components/Date.js"
import NameList from "./components/NameList.js";


function App() {
  return (
    <>
    <Navbar title="title from prop"/>
    <NameList/>
    {/* <Cardholder name="Rishan"/>
    <Cardholder name="Chhunju"/> 
    <Date/>*/}
    </>

  );
}

export default App;
