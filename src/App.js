import './App.css';
import StudentLogin from './Pages/Account/StudentLogin';
import StudentSignUp from './Pages/Account/StudentSignUp';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import TeacherLogin from './Pages/Account/TeacherLogin';
import TeacherSignUp from './Pages/Account/TeacherSignUp';
import Navbar from './Components/Navbar';
import Schedule from './Pages/Courses/Courses';

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
        <Route path='/schedule' element={<Schedule></Schedule>}></Route>
      </Routes>
    </>
  );
}

export default App;
