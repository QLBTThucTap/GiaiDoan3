import { useEffect, useState, type ChangeEvent } from "react";
import { v4 as uuid4 } from "uuid"; //<--- hàm tạo id duy nhất
import { CreateNewTodo } from "./assets/components/CreateNewTodo";
import { TodoList } from "./assets/components/TodoList";

export type TodoType = { id: string; name: string; isCompleted: boolean };
export type FilterType = "all" | "active" | "completed";

function App() {
  const [todoList, setTodoList] = useState<TodoType[]>(() => {
    const saveTodoList = JSON.parse(localStorage.getItem("todoList") ?? "[]");
    if (saveTodoList?.length) {
      return saveTodoList;
    }

    return [];
  });
  const [newTodoString, setNewTodoString] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");
  const onNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoString(e.target.value);
  };

  const onAddingBtnClick = () => {
    const newTodoItem: TodoType = {
      id: uuid4(),
      name: newTodoString,
      isCompleted: false,
    };

    setTodoList([newTodoItem, ...todoList]);
    setNewTodoString("");
  };

  //hàm sửa ô checkbox
  const updateIsCompleted = (todoId: string) => {
    setTodoList((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    });
  };

  // hàm xóa
  const deleteTodo = (todoId: string) => {
    setTodoList((prevState) => prevState.filter((todo) => todo.id !== todoId));
  };

  //hàm sửa
  const editTodo = (todoId: string, newName: string) => {
    if (!newName.trim()) {
      return;
    }

    setTodoList((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, name: newName };
        }
        return todo;
      });
    });
  };

  const filteredTodoList = todoList.filter((todo) => {
    if (filter === "active") {
      return !todo.isCompleted;
    }
    if (filter === "completed") {
      return todo.isCompleted;
    }
    return true;
  });

  //local storage
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  console.log({ newTodoString });

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md mx-auto mt-10 p-6 bg-card text-card-foreground rounded-lg shadow-sm border border-border">
        <p className="text-lg font-semibold mb-4 text-center">
          This is Todo App
        </p>
        <CreateNewTodo
          onAddingBtnClick={onAddingBtnClick}
          newTodoString={newTodoString}
          onNewTodoChange={onNewTodoChange}
        ></CreateNewTodo>

        <TodoList
          todoList={filteredTodoList}
          filter={filter}
          setFilter={setFilter}
          updateIsCompleted={updateIsCompleted}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        ></TodoList>
      </div>
    </div>
  );
}

export default App;
