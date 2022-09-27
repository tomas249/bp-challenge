import styled from "@emotion/styled";

export type InputFieldProps = {
  value: unknown;
  label: string;
  placeholder?: string;
  type: string;
  required?: boolean;
  onParse?: (newValue: string) => unknown;
  onChange: (newValue: unknown) => void;
};

// TODO: Could add validations too
export function InputField({
  value,
  label,
  placeholder,
  type,
  required = true,
  onParse,
  onChange,
}: InputFieldProps) {
  function handleChange(value: string) {
    const parsedValue = onParse ? onParse(value) : value;
    onChange(parsedValue);
  }

  return (
    <Container>
      <label>{label}</label>
      <input
        type={type}
        value={String(value)}
        placeholder={placeholder || label}
        required={required}
        onChange={(e) => handleChange(e.target.value)}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.8rem 0;
  color: #000;

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input {
    color: #000;
    padding: 0.5rem;
    border: 1px solid #000;
    border-radius: 0.5rem;
    outline: none;
    background-color: #f5f8fa;
  }
`;
