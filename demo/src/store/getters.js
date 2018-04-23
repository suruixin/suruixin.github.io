const getters = {
	newTodos:(state) => {
		return state.todos.filter(todo => {todo.done}) 
	}
};

export default getters