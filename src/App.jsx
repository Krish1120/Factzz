import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/Styles/GlobalStyles";
import { MainWrapper } from "./components/Styles/StyledUIComponents";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoute/PrivateRoutes";

const theme = {
  light: {
    backgroundColor: "white",
    text: "black",
  },
  dark: {
    backgroundColor: "black",
    text: "white",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainWrapper>
        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/login" element={<Authentication />} />
          </Routes>
        </Router>
      </MainWrapper>
    </ThemeProvider>
  );
}

export default App;
