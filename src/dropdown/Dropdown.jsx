import React, { useEffect, useState } from "react";
import useClickOutside from "./useClickOutside";

export default function Dropdown({ children, trigger, onToggle }) {
  const [show, setShow] = useState(false);
  const dropRef = useClickOutside(() => setShow(false));

  useEffect(() => {
    onToggle?.(show);
  }, [show, onToggle]);

  return (
    <div
      className="relative w-fit"
      onClick={() => setShow((curr) => !curr)}
      ref={dropRef}
    >
      <div className="cursor-pointer">{trigger}</div>
      {show && (
        <ul className="min-w-max absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg overflow-hidden z-50 border border-gray-100">
          {children}
        </ul>
      )}
    </div>
  );
}

export function DropdownItem({ children }) {
  return (
    <li className="flex gap-3 items-center px-4 py-2.5 text-gray-800 hover:bg-gray-50 cursor-pointer text-sm transition">
      {children}
    </li>
  );
}
