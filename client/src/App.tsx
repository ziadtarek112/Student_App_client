

import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'

import TopBar from './components/topbar/TopBar'
import Quiz from './pages/quiz/Quiz'
import SideBar from './components/sidebar/SideBar'
import Announcement from './pages/announcement/Announcement'
import { useSelector } from 'react-redux'
import RequireAuth from './components/requireauth/RequireAuth'

function App() {
  const location = useLocation();
  const auth = useSelector(state => state['auth']['isLoggedIn']);



  return (
    <>
      <TopBar />
      {location.pathname.includes('/Quizzes') || location.pathname.includes('/Announcements') ? <SideBar /> : null}
      <RequireAuth/>
      <Routes>
   

        <Route path='/' element={<Home />} />
        <Route path='/Quizzes' element={<Quiz/>} />
        <Route path='/Announcements' element={<Announcement/>} />

      </Routes>

    </>
  )
}

export default App
