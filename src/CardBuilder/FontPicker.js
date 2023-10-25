function FontPicker({ onSelectFont }) {
  return (
    <select id="fontPicker" onChange={onSelectFont}>
      <option value="Roboto">Roboto</option>
      <option value="Inter">Inter</option>
      <option value="Inter">Montserrat</option>
      <option value="PT Sans">Montserrat</option>
    </select>
  );
}

export default FontPicker;
