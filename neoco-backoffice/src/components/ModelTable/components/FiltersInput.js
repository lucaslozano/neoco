import * as React from "react";
import { useState, useEffect } from "react";
import { MultiSelect } from "bluejay-ui";
import styled from "styled-components";

const FiltersInput = ({
  options = [],
  onChange = () => {},
  style = {},
  auxData = {},
}) => {
  const [filterTypes, setFilterTypes] = useState([]);
  const [currentFilters, setCurrentFilters] = useState([]);

  useEffect(() => {
    setFilterTypes(options);
  }, [options]);

  return filterTypes ? (
    <Container>
      <MultiSelect
        {...style}
        styles={{
          menu: (provided) => ({
            ...provided,
            padding: 0,
          }),
          option: (provided) => ({
            ...provided,
            padding: "4px 8px",
          }),
          control: (provided, { selectProps: { width } }) => ({
            ...provided,
            width: width,
          }),
          singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = "opacity 300ms";

            return { ...provided, opacity, transition };
          },
        }}
        placeholder={"Filtrar"}
        defaultValue={currentFilters}
        isMulti
        name="filters"
        options={getNextOptions({
          filters: currentFilters,
          filterTypes,
          aux: auxData,
        })}
        value={currentFilters}
        className="basic-multi-select"
        classNamePrefix="select"
        isSearchable={false}
        onChange={(options) => {
          if (!options || !options.length) {
            setCurrentFilters([]);
            onChange([]);
          } else {
            const lastFilter =
              options && options.length ? options[options.length - 1] : null;
            if (
              lastFilter &&
              !lastFilter.relation &&
              typeof lastFilter.children === "undefined"
            ) {
              const lastFilter = options[options.length - 2];
              const children = options[options.length - 1];
              const nextFilter = {
                ...lastFilter,
                children,
                label: `${lastFilter.label}: ${children.label}`,
              };
              const data = [...options.slice(0, -2), nextFilter];

              setCurrentFilters(data);
              onChange(data);
            } else {
              setCurrentFilters(options);
            }
          }
        }}
      />
    </Container>
  ) : (
    <></>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
`;

function getNextOptions({ filters, filterTypes }) {
  const lastFilter =
    filters && filters.length ? filters[filters.length - 1] : null;
  if (
    lastFilter &&
    lastFilter.relation &&
    typeof lastFilter.children !== "undefined"
  ) {
    return filterTypes.root;
  } else {
    if (lastFilter) {
      return filterTypes[lastFilter.relation];
    } else {
      return filterTypes.root;
    }
  }
}

export default FiltersInput;
