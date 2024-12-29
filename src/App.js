import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./Components/Layout";
import Body from "./Components/Body";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Body />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
