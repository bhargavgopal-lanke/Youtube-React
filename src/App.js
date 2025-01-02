import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Body from "./Components/Body";
import WatchPage from "./Components/WatchPage";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />}>
              <Route index element={<MainContainer />} />
              <Route path="/watch" element={<WatchPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
