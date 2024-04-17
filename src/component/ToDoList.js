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

  //to put ta new value we create 
  // yo record state le garda naya data haru store garchha with the help of which we can display the lists
  const [record, setRecord] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()


    if (!formInput.firstName || !formInput.lastName || !formInput.address || !formInput.occupation) {
      alert("fill form properly")
    }
    else {
      const newRecord = { ...formInput, id: new Date().getTime().toString() } // id pratek choti naya generate hunchha because of ehich each object will get new unique id
      setRecord([...record, newRecord])   // yesma unique id sahit data haru store hunchha object inside array 
      setFormInput({ firstName: '', lastName: '', address: '', occupation: '' })  // submit button  triggered bhayesi value haru initial state ma janchha
    }
  }

  const handleDelete = (id) => {
    const upDateItems = record.filter((_, idx) => { return idx !== id }); // helps to display only data which are not equal to the items clicked 
    setRecord(upDateItems)
  };


  return (
    <div className='h-screen w-full gap-8 flex flex-col justify-center bg-teal-950'>

      <div className='flex w-full flex-col items-center justify-center font-mono text-xl text-teal-50 font-sm '>
        <div className='flex flex-col items-center mb-5'>
          <img src={book1} alt='book' className='h-24 w-24' />
          <p className='text-3xl'>Fill The Form</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='mt-4'>
            <label htmlFor='firstName'>First Name: </label><br />
            <input className=' w-96 px-2 py-2 text-slate-900 rounded-lg' name='firstName' type='text' id='firstName' placeholder='firstname' value={formInput.firstName} onChange={handleSetInput} />
          </div>
          <div className='mt-4'>
            <label htmlFor='lastName'>Last Name: </label><br />
            <input className='w-96 px-2 py-2 text-slate-900 rounded-lg' name='lastName' type='text' id='lastName' placeholder='lastname' value={formInput.lastName} onChange={handleSetInput} />
          </div>
          <div className='mt-4'>
            <label htmlFor='address'>Address: </label><br />
            <input className='w-96 px-2 py-2 text-slate-900 rounded-lg' name='address' type='text' id='address' placeholder='address' value={formInput.address} onChange={handleSetInput} />
          </div>
          <div className='mt-4'>
            <label htmlFor='occupation'>Occupation: </label><br />
            <input className='w-96 px-2 py-2 text-slate-900 rounded-lg' name='occupation' type='text' id='occupation' placeholder='occupation' value={formInput.occupation} onChange={handleSetInput} />
          </div>
          <button className=' mt-4 w-96 px-2 py-2 text-slate-900 rounded-lg bg-slate-900 text-teal-100' type="submit">Submit</button>
        </form>
      </div>
        <hr class="h-px bg-gray-200 border-0 dark:bg-gray-100"></hr>
      <div>
        {

          // index = yo unique id delete button triger huda handledelete ma as a  rgument pass hunchha 
          record.map((data, indx) => {
            return (
              <li key={indx}>
                <p>{data.firstName}</p>
                <p>{data.lastName}</p>
                <p>{data.address}</p>
                <p>{data.occupation}</p>
                <button onClick={() => handleDelete(indx)}>Delete</button>
              </li>
              /* 
              When we write functionName() we are calling the function on the spot (executing function).
              On the other hand, writing it like this {functionName} will pass a pointer to the function that needs to be executed later
              but in this case if we pass {handleDelete(indx)} it will generate irregular id so we need to pass it as a arrow function 
              */


            )
          }
          )
        }
      </div>


    </div>
  )
}

export default ToDoList



