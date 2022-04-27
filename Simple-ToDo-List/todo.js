function Todo({todo, index, remove}) {
    function handle() {
        remove(index);
    }

    return <div className="todo" onClick={handle}><span className="todo-text">{todo.text}</span><span className="todo-delete">x</span></div>
}