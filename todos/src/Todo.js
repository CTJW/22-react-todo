const todos = globalState.state.todos;
const { dispatch } = globalState;
function handleSubmit(e) {
  e.preventDefault();
  const action = { type: "ADD_TODO", payload: text };
  dispatch(action);
}
return (
  <div>
    <form action="" onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </form>
    <ul>
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
    </ul>
  </div>
);
export default function Header(props) {
  return <p>Todo</p>;
}
