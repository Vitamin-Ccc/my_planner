import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Trips from './pages/Trips';
import Layout from './pages/Layout';
import RequireAuth from './components/RequireAuth';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UpdateUserAvatar from './pages/UpdateUserAvatar';
import Trackers from './pages/Trackers';
import Tracker from './pages/Tracker';

function App() {
  return (
      <Routes>
        <Route element={<Layout />}>
          {/* {public routes go here} */}
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route element={<RequireAuth />}>
            {/* protected routes go here */}
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/trips' element={<Trips />} />
            <Route path='/expensetracker' element={<Trackers />} />
            <Route path='/expensetracker/:id' element={<Tracker />} />
            <Route path='/avatar' element={<UpdateUserAvatar />} />
          </Route>
        </Route>
      </Routes>
  );
}

export default App;
