import HomeScreen from "./screens/HomeScreen/HomeScreen.js";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
     <Router>
       <Routes>
       <Route path="/" element={<HomeScreen />} exact />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
