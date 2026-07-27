import { useState, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  newTodoString: string;
  onNewTodoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddingBtnClick: () => void;
};

export const CreateNewTodo = ({
  newTodoString,
  onNewTodoChange,
  onAddingBtnClick,
}: Props) => {
  const [error, setError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError(false);
    }
    onNewTodoChange(e);
  };

  const handleAddClick = () => {
    if (!newTodoString.trim()) {
      setError(true);
      return;
    }
    onAddingBtnClick();
  };

  return (
    <div>
      <div className="flex items-start gap-2">
        <div className="flex-1">
          <Input
            value={newTodoString}
            onChange={handleChange}
            aria-invalid={error}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onAddingBtnClick();
              }
            }}
          />
          {error && (
            <p className="mt-1 text-xs text-destructive">
              Vui lòng điền thông tin vào ô trống!
            </p>
          )}
        </div>
        <Button onClick={handleAddClick}>Thêm</Button>
      </div>
    </div>
  );
};
