import './App.css';
import DesktopDrawer from './components/DesktopDrawer'
import MobileDrawer from './components/MobileDrawer'
import Home from './components/Home'
import About from './components/About'
import Hidden from '@material-ui/core/Hidden';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

// Add all icons for convenience
library.add(fab, fas);

function App() {

  return (
    <div className="App">
      
      <Hidden smDown>
        <DesktopDrawer></DesktopDrawer>
      </Hidden>

      <Hidden mdUp>
        <MobileDrawer></MobileDrawer>
      </Hidden>
      <main>
        <Home></Home>
        <About></About>
      </main>
      
    </div>
  );
}

export default App;
