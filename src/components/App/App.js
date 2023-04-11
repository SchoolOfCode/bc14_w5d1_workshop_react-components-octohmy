import Card from "../Card";
import "./App.css";
import "../Card/index.js";
import "../Button/index.js";
// import Button from "../Button";

let buttonText="more"

function App() {
  return (
    <div className="App">
      <Card someText={buttonText}/>
      <Card someText={"more 2"}/>
      <Card someText={"more 3"}/>  
    </div>
   

  );
}

export default App; 
