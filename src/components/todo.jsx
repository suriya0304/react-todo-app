import React,{useState} from 'react';
import TodoForm from './TodoForm'
import {AiOutlineCloseCircle} from "react-icons/ai"
import {AiOutlineEdit} from "react-icons/ai"

export default function Todo({todos,completeTodo,updateTodo,removeTodo}){

    const [edit,setEdit]=useState({id:null,value:''})
    
    if(edit.id){
        return <TodoForm onSubmit={()=>{
            setEdit({id:null,value:''})
        }}>
    }
    function toEdit(a){
        setEdit({id:a,value:''})
    }
    return 
        todos.map((todo,index)=>(
            <div className={todo.isComplete? 'todo-row complete':'todo-row'} key={index}>
                
                <div key={todo.id} onClick={()=>completeTodo(todo.id)} >
                    {todo.value}
                </div>
                
                <div className='react-icon'>
                    <AiOutlineCloseCircle onClick={()=>removeTodo(todo.id)} />
                    <AiOutlineEdit onClick={()=>toEdit(todo.id)} />
                </div>

            </div>
        ))
}