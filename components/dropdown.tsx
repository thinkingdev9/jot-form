const Dropdown = () => {
  return (
    <select className="appearance-none border-none outline-none bg-transparent text-blue-500">
      <option className="hidden text-center" value="o">○</option>
      <option className="text-center" value="A">A</option>
      <option className="text-center" value="B">B</option>
      <option className="text-center" value="C">C</option>
    </select>
  );
}

export default Dropdown;
/* 
const Dropdown = () => {
  return (
    <select className="appearance-none border-none outline-none bg-transparent text-blue-500">
      <option className="hidden text-center" value="o">o</option>
      <option className="text-center" value="A">A</option>
      <option className="text-center" value="B">B</option>
      <option className="text-center" value="C">C</option>
    </select>
  );
}
*/
/*
import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-5 h-5 rounded-full bg-blue-500 px-2 py-2 hover:bg-blue-300"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-50 mt-2 w-5 origin-top-right rounded-md bg-blue-500 text-white ring-1 shadow-lg ring-black/5 focus:outline-hidden transition ease-out duration-100"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <p className="block py-1 text-sm text-white hover:bg-blue-700 cursor-pointer text-center" role="menuitem" tabIndex={-1} id="menu-item-0">A</p>
            <p className="block py-1 text-sm text-white hover:bg-blue-700 cursor-pointer text-center" role="menuitem" tabIndex={-1} id="menu-item-1">B</p>
            <p className="block py-1 text-sm text-white hover:bg-blue-700 cursor-pointer text-center" role="menuitem" tabIndex={-1} id="menu-item-2">C</p>
          </div>
        </div>
      )}
    </div>
  );
}
*/