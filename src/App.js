import './App.css'
import Navigation from './sections/Navigation'
import Home from './sections/Home'
import About from './sections/About'
import Services from './sections/Services'
import Experience from './sections/Experience'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

// Add all icons for convenience
library.add(fab, fas);

function App() {

  return (
    <div className="App">
      
      <Navigation/>
      <main>
        <Home/>
        <About/>
        <Services/>
        <Experience/>

        <h1>Something not working? That's expected, this site is still under construction! 👷🏼🚧</h1>
      </main>
      
    </div>
  );
}

export default App;
