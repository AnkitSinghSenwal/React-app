import Video from "./component/Video";
import "./App.css";
function App(){


  return (<>
  <div>Hello from App.js file</div>
   
  <Video title="React JS tutorial" verified={true}></Video>
  <Video title="Node JS tutorial" verified={true}></Video>
  </>
  )
}

export default App;