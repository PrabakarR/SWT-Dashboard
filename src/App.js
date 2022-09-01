import { Routes, Route } from 'react-router-dom';
import Forgetpassword from './Forgetpassword';
import Login from './Login';
import Dashboard from './Dashboard';
import AddUser from './AddUser';
import Students from './Students';
import Organization from './Organization';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='login' element={<Login />} />
      <Route path='forgotpassword' element={<Forgetpassword />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='add-user' element={<AddUser />} />
      <Route path='students' element={<Students />} />
      <Route path='organization' element={<Organization />} />
    </Routes>
  );
}

export default App;
