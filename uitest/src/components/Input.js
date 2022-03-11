import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from "../utils/colors";

/***
 * Styled-Component
 */

const InputContainer = styled.div`
  display: ${(props) => (props.size ? "flex" : "block")};
  justify-content: space-between;
  height: 47px;
  color: ${(props) => (props.color ? props.color : colors.secondary)};
  margin-bottom: 55px;
  flex-direction: row;

  &:nth-child(2) {
    flex: 1;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-style: italic;
`;

const InputField = styled.input`
  width: ${(props) => props.width};
  height: 100%;
  background: transparent;
  border: 1px solid ${(props) => (props.color ? props.color : colors.secondary)};
  outline: none;
  box-sizing: border-box;
  padding: 8px 10px;
  font-size: 19px;
  color: ${(props) => (props.color ? props.black : colors.secondary)};
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 160px;
  background: transparent;
  border: 1px solid ${colors.secondary};
  outline: none;
  box-sizing: border-box;
  padding: 8px 10px;
  font-size: 19px;
  color: ${colors.secondary};
  resize: none;
`;

export const Input = React.forwardRef(
  ({ label, type, size, child, color, onChange }, ref) => {
    switch (size) {
      case "full":
        return (
          <InputContainer width="473px" color={color}>
            <Label htmlFor={label}>{label}</Label>
            <InputField
              id={label}
              color={color}
              type="text"
              ref={ref}
              width="473px"
              onChange={onChange}
            />
          </InputContainer>
        );
      case "half":
        return (
          <InputContainer width={"196px"} size="half">
            <div>
              <Label htmlFor={label}>{label}</Label>
              <InputField id={label} type={type} ref={ref} width={"196px"} />
            </div>
            <div>
              <Label htmlFor={child.label}>{child.label}</Label>
              <InputField
                id={child.label}
                type={child.type}
                ref={ref}
                width={"261px"}
              />
            </div>
          </InputContainer>
        );
      case "textarea":
        return (
          <InputContainer>
            <Label htmlFor={label}>{label}</Label>
            <TextArea />
          </InputContainer>
        );
      default:
        return null;
    }
  }
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  child: PropTypes.object,
  color: PropTypes.string,
  onChange: PropTypes.func,
};
