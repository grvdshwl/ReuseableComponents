import { useState } from "react";
import { AccordianBox, AccordianContainer } from "./Accordian.styles";

export interface AccordianDataProps {
  id: string;
  title: string;
  content: string;
}
interface AccordianProps {
  data: AccordianDataProps[];
}

const Accordian: React.FC<AccordianProps> = ({ data: accordianData }) => {
  const [selectedItem, setSelectedItem] = useState("");
  const handleSelect = (id: string) => {
    if (selectedItem !== id) {
      setSelectedItem(id);
    } else {
      setSelectedItem("");
    }
  };
  return (
    <AccordianContainer>
      {accordianData.map((data) => (
        <AccordianBox
          {...data}
          isSelected={selectedItem === data.id}
          onPress={handleSelect.bind(null, data.id)}
        />
      ))}
    </AccordianContainer>
  );
};

export default Accordian;
