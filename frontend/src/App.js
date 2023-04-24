import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import LandingPage from "./screens/LandingPage";
import ErrorScreen from "./screens/ErrorScreen";
import TaskDetails from "./screens/TaskDetails";
import { useSelector } from "react-redux";


function App() {
  const loginSlice = useSelector((state) => state.login)
  const {userInfo}= loginSlice
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/" element={ userInfo ? <LandingPage /> : <Navigate to="/login"/>} />
          <Route path="/task-details" element={<TaskDetails />} />
          <Route path="*" element={<ErrorScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
