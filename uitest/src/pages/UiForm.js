import styled from "styled-components";

import { colors } from "../utils/colors";
import { Input } from "../components/Input";

/**
 * Style-Components
 */

const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.form`
  max-width: 531px;
  width: 100%;
  height: 543px;
  background: ${colors.primary};
  border-radius: 3px;
  padding: 23px 30px;
  box-sizing: border-box;
`;

function UiForm() {
  const inputFields = [
    { label: "You full given name", type: "text", size: "full" },
    {
      label: "Date of Birth",
      type: "date",
      size: "half",
      child: {
        label: "Country of residence or citizenship",
        type: "text",
      },
    },
    {
      label: "What school do you plan to attend?",
      type: "text",
      size: "full",
    },
    {
      label: "Please take a moment to describe your intended area of study:",
      size: "textarea",
      type: "",
    },
  ];

  return (
    <DivContainer>
      <FormContainer>
        {inputFields.map((input) => (
          <Input
            key={input.label + Math.random() * 9999}
            label={input.label}
            {...input}
          />
        ))}
      </FormContainer>
    </DivContainer>
  );
}

export default UiForm;
