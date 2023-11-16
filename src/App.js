import React from "react";
import { BrowserRouter as Router, Route, Routes ,Navigate} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home  from "./components/Home";
import Users from "./components/Users";
import EditNotes from "./components/Note/EditNotes";
import InviteUser from "./components/InviteUser";
import Feed from "./components/Feed";
import Logout from "./components/Logout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/edit" element={<EditNotes />} />
        <Route path="/users" element={<Users />} />
        <Route path="/invite" element={<InviteUser />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>

  );
}

export default App;
