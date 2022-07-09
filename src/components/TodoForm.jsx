import React, { useState,useRef,useEffect } from 'react';


function TodoForm(props){
    const [input,setInput]=useState('')
    
    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    })

    const submitHandle=(e)=>{
        e.preventDefault()
        setInput('')

        props.onSubmit({id:Math.floor(Math.random()*10000),value:input,isComplete:false})
    }
    const changeHandle= (e)=>{
        setInput(e.target.value)
    }

    return(
        <form onSubmit={submitHandle} className='todo-form'>
      {props.edit ? 
        (
        <div>
          <input
            placeholder='Update your item'
            value={props.edit}
            onChange={changeHandle}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={submitHandle} className='todo-button edit'>
            Update
          </button>
        </div>
        ) : (
        <div>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={changeHandle}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={submitHandle} className='todo-button'>
            Add todo
          </button>
        </div>
      )}
    </form>
    )
}

export default TodoForm;