import React, { useState } from 'react'
import Theory from './Theory'
import Practice from './Practice'

const App = () => {
  const [section, setSection] = useState('theory') // По умолчанию показывать теорию

  const toggleSection = () => {
    setSection((prevSection) =>
      prevSection === 'theory' ? 'practice' : 'theory'
    )
  }

  return (
    <div>
      <header>
        <h1>Приложение для изучения программирования на JavaScript</h1>
        <button onClick={toggleSection}>
          {section === 'theory' ? 'Перейти к практике' : 'Перейти к теории'}
        </button>
      </header>
      {section === 'theory' ? <Theory /> : <Practice />}
      <footer>
        <p>© 2023 Приложение для изучения </p>
      </footer>
    </div>
  )
}

export default App
