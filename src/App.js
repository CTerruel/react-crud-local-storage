import Form from './Form'
import TableForm from './TableForm'
import { createRef, useEffect, useState } from 'react'
import './app.css'

const App = () => {
  
  const [data, setData] = useState([])
  const [updating, setUpdating] = useState(false)
  
  const inputName = createRef()
  const inputEmail = createRef()
  const inputID = createRef()
  
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('usersKey')) || []
    setData(users)
  }, [])
  
  const handleInsert = () => {
    const user = createUser()
    const newArray = [...data, user]
    
    if (user.name && user.email) {
      setData(newArray)
      localStorage.setItem('usersKey', JSON.stringify(newArray))
      inputName.current.focus()
      clearFields()
    }
  }
  
  const handleSelect = selectdeUser => {
    inputID.current.value = selectdeUser.id
    inputName.current.value = selectdeUser.name
    inputEmail.current.value = selectdeUser.email
    setUpdating(true)
  }
  
  const handleUpdate = () => {
    const user = createUser()
    const newArray = data.filter(item => item.id !== user.id)
    newArray.push(user)
    
    if (user.name && user.email) {
      setData(newArray)
      localStorage.setItem('usersKey', JSON.stringify(newArray))
      setUpdating(false)
      inputName.current.focus()
      clearFields()
    }
  }

  const handleDelete = (event, id) => {
    event.stopPropagation()
    const newArray = data.filter(item => item.id !== id)
    setData(newArray)
    localStorage.setItem('usersKey', JSON.stringify(newArray))
    inputName.current.focus()
  }

  const createUser = () => {
    const id = inputID.current.valueAsNumber || generateID()
    const name = inputName.current.value
    const email = inputEmail.current.value
    return { id, name, email }
  }

  const generateID = () => Math.floor(Math.random() * 100) + 1

  const clearFields = () => {
    inputID.current.value = ''
    inputName.current.value = ''
    inputEmail.current.value = ''
  }

  return (
    <div className="container">
      <Form onInsert={handleInsert}
        onUpdate={handleUpdate}
        nameRef={inputName}
        emailRef={inputEmail}
        idRef={inputID} 
        updating={updating}/>
      <br />
      <br />
      <TableForm data={data} onDelete={handleDelete}
        onSelect={handleSelect} />
    </div>
  )
}

export default App
