import Layout from "./components/Layout/Layout.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Containers/HomePage/HomePage.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={"/"} element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
