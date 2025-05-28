import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import OrderDetails from './pages/OrderDetails.jsx';
import Header from './Header.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<App />} />
        <Route path=":orderID" element={<OrderDetails />} /> 
      </Route>
    </Routes>
  </BrowserRouter>,
)
