import React from 'react';
import Dropdown from 'react-dropdown';

// Styles
// import 'react-dropdown/style.css';
import './dropdown.css';

const options = [
  { value: '1', label: '$1' },
  { value: '3', label: '$3' },
  { value: '5', label: '$5' },
];
const defaultOption = options[0];

type DropdownMenuProps = {
  onSelectTip: (value: string) => void;
};

const DropdownMenu = ({ onSelectTip }: DropdownMenuProps) => {
  return (
    <Dropdown
      controlClassName="myControlClassName"
      options={options}
      onChange={({ value }) => onSelectTip(value)}
      value={defaultOption}
      placeholder="Select an option"
    />
  );
};

export default DropdownMenu;
