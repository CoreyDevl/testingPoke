import { useState } from "react";

export const Dropdown = ({ title, options, onSelect }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (options) => {
    onSelect(options);
    setIsOpen(false);
  }

  return (
    <div className="c-dropdown">
      <button onClick={() => setIsOpen(true)}>{title}</button>
      {isOpen && (
        <ul role="menu">
          {options.map(options => (
            <li key={options} role="menuitem" onClick={() => handleSelection(options)}>{options}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

