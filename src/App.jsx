import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Login  from './Components/Login';
import Register from './Components/Register';
import ForgotPassword  from './Components/ForgotPassword';
import AccountSettings from './Components/AccountSettings'

export default function App() {
  return (
    <BrowserRouter>
      <div className="mobile-shell">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register"  element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/account" element={<AccountSettings />} />
          <Route path="*"  element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}