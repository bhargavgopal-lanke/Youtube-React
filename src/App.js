import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./Components/Layout";

function App() {
  return (
    <>
      <Layout />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index  /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
