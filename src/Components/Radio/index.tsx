import { RadioContainer, RadioInput } from "./Radio.styles";

interface RadioProps {
  color: string;
  checked: boolean;
}

const Radio: React.FC<RadioProps> = ({ color, checked }) => {
  return (
    <RadioContainer color={color}>
      {checked && <RadioInput color={color} />}
    </RadioContainer>
  );
};

export default Radio;
