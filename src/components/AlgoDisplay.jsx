import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { sortingAlgorithms } from "../common/config";
import { useControls, useData } from "../common/store";
import shallow from "zustand/shallow";
import { SortManager } from "./visualizer/SortManager";

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 10px;
  row-gap: 10px;

  & > div {
    max-width: 100%;
    min-width: 375px;
  }
`;

const flexCenter = { display: "flex", justifyContent: "center" };

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
      style={{ maxWidth: "100%" }}
    >
      {value === index && children}
    </div>
  );
}

export function AlgoDisplay() {
  const resetSorting = useControls((state) => state.resetSorting);

  const [sortingArray, algorithm] = useData(
    (state) => [state.sortingArray, state.algorithm],
    shallow
  );

  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    resetSorting();
  }, [algorithm]);

// ...

// ...

// ...

const handleInputChange = (event) => {
  const inputValue = event.target.value;
  const inputValues = inputValue.split(",").map((value) => value.trim());

  if (inputValues.every((value) => /^[a-zA-Z0-9]+$/.test(value))) {
    // Only alphanumeric characters are allowed
    setInputError(false);
    // Update the input array
    // ... Your code to update the input array goes here ...
  } else {
    // Display error message for invalid input
    setInputError(true);
  }
};

// ...

// ...


// ...


  if (sortingArray.length === 0) {
    return (
      <h3 style={flexCenter}>
        Please enter input array or use generate button
      </h3>
    );
  }

  return (
    <div style={flexCenter}>
      {sortingAlgorithms.map((algoInfo, idx) => (
        <TabPanel value={algorithm} index={idx} key={algoInfo.name}>
          <SortManager
            array={sortingArray}
            sortFunction={algoInfo.component}
            sortingAlgorithmName={algoInfo.name}
          />
        </TabPanel>
      ))}
      <TabPanel value={algorithm} index={sortingAlgorithms.length}>
        {inputError && (
          <h3 style={flexCenter}>Please enter only integers</h3>
        )}
        <FlexWrap>
          {sortingAlgorithms.map((algoInfo) => (
            <SortManager
              array={sortingArray}
              sortFunction={algoInfo.component}
              sortingAlgorithmName={algoInfo.name}
              key={algoInfo.name}
            />
          ))}
        </FlexWrap>
      </TabPanel>
    </div>
  );
}
