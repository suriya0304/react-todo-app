import React,{useState} from 'react';
import TodoForm from './TodoForm'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {AiOutlineEdit} from 'react-icons/ai'


export default function Todo({todos,removeTodo,updateTodo,completeTodo}){

    const [edit,setEdit]=useState({id:null,value:''})

    const submitUpdate=(item)=>{
        updateTodo({id:edit.id,value:item.value})
        setEdit({id:null,value:''})
    }

    if(edit.id){
        return <TodoForm edit={edit.value} onSubmit={submitUpdate}/>
    }

    return (
        todos.map((todo,index)=>(
            <div className={todo.isComplete?'todo-row complete todo-container' : 'todo-row todo-container'} key={index}>
                <div onClick={() => completeTodo(todo.id)}>{todo.value}</div>
                <div className='icons' key={todo.id}>
                    <AiOutlineCloseCircle className='delete-icon' onClick={()=>removeTodo(todo.id)}/>
                    <AiOutlineEdit className='edit-icon' onClick={()=>setEdit(todo)}/>
                </div>
            </div>
        ))
    )
}