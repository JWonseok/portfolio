const TodoList = ()=>{

    const EventSubmit = (e : React.FormEvent<HTMLFormElement>)=>{
        const input = document.querySelector(".todo-input");
        e.preventDefault();
    }

    return (
        <div>
            <h1>Todo List</h1>
            <form className="todo-form" onSubmit={EventSubmit}>
                <input type="text" className="todo-input" placeholder="새로운 할일 추가"/>
                <button type="submit">추가</button>
            </form>
        </div>
    )
}

export default TodoList;