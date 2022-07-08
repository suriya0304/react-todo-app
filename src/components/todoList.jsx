import React, { useState } from 'react';
import TodoForm from './TodoForm'
import Todo from './todo'

export default function TodoList(){


    const [todos,setTodos]=useState([])

    const submitHandle=(input)=>{
        if(!input.value ){
            return
        }
        setTodos([input,...todos])
    }
    console.log(todos)
    const completeTodo=(id)=>{
        let newTodo=todos.map((todo)=>{
            if(todo.id===id){
                todo.isComplete=!todo.isComplete
            }
            return todo
        })
        setTodos(newTodo)
        
    }

    const updateTodo=()=>{
        
    }

    const removeTodo=(id)=>{
        let newArr=todos.filter(todo=>{
            return (todo.id!==id)
                
        })
        setTodos(newArr)
        console.log(newArr)
    }
    return (
        <div>
            <h1>what you wanna do today</h1>
            <TodoForm onSubmit={submitHandle}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )


}