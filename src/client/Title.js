import React, { useState, useEffect } from 'react'

function Title() {
  const [title, setTitle] = useState('小标题')
  useEffect(() => {
    document.title = title
  })

  function changeTitle() {
    setTitle(title === '小标题' ? '大标题' : '小标题')
  }

  return (
    <>
      <h1>{title}</h1>
      <button onClick={changeTitle}>改标题</button>
    </>
  )
}

export default Title
