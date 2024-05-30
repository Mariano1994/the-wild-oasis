import Counter from "../components/Counter";

export default async function Page() {
  const todosData = await fetch("https://jsonplaceholder.typicode.com/todos");

  const Todos = await todosData.json();

  return (
    <div>
      <h1>Cabins Page</h1>
      <ul>
        {Todos.map((todo) => (
          <li key={todo.id}>
            <span className=" font-bold">Task </span> {[todo.title]} / status:{" "}
            {todo.completed ? "Completed" : "Incompleted"}
          </li>
        ))}
      </ul>

      <Counter todos={Todos} />
    </div>
  );
}
