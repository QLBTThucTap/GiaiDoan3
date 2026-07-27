import { Pencil, Trash2, Save } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export const Todo = ({
  todoId,
  name,
  isCompleted,
  updateIsCompleted,
  deleteTodo,
  editTodo,
}: {
  todoId: string;
  name: string;
  isCompleted: boolean;
  updateIsCompleted: (todoId: string) => void;
  deleteTodo: (todoId: string) => void;
  editTodo: (todoId: string, newName: string) => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(name);

  const onSaveClick = () => {
    editTodo(todoId, editValue);
    setIsEditing(false);
  };

  const onEditClick = () => {
    setEditValue(name);
    setIsEditing(true);
  };

  if (isEditing) {
    return (
      <div className="flex items-center gap-2 py-1">
        <Input
          value={editValue}
          autoFocus
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSaveClick();
            }
          }}
        />
        <Button size="icon" variant="ghost" onClick={onSaveClick}>
          <Save />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 py-1">
      <div className="flex-1 flex items-center justify-between gap-3 px-3 py-1.5 text-sm rounded-md hover:bg-accent transition-colors">
        <span className={isCompleted ? "line-through text-muted-foreground" : ""}>
          {name}
        </span>
        <Checkbox
          checked={isCompleted}
          onCheckedChange={() => updateIsCompleted(todoId)}
        />
      </div>
      <Button size="icon" variant="ghost" onClick={onEditClick}>
        <Pencil />
      </Button>
      <Button size="icon" variant="ghost" onClick={() => deleteTodo(todoId)}>
        <Trash2 className="text-destructive" />
      </Button>
    </div>
  );
};
