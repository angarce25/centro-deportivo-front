import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logincomponent from "./components/forms/Logincomponent";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/particles/Header";




function App() {
  return (
     <AuthProvider>
      <BrowserRouter>
       
      
        <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        
        
        </Routes>
      </BrowserRouter>
     </AuthProvider>
  );
}

export default App;