import './App.css';
import MiniDrawer from './components/MiniDrawer'
import Home from './components/Home'
import About from './components/About'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

// Add all icons for convenience
library.add(fab, fas);

function App() {
  return (
    <div className="App">
      <MiniDrawer></MiniDrawer>
      <Home></Home>
      <About></About>
    </div>
  );
}

export default App;
