//Globals
import State from "./context";

//Components
import { Layout, Container } from "./components";

//Hooks
import { useToogleTheme } from "./hooks";

import "./App.css";

//Externals
import { ThemeProvider } from "styled-components";

function App() {
  const [theme, toggleTheme] = useToogleTheme();

  const themes = {
    dark: {
      color: {
        primary: "#0F0F0F",
        secondary: "#242424",
        border: "#ffffff",
        text: "#FFFFFF",
        modal: "#ffffff",
        textModal: "#242424",
      },
    },
    light: {
      color: {
        primary: "#FFFFFF",
        secondary: "#F3F3F3",
        border: "#242424",
        text: "#1A1A1A",
        modal: "#000000",
        textModal: "#F3F3F3",
      },
    },
  };

  return (
    <State>
      <ThemeProvider theme={themes[theme]}>
        <div onClick={toggleTheme}>change theme</div>
        <Layout>
          <Container />
        </Layout>
      </ThemeProvider>
    </State>
  );
}

export default App;
