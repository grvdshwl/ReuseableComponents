import { useState } from "react";
import {
  DebounceContainer,
  DebounceInput,
  DebounceNormalText,
  DebounceText,
  DebounceTextContainer,
  DebounceTextHeading,
} from "./Debounce.styles";
import { debounce } from "../../helpers/helper";

const Debounce = () => {
  const [input, setInput] = useState("");
  const [debounceInput, setDebounceInput] = useState("");
  const debouncedText = debounce((value: string) => {
    setDebounceInput(value);
  }, 500);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
    debouncedText(value);
  };

  return (
    <DebounceContainer>
      <DebounceInput onChange={handleChange} />
      <DebounceTextContainer>
        <DebounceTextHeading>Default text:</DebounceTextHeading>
        <DebounceNormalText>{input}</DebounceNormalText>
      </DebounceTextContainer>
      <DebounceTextContainer>
        <DebounceTextHeading>Debounce text:</DebounceTextHeading>
        <DebounceText>{debounceInput}</DebounceText>
      </DebounceTextContainer>
    </DebounceContainer>
  );
};

export default Debounce;
