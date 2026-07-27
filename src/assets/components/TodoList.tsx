import { Todo } from "./Todo";
import type { FilterType, TodoType } from "../../App";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const TodoList = ({
  todoList,
  setFilter,
  filter,
  updateIsCompleted,
  deleteTodo,
  editTodo,
}: {
  todoList: TodoType[];
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  updateIsCompleted: (todoId: string) => void;
  deleteTodo: (todoId: string) => void;
  editTodo: (todoId: string, newName: string) => void;
}) => {
  return (
    <div>
      <Tabs
        value={filter}
        onValueChange={(value) => setFilter(value as FilterType)}
        className="mt-4"
      >
        <TabsList>
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="active">Chưa xong</TabsTrigger>
          <TabsTrigger value="completed">Đã xong</TabsTrigger>
        </TabsList>
      </Tabs>

      {todoList.length === 0 ? (
        <div className="py-4 text-center">
          <p className="text-sm text-muted-foreground">
            Không có công việc nào
          </p>
        </div>
      ) : (
        <div className="mt-2">
          {todoList.map((todo) => (
            <Todo
              todoId={todo.id}
              key={todo.id}
              name={todo.name}
              isCompleted={todo.isCompleted}
              updateIsCompleted={updateIsCompleted}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))}
        </div>
      )}
    </div>
  );
};
