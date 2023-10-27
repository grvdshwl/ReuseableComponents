import React, { useEffect, useState } from "react";
import {
  AutocompleteContainer,
  AutocompleteInput,
  AutocompleteInputContainer,
  AutocompleteInputIcon,
  AutocompleteMainContainer,
  AutocompleteSuggestionBox,
  AutocompleteSuggestionBoxItem,
  AutocompleteSuggestionBoxText,
  AutocompleteTitle,
} from "./Autocomplete.styles";
import { cityData } from "../../helpers/mockData";
import { Loader } from "../../UI/AppUI/App.styles";

function findCityNames(inputText: string): string[] | null {
  const cities: string[] = cityData;

  const inputLowerCase: string = inputText.toLowerCase();

  const matchingCities = cities.filter((city) =>
    city.toLowerCase().includes(inputLowerCase)
  );

  if (matchingCities.length > 0) {
    return matchingCities.slice(0, 5);
  } else {
    return null;
  }
}

const Autocomplete: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [input, setInput] = useState("");
  const [results, setResults] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isFocused || !input) {
      setIsLoading(true);

      const result = findCityNames(input);
      setTimeout(() => {
        setResults(result);
        setIsLoading(false);
      }, 500);
    }
  }, [input]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const element = event.target as HTMLElement;

      const mainElement = element.closest(".main");

      if (!mainElement) {
        setIsFocused(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <AutocompleteContainer>
      <AutocompleteTitle>Autocomplete</AutocompleteTitle>
      <AutocompleteMainContainer className="main">
        <AutocompleteInputContainer>
          <AutocompleteInput
            placeholder="Enter here"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
            onFocus={() => {
              setIsFocused(true);
            }}
          />
          {isLoading ? <Loader /> : <AutocompleteInputIcon />}
        </AutocompleteInputContainer>
        <AutocompleteSuggestionBox isVisible={isFocused}>
          {isLoading ? (
            <AutocompleteSuggestionBoxText>
              Loading...
            </AutocompleteSuggestionBoxText>
          ) : !!results ? (
            results.map((result) => (
              <AutocompleteSuggestionBoxItem
                key={result}
                onClick={() => {
                  setInput(result);
                  setIsFocused(false);
                }}
              >
                {result}
              </AutocompleteSuggestionBoxItem>
            ))
          ) : (
            <AutocompleteSuggestionBoxText>
              No Results Found.
            </AutocompleteSuggestionBoxText>
          )}
        </AutocompleteSuggestionBox>
      </AutocompleteMainContainer>
    </AutocompleteContainer>
  );
};

export default Autocomplete;
