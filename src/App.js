import "./App.css"
import Navigation from "./sections/Navigation"
import Home from "./sections/Home"
import About from "./sections/About"
import Services from "./sections/Services"
import Experience from "./sections/Experience"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

// Add all icons for convenience
library.add(fab, fas);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#353353",
    },
    secondary: {
      main: "#ff4c60",
    },
  },
});

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Navigation />
        <main>
          <Home />
          <About />
          <Services />
          <Experience />

          <h1>
            Something not working? That's expected, this site is still under
            construction! 👷🏼🚧
          </h1>
        </main>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
