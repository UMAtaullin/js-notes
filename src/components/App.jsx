// src/App.jsx
import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Topic1 from './Topic1'
import Practice1 from './Practice1'


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <h1>Изучение JavaScript</h1>
          <nav>
            <ul>
              <li>
                <Link to='/'>Главная</Link>
              </li>
              <li>
                <Link to='/topic1'>Тема 1</Link>
              </li>
              <li>
                <Link to='/practice1'>Практика 1</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path='/topic1' element={<Topic1 />} />
            <Route path='/practice1' element={<Practice1 />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
