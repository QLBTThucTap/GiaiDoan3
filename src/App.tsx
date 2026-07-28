import { useState } from "react";
import Button from "./button/button";
import IconHeart from "./button/icon-heart";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="flex flex-wrap items-center gap-5">
        <Button
          size="sm"
          variant="primary"
          onClick={() => setIsLoading(!isLoading)}
        >
          Toggle loading
        </Button>

        <Button size="md" variant="secondary">
          Button
        </Button>

        <Button
          isLoading={isLoading}
          iconLeft={<IconHeart></IconHeart>}
          size="lg"
          variant="ghost"
          //className="font-bold text-xl"
        >
          Button
        </Button>
      </div>
    </>
  );
}

export default App;
/*
  1. stroke trong ngữ cảnh này là một thuộc tính (attribute) của SVG, dùng để xác định màu sắc cho đường viền (đường kẻ) của hình vẽ.
  - SVG có 2 thuộc tính màu chính:
    + fill: Màu bên trong (phần ruột) của hình.
    + stroke: Màu đường viền (phần khung) của hình.

  - Ví dụ trực quan:
// Hình tròn với fill="red", stroke="blue"
  <svg>
    <circle cx="50" cy="50" r="40" fill="red" stroke="blue" stroke-width="4" />
  </svg>
  Bên trong hình tròn → màu đỏ.

  Đường viền bao quanh → màu xanh dương.
  - Mở rộng: stroke thường đi kèm với:
Thuộc tính	              Ý nghĩa
stroke="red"	            Màu viền
stroke-width="2"	        Độ dày viền (px)
stroke-linecap="round"	  Bo tròn đầu đường kẻ
stroke-dasharray="5,5"	  Viền đứt nét
stroke-current            Lấy mã màu theo mã màu từ color
  */
