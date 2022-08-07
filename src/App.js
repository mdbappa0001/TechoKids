import './App.css';
import StudentLogin from './Pages/Account/StudentLogin';
import StudentSignUp from './Pages/Account/StudentSignUp';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import TeacherLogin from './Pages/Account/TeacherLogin';
import TeacherSignUp from './Pages/Account/TeacherSignUp';
import Navbar from './Components/Navbar';
import Schedule from './Pages/Courses/Courses';
import StudentRequireAuth from './Pages/Account/StudentRequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/DashBoard/Dashboard';
import MyCourses from './Pages/DashBoard/MyCourses';
import MyProfile from './Pages/DashBoard/MyProfile';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/studentLogin' element={<StudentLogin></StudentLogin>}></Route>
        <Route path='/studentSignUp' element={<StudentSignUp></StudentSignUp>}></Route>
        <Route path='/teacherLogin' element={<TeacherLogin></TeacherLogin>}></Route>
        <Route path='/teacherSignUp' element={<TeacherSignUp></TeacherSignUp>}></Route>
        <Route path='/schedule' element=
          {
            <StudentRequireAuth>
              <Schedule></Schedule>
            </StudentRequireAuth>
          }
        ></Route>

        <Route path='/dashboard' element={
          <Dashboard></Dashboard>
        }>
          <Route index element={<MyCourses></MyCourses>}></Route>
          <Route path='/dashboard/profile' element={<MyProfile></MyProfile>}></Route>
        </Route>

      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
