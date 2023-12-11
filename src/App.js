import './App.js'
import Navbar from './Navbar.js';
import Home from './Home.js'
function App() {
  return(
    <div className='App'>
      <Navbar/>
      <div className='content'>
        <Home />
      </div>
    </div>
  )
}

export default App;