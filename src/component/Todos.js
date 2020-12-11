import React from 'react'


const Todo = ({Todos, deleteTodo}) => {
	const TodoList = Todos.length ? (
			Todos.map((Todo) => {
				return (

					<div key={Todo.id}>
					<span onClick={()=>{deleteTodo(Todo.id)}}>{Todo.content}</span>


					</div>)
			})
		) : (<p>No Todos Today!</p>)


	return(

			<div>
				<h1 className="center">Todos</h1>
			{TodoList}</div>
		)
}
export default Todo