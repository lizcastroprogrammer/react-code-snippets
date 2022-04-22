class TodoApp extends React.Component {
    state = {
      tasks: ["task 1", "task 2", "task 3"],
    };
  
    handleSubmit = (task) => {
      this.setState({ tasks: [...this.state.tasks, task] });
    };
  
    handleDelete = (index) => {
      let newTasks = [...this.state.tasks];
      newTasks.splice(index, 1);
      this.setState({tasks: newTasks});
    }
  
    render() {
      return (
        <div className="wrapper">
          <div className="card frame">
            <SubmitForm onFormSubmit={this.handleSubmit} />
            <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
          </div>
        </div>
      );
    }
  }
  //SubmitForm is a separate component
  class SubmitForm extends React.Component {
    state = { item: "" };
  
    handleSubmit = (e) => {
      e.preventDefault();
      if (this.state.item === "") return;
      this.props.onFormSubmit(this.state.item);
      this.setState({ item: "" });
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Enter Item"
            value={this.state.item}
            onChange={(e) => this.setState({ item: e.target.value })}
          />
          <button className="button">Add</button>
        </form>
      );
    }
  }
  //TodoList is a separate component
  const TodoList = (props) => {
    const todos = props.tasks.map((todo, index) => {
      return (
        <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
      );
    });
    return <div className="list-wrapper">{todos}</div>;
  };
  //Todo is a separate component
  const Todo = (props) => {
    return (
      <div id={props.id * 10} className="list-item test-item">
        {props.content}
        <button
          id={props.id}
          className="delete is-pulled-right"
          onClick={() => {
            props.onDelete(props.id);
          }}
        >
          X
        </button>
      </div>
    );
  };
  
  ReactDOM.render(React.createElement(TodoApp), document.getElementById("root"));