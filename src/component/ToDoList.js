import React, { useState } from 'react'
import book1 from '../images/book1.png'

function ToDoList() {

  const [formInput, setFormInput] = useState({
    firstName: '',
    lastName: '',
    address: '',
    occupation: ''
  })
  const handleSetInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormInput({ ...formInput, [name]: value })

  }

 


  return (
    <>
      <div>
        <div>
          <img src={book1} alt='book' />
          <h1>Fill The Form</h1>
        </div>
        <form>
          <div>
            <label htmlFor='firstName'>First Name</label><br />
            <input name='firstName' type='text' id='firstName' value={formInput.firstName} onChange={handleSetInput} />
          </div>
          <div>
            <label htmlFor='lastName'>Last Name</label><br />
            <input name='lastName' type='text' id='lastName' value={formInput.lastName} onChange={handleSetInput} />
          </div>
          <div>
            <label htmlFor='address'>Address</label><br />
            <input name='address' type='text' id='address' value={formInput.address} onChange={handleSetInput} />
          </div>
          <div>
            <label htmlFor='occupation'>Occupation</label><br />
            <input name='occupation' type='text' id='occupation' value={formInput.occupation} onChange={handleSetInput} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default ToDoList
