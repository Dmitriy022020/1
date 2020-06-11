
if (myFilms.length === 0) {
  const saved = JSON.parse(localStorage.getItem('myFilms') || '[]')
  setTodos(saved)
}

useEffect(() => {
  localStorage.setItem('myFilms', JSON.stringify(myFilms))
}, [myFilms])