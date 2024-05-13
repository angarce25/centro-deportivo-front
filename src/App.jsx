import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Header from "./components/particles/Header";



function App() {
  return (
     <AuthProvider>
      <BrowserRouter>
        <Header />
       
      
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        
        
        </Routes>
      </BrowserRouter>
     </AuthProvider>
  );
}

export default App;