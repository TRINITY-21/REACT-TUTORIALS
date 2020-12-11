import React from 'react'
import Todos from '../component/Todos'
import TodoAdd from '../component/TodoAdd'

class Todo extends React.Component{
	constructor(){
		super()
		this.state={
			Todos : [
			{'id':1, 'content' : 'Code in React'},
			{'id':2, 'content' : 'Code in Vue'}
			]
		}


	}

	deleteTodo =(id)=>{
		let Todos = this.state.Todos.filter((Todo)=>{
			return Todo.id !== id
		})

		this.setState({
				Todos
		})
	}

	addTodo = (Todo) =>{
		Todo.id = Math.random()
		let Todos = [...this.state.Todos, Todo]

		this.setState({
			Todos
		})

	}

	render(){
		return(
			<div>

			<Todos Todos={this.state.Todos} deleteTodo={this.deleteTodo}/> 
			<TodoAdd addTodo={this.addTodo}/>
			</div>)
	}
}

export default Todo
