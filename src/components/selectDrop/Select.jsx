import React, { useState } from "react";
import "../selectDrop/select.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
const Select = ({ items, placeholder, icon }) => {
  const [isOpen, setIsopne] = useState(false);
  const [slectItemIndex, setslectItemIndex] = useState(null);
  const [slectItem, setslectItem] = useState(placeholder);
  const [list, setlist] = useState(items);
  const [listValue2, setlistValue2] = useState(items);
  const openSlect = () => {
    setIsopne(!isOpen);
  };
  const slectHandler = (index, items) => {
    setslectItemIndex(index);
  };
  const slectItemsHandler = (items) => {
    setslectItem(items);
  };
  const filter = (e) => {
    const changingValue = e.target.value.toLowerCase();
    if (changingValue === "") {
      setlist(listValue2);
    } else {
      const filteredItem = listValue2.filter((item) =>
        item.toLowerCase().includes(changingValue)
      );
      const updateItems = filteredItem.filter(
        (item, index) => filteredItem.indexOf(item) === index
      );
      setlist(updateItems);
    }
  };
  return (
    <>
      <ClickAwayListener
        onClickAway={() => {
          setIsopne(false);
        }}
      >
        <div className="searchDrop">
          {icon}
          <span
            className="mb-0 catagories d-block"
            onClick={openSlect}
            style={{ fontSize: "14px" }}
          >
            {slectItem.length > 14
              ? slectItem.substr(0, 10) + "..."
              : slectItem}
            <KeyboardArrowDownIcon className="arrow" onClick={openSlect} />
          </span>

          {isOpen ? (
            <>
              <div className="slectDrop openSlect">
                <input
                  type="text"
                  placeholder="search hear...."
                  onChange={filter}
                />
                <ul className="searchResult">
                  {list.map((items, index) => (
                    <li
                      className={slectItemIndex === index ? "active" : ""}
                      key={index}
                      onClick={() => {
                        slectHandler(index);
                        setIsopne(false);
                        slectItemsHandler(items);
                      }}
                    >
                      {items}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : null}
        </div>
      </ClickAwayListener>
    </>
  );
};

export default Select;
