

import { Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'

import TopBar from './components/topbar/TopBar'
import Quiz from './pages/quiz/quiz'
import SideBar from './components/sidebar/SideBar'
import Announcement from './pages/announcement/Announcement'
import { useSelector } from 'react-redux'

function App() {
  const location = useLocation();
  const auth = useSelector(state => state['auth']['isLoggedIn'])



  return (
    <>
      <TopBar />
      {location.pathname.includes('/Quizzes') || location.pathname.includes('/Announcements') ? <SideBar /> : null}
      <Routes>
        {auth ? (
          <Route path='/' element={<Navigate to='/Announcements' />} />
        ) : (
          <Route path='/' element={<Home />} />
        )}


        <Route path='/Quizzes' element={<Quiz />} />
        <Route path='/Announcements' element={< Announcement />} />

      </Routes>

    </>
  )
}

export default App
