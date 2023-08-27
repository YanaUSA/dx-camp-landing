import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
