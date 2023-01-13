import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/Styles/GlobalStyles";
import { MainWrapper } from "./components/Styles/StyledUIComponents";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoute/PrivateRoutes";
import { useSelector } from "react-redux";

function App() {
  const { mode } = useSelector((state) => state.theme);

  const theme =
    mode === "light"
      ? {
          backgroundColor: "#fcfcfc",
          inputBackground: "#F0F3F5",
          DividerColor: "#e6e7e8",
          text: "#333",
          hoverBackground: "#ddd",
          avatarPaddingColor: "white",
          avatarBorderColor: "lightgrey",
          TrendingContainerColor: "#F0F3F5",
          Text2: "#6080A0",
          cardBorderColor: "#ddd",
          PostBackground: "white",
          PostCountsText: "#6080A0",
          CommentsContainer: "white",
        }
      : {
          backgroundColor: "#252849",
          inputBackground: "#404573",
          DividerColor: "#404573",
          text: "white",
          hoverBackground: "#404573",
          avatarPaddingColor: "#252849",
          avatarBorderColor: "#404573",
          TrendingContainerColor: "#212443",
          Text2: "#707070",
          cardBorderColor: "#404573",
          PostBackground: "#292c4d",
          PostCountsText: "white",
          CommentsContainer: "#212443",
        };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle bg={mode} />
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
