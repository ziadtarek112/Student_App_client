

import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'

import TopBar from './components/topbar/TopBar'
import Quiz from './pages/quiz/quiz'
import SideBar from './components/sidebar/SideBar'

function App() {
  const location = useLocation();

  return (
    <>
      <TopBar />
      {location.pathname.includes('/Quizzes') || location.pathname.includes('/Announcements') ? <SideBar /> : null}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Quizzes' element={<Quiz />} />
      </Routes>

    </>
  )
}

export default App
