import React, { useState } from 'react'
import book1 from '../images/book1.png'

function ToDoList() {

  const [formInput, setFormInput] = useState({
    firstName: '',
    lastName: '',
    address: '',
    occupation: ''
  })

  // form input 

  const handleSetInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormInput({ ...formInput, [name]: value })

  }

  //to put new value we create record
  // yo record state le garda naya data haru store garchha with the help of which we can display the lists
  const [record, setRecord] = useState([])

  // submit function

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

  // delete function

  const handleDelete = (id) => {
    const upDateItems = record.filter((_, idx) => { return idx !== id }); // helps to display only data which are not equal to the items clicked 
    setRecord(upDateItems)
  };

  // edit function

  const handleEdit = () => {

  }

  return (
    <div className=' flex flex-col justify-center font-mono'>

      <div className='flex h-full w-full flex-col items-center justify-center text-xl text-teal-50 '>
        <div className='flex flex-col items-center '>
          {/* <img src={book1} alt='book' className='h-32 w-32' /> */}
          <p className='text-3xl mt-5 font-bold'>Fill The Form</p>
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
          <button className=' mt-4 w-96 px-2 py-2  rounded-lg bg-slate-900 text-teal-100' type="submit">Submit</button>
        </form>
      </div>

      <hr class="h-px bg-gray-200 border-0 dark:bg-gray-100 mt-3"></hr>

      {/* table */}

      <div class=" flex flex-col w-full h-full text-white shadow-md rounded-xl bg-clip-border ">
        <table className="text-left table-auto min-w-max font-mono overflow-auto">
          <tr className='text-2xl'>
            <th className="p-3 border-b">
              <p>SN</p></th>
            <th className="p-3 border-b" >
              <p>First Name</p></th>
            <th className="p-3 border-b">
              <p>Last Name</p></th>
            <th className="p-3 border-b">
              <p>Address</p></th>
            <th className="p-3 border-b">
              <p>Occupation</p></th>
            <th className="p-3 border-b">
              <p>Action</p></th>
          </tr>
          {
            // index = yo unique id delete button triger huda handledelete ma as a  rgument pass hunchha 
            record.map((data, indx) => {
              return (
                <tr className="p-3 border-b" key={indx}>
                  <td className="p-3 border-b">{indx + 1}</td>
                  <td className="p-3 border-b">{data.firstName}</td>
                  <td className="p-3 border-b">{data.lastName}</td>
                  <td className="p-3 border-b">{data.address}</td>
                  <td className="p-3 border-b">{data.occupation}</td>
                  <td className="p-3 flex gap-3 ">
                    <button onClick={() => handleDelete(indx)}>Delete</button>
                    <button onClick={() => handleEdit(indx)}>Edit</button>
                  </td>
                </tr>
                /* 
                When we write functionName() we are calling the function on the spot (executing function).
                On the other hand, writing it like this {functionName} will pass a pointer to the function that needs to be executed later
                but in this case if we pass {handleDelete(indx)} it will generate irregular id so we need to pass it as a arrow function 
                */
              )
            }
            )
          }
        </table>
      </div>
    </div>
  )
}

export default ToDoList



