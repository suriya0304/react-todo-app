import React, { useState } from 'react';


function TodoForm(props){
    const [input,setInput]=useState('')
    
    const submitHandle=(e)=>{
        e.preventDefault()
        setInput('')

        props.onSubmit({id:Math.floor(Math.random()*10000),value:input})
    }
    const changeHandle= (e)=>{
        setInput(e.target.value)
    }

    return(
        <form className='too-form' onSubmit={submitHandle}>
            <input type='text' onChange={changeHandle} value={input} placeholder='add a ToDo' className='too-input'/>
            <button className='too-button'>add</button>
        </form>
    )
}

export default TodoForm;