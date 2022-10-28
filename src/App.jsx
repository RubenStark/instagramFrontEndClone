import { Fragment, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import Header from './Components/Header/Header'
import Create from './Pages/Create'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Notifications from './Pages/Notifications'
import Profile from './Pages/Profile'
import WatchStories from './Pages/WatchStories'
import { useSelector } from 'react-redux'

function App() {
  const [profile, setProfile] = useState({
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
    username: 'username',
  })

  const [userProfile, setUserProfile] = useState({})
  const url = useSelector ((state) => state.url.value)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      fetch(url + 'get-user-profile/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          // console.log(result)

          // console.log(result.user.username)
          // console.log(result.user.email)
          // console.log(result.followers)
          // console.log(result.avatar)

          setUserProfile(result)

        })
    }
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header profile={profile} userProfile={userProfile} />
        <Routes>
          <Route path="/" element={<Home profile={userProfile} />} />
          <Route path="/profile" element={<Profile profile={userProfile} />} />
          <Route path="/notifications" element={<Notifications profile={userProfile} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/watch" element={<WatchStories />} />
          <Route path="/create" element={<Create />} />

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
