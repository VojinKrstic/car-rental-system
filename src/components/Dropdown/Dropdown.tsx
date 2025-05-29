import Image from "next/image";
import { DropdownStyled } from "./DropdownStyled";
import { useCallback, useEffect, useRef, useState } from "react";
import { RIGHT_ARROW } from "@/assets/images";

type Option = {
  name: string;
  label: string;
};

type DropdownProps = {
  options: Option[];
  label: string;
};

const Dropdown = ({ options, label }: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleOptionClick = useCallback(
    (e: React.MouseEvent, value: string) => {
      e.stopPropagation();
      setSelectedOption(value);
      setIsOpen(false);
    },
    []
  );
  const isSelected = (carLabel: string): boolean => {
    if (selectedOption === carLabel) return true;
    return false;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <DropdownStyled>
      <div
        onClick={toggleDropdown}
        ref={dropdownRef}
        className="dropdown-container"
      >
        <button className="dropdown-button">
          <p className="car-name">{selectedOption ?? ""}</p>
          <div className={`dropdown-chevron ${isOpen ? "open" : ""}`}>
            <Image
              src={RIGHT_ARROW}
              alt="dropdown-arrow"
              width={16}
              height={16}
            />
          </div>
        </button>
        {isOpen && (
          <div className="dropdown-list">
            {options.map((option) => (
              <div
                key={option.label}
                onClick={(e) => {
                  handleOptionClick(e, option.label);
                }}
                className={`dropdown-option ${
                  isSelected(option.label) ? "selected" : ""
                }`}
              >
                <p>{option.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <label className={`dropdown-label ${selectedOption ? "selected" : ""}`}>
        {label}
      </label>
    </DropdownStyled>
  );
};

export default Dropdown;
