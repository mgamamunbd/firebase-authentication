/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Orders from "./Orders/Orders";
import Products from "./Products/Products";
import Register from "./Register/Register";
import RequireAuth from "./RequireAuth/RequireAuth";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<Products />} />
        <Route
          path='/orders'
          element={
            <RequireAuth>
              <Orders />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
