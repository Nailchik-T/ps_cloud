import "./Select.scss";
import { ChangeEvent, useState } from "react";
interface SelectItem {
  value: string;
  label: string;
  cost: string;
}

interface SelectProps {
  items: SelectItem[];
  icon?: string;
  label: string;
}
const Select = ({ items, icon, label }: SelectProps) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedItemValue = event.target.value;
    const foundItem = items.find((item) => item.value === selectedItemValue);
    if (foundItem) {
      setSelectedItem(foundItem);
    }
  };
  return (
    <>
      <div className="select-container">
        {icon && (
          <img src={icon} alt="icon" className="select-container__image" />
        )}
        <div className="select-container__wrapper">
          <select
            className="select-container__dropdown"
            onChange={handleSelectChange}
            value={selectedItem.value}
          >
            {items.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <label className="select-container__label">{label}</label>
          <h3 className="select-container__cost">
            {selectedItem.cost.toLocaleString()} тг/мес
          </h3>
        </div>
      </div>
    </>
  );
};

export default Select;
