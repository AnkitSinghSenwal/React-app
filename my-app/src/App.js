import './App.css';
let name = "React app"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {name}
        <Demo></Demo>
      </header>
    </div>
  );
}

function Demo() {
  return (
    <div className="App">
      <header className="App-header">
        Demo 
      </header>
    </div>
  );
}

export default App;
