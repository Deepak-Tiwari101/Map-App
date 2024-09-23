import Grid from "./components/Grid/Grid"
import ButtonList from "./components/Button/ButtonList"
import SideNote from "./components/SideNote/SideNote"


function App() {

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Pathfinding Visualizer</h1>
      <ButtonList />
      <SideNote />
      <Grid />
    </>
  )
}

export default App
