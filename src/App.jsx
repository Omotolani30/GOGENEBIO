import Home from "./Pages/Home.jsx";
import Form from "./Pages/Form.jsx";
import { Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth.jsx";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/form" element={<Form />} /> */}
        {/* <Route path="/auth" element={<Auth />} /> */}
      </Routes>
    </div>
  );
};

export default App;
