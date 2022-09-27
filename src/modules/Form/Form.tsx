import { useState } from "react";
import styled from "@emotion/styled";

import { InputField, InputFieldProps } from "@components/InputField";
import { useReCaptcha } from "@hooks/useReCaptcha";

type FieldProps = Omit<InputFieldProps, "onChange"> & {
  parse?: (value: string) => unknown;
};

export type FieldsList = FieldProps[];

export type FormProps = {
  fieldsList: FieldsList;
  onSubmit: (values: Record<string, unknown>) => void;
  onSubmitMessage: string;
};

export function Form({ fieldsList, onSubmit, onSubmitMessage }: FormProps) {
  const fieldsInit = fieldsList.reduce((acc, field) => {
    acc[field.label] = field.value;
    return acc;
  }, {} as Record<string, unknown>);

  const [fields, setFields] = useState(fieldsInit);

  function handleOnChange(label: string, value: unknown) {
    setFields({
      ...fields,
      [label]: value,
    });
  }

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSubmit(fields);
    setFields(fieldsInit); // Reset form
  }

  return (
    <Container onSubmit={handleFormSubmit}>
      {fieldsList.map((field) => (
        <InputField
          key={field.label}
          label={field.label}
          type={field.type}
          value={fields[field.label]}
          onParse={field.parse}
          onChange={(newValue) => handleOnChange(field.label, newValue)}
        />
      ))}
      <button type="submit">{onSubmitMessage}</button>
    </Container>
  );
}

const Container = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
`;
