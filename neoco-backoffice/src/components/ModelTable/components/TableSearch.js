import * as React from "react";
import { Input } from "bluejay-ui";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import FiltersInput from "./FiltersInput";
import useFilters from "../hooks/useFilters";

const TableSearch = ({
  isSearchable = false,
  isFilterable = false,
  header,
  updateFilter = () => {},
  count,
  auxData = {},
}) => {
  const { t } = useTranslation();
  const [{ searchValue, filtersFields, filter }, updateFilters] = useFilters({
    onFiltersChange: updateFilter,
    header,
    auxData,
  });

  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <CountLabel>{`( ${count ? count : 0} )`}</CountLabel>
      </div>
      {isSearchable ? (
        <Input
          style={{ width: "25vw", marginTop: 10 }}
          placeholder={t("general.search")}
          debounce={500}
          type="text"
          class="form-control"
          value={searchValue}
          onChange={(e) => {
            e.preventDefault();
            updateFilters({ searchValue: e.target.value });
          }}
        />
      ) : (
        <></>
      )}
      {isFilterable ? (
        <FiltersInput
          options={filtersFields}
          auxData={auxData}
          onChange={(data) => updateFilters({ filters: data })}
          style={{ width: "35vw" }}
        />
      ) : (
        <></>
      )}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 54px;
`;
const CountLabel = styled.span`
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  width: 80px;
  height: 100%;
`;

export default TableSearch;
