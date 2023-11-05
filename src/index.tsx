import React, { useRef } from "react";
import "./style.css";
const TageInput = ({ tags, setTags, name,error }:any) => {
  const refInput = useRef(null);
  const handleInputChange = (e:any) => {
    const inputValue = e.target.value.trim();
    if (inputValue !== "") {
      if (inputValue.endsWith(",")) {
        setTags((prevState:any) => ({
          ...prevState,
          [name]: [...prevState[name], inputValue.slice(0, -1)],
        }));
        e.target.value = "";
      }
    }
  };
  const handleInputBlur = (e:any) => {
    const inputValue = e.target.value.trim();

    if (inputValue !== "") {
      setTags((prevState:any) => ({
        ...prevState,
        [name]: [...prevState[name], inputValue],
      }));
      e.target.value = "";
    }
  };
  const removeItem = (index:any) => {
    const newItems = [...tags]; // Make a copy of the array
    newItems.splice(index, 1); // Remove the item by its index
    setTags((prevState:any) => ({
      ...prevState,
      [name]: newItems,
    }));
  };

  return (
    <div style={{ border: error&&"1px solid  #e53e3e" }} className="tagInputContainer">
      <>
        {tags &&
          tags?.map((tag:any, i:any) => (
            <span key={i}>
              {tag?.toString()}
              <div onClick={() => removeItem(i)}>&#10006;</div>
            </span>
          ))}
      </>
      <input
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        placeholder="Add tags separated by comma"
        ref={refInput}
      />
    </div>
  );
};

export default TageInput;
