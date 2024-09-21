import React, { useState } from 'react'

const Practice = () => {
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)

  const task = 'Напишите функцию, которая возвращает сумму двух чисел.'
  const hint = "Попробуйте использовать оператор '+' для сложения значений."
  const solution = 'function sum(a, b) { return a + b; }'

  return (
    <div>
      <h2>Практическое задание</h2>
      <p>{task}</p>

      <button onClick={() => setShowHint((prev) => !prev)}>
        {showHint ? 'Скрыть подсказку' : 'Показать подсказку'}
      </button>
      {showHint && (
        <p>
          <strong>Подсказка:</strong> {hint}
        </p>
      )}

      <button onClick={() => setShowSolution((prev) => !prev)}>
        {showSolution ? 'Скрыть решение' : 'Показать полное решение'}
      </button>
      {showSolution && <pre>{solution}</pre>}
    </div>
  )
}

export default Practice
