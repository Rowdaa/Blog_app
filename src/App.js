import "./App.css";
import Home from "./componets/home/Home";
import TopBar from "./componets/topbar/TopBar";
import Login from "./page/Login/Login";
import Register from "./page/register/Register";
import Settings from "./page/setting/Settings";
import Single from "./page/single/Single";
import Write from "./page/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <div className="app">
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={user ? <Home /> : <Register />} />
          <Route
            path="/Settings"
            element={user ? <Settings /> : <Register />}
          />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/Write" element={user ? <Write /> : <Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
