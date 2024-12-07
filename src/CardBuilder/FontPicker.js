function FontPicker({ onSelectFont }) {
  return (
    <select id="fontPicker" onChange={onSelectFont}>
      <option value="Roboto">Roboto</option>
      <option value="Inter">Inter</option>
      <option value="Montserrat">Montserrat</option>
      <option value="PT Sans">PT Sans</option>
      <option value="Arial">Arial</option>
      <option value="Times New Roman">Times New Roman</option>
      <option value="Courier New">Courier New</option>
      <option value="Georgia">Georgia</option>
      <option value="Verdana">Verdana</option>
    </select>
  );
}

export default FontPicker;
