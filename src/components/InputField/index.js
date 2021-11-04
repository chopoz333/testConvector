import React from "react";
import styled from "styled-components";

const InputField = ({
  type,
  label,
  placeholder = "",
  onChange,
  onKeyClick,
  disabled = false,
  value,
}) => {
  return (
    <>
      {label &&
      <p>{label}</p>
      }
      <Input
        type={type}
        placeholder={placeholder}
        onKeyPress={e => onKeyClick(e)}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
    </>
  )
};

const Input = styled.input`
  border: gray 1px solid;
  border-radius: 5px;
  outline: none;
  padding: 8px 15px 8px 15px;
  width: 300px;
`;

export default InputField;