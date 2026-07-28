import React, {
  cloneElement,
  type ComponentProps,
  type HTMLAttributes,
} from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ComponentProps<"button"> & {
  children: React.ReactNode; //ây là một Union Type (kiểu hợp), tức là nó bao gồm TẤT CẢ những thứ có thể được render (hiển thị) trong React.
  variant: ButtonVariant;
  size: ButtonSize;
  //iconLeft?: React.ReactElement; //Đây là một object (đối tượng JavaScript) thuần túy, bất biến (immutable), dùng để mô tả một thành phần (component) hoặc một thẻ HTML sẽ hiển thị trên giao diện.
  iconLeft?: React.ReactElement<HTMLAttributes<HTMLElement>, string>;
  isLoading?: boolean;
};

export default function Button({
  children,
  variant = "ghost",
  size = "lg",
  iconLeft,
  className,
  isLoading = false,
  ...buttonProps
}: ButtonProps) {
  console.log(iconLeft?.props);

  //1. định nghĩa một bảng ánh xạ (mapping) các class Tailwind CSS tương ứng với từng kiểu nút (variant), size, icon
  //chỉnh màu chữ và màu nền
  const variantClassNames: Record<ButtonVariant, string> = {
    primary: "bg-orange-400 text-white", //Nút chính có nền cam, chữ trắng.
    secondary: "bg-black text-white", //Nút phụ có nền đen, chữ trắng.
    ghost: "bg-white text-black border border-current", //Nút có nền trắng, chữ đen và viền đen trùng màu chữ
  };

  //Chỉnh viền ngoài (stroke) của icon theo kiểu variant
  const iconVariantClassNames: Record<ButtonVariant, string> = {
    primary: "text-white stroke-current",
    secondary: "text-white stroke-current",
    ghost: "stroke-current",
  };

  //chỉnh kích cỡ chữ
  const sizeClassNames: Record<ButtonSize, string> = {
    sm: "text-sm px-2 ",
    md: "text-base px-4",
    lg: "text-lg px-6",
  };

  //chỉnh kích cỡ icon (khi tăng size cỡ chữ thì icon cũng tăng theo
  //VD: size="md" -> cỡ chữ medium -> icon cỡ md: "size-5",
  //)
  const iconSizeClassNames: Record<ButtonSize, string> = {
    sm: "size-4 ",
    md: "size-5",
    lg: "size-6",
  };

  const loadingSizeClassNames: Record<ButtonSize, string> = {
    sm: "size-4 ",
    md: "size-5",
    lg: "size-8 border-4",
  };

  /* 
 GIẢI THÍCH CƠ CHẾT HOẠT ĐỘNG CỦA cloneElement
 - Khi bạn truyền icon vào (ví dụ: <IconHeart/>), nó chỉ là một element tĩnh. Nhiệm vụ của
 cloneElement(iconLeft, { className: ... }) là sẽ "sao chép" icon đó và tiêm thêm
 class size-4/size-5/size-6 vào icon mà người dùng không cần tự chỉnh kích 
 thước icon thủ công.
 
 - Nếu không truyền bất kỳ icon nào thì trả về null

                    ↓↓↓
 */
  const { className: iconLeftClassName, ...iconLeftProps } =
    iconLeft?.props || {};

  const iconLeftClone = iconLeft
    ? cloneElement(iconLeft, {
        className: twMerge(
          iconSizeClassNames[size],
          iconVariantClassNames[variant],
          iconLeftClassName,
        ),
        ...iconLeftProps,
      })
    : null;

  const loading = (
    <div
      className={twMerge(
        "size-5 border-2 border-current border-t-transparent border-b-transparent animate-spin rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 [&~*]:opacity-0  [&~*]:invisible",
        loadingSizeClassNames[size],
      )}
    ></div>
  );

  return (
    <>
      <button
        className={twMerge(
          "flex items-center justify-center gap-2 cursor-pointer py-2 px-4 rounded-full bg-gray-200 font-medium border border-transparent disabled:pointer-events-none disabled:select-none disabled:opacity-50 relative",

          variantClassNames[variant],
          sizeClassNames[size],
          className, // tạo một class tùy chỉnh dựa trên 1 mẫu có sẵn
        )}
        disabled={buttonProps.disabled || isLoading}
        {...buttonProps} //// lấy các thành phần còn lại của class tùy chỉnh dựa trên 1 mẫu có sẵn
      >
        {isLoading && loading}
        {iconLeftClone}
        {isLoading ? <div>{children}</div> : children}
      </button>
    </>
  );
}
