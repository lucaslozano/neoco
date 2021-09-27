import { useState, useEffect } from "react";
import { getFilterFields } from "../utils";

const useFilters = ({
  onFiltersChange = () => Promise.resolve(),
  header = {},
  auxData = {},
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [filtersFields, setFiltersFields] = useState(null);
  const [filter, setFilter] = useState(null);
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    header.sections &&
      setFiltersFields(
        buildFilterTypes({ fields: getFilterFields(header), auxData })
      );
  }, [auxData]);

  useEffect(() => {
    header.sections &&
      setFiltersFields(
        buildFilterTypes({ fields: getFilterFields(header), auxData })
      );
  }, [header.sections]);

  const updateFilters = (data) => {
    data.searchValue && setSearchValue(data.searchValue);
    data.filters
      ? setFilters(data.filters && data.filters.length ? data.filters : [])
      : data.filters === null && setFilters([]);
    const valuee =
      data.searchValue !== undefined ? data.searchValue : searchValue;
    const filterss =
      data.filters !== null && data.filters ? data.filters : filters;

    onFiltersChange({ searchValue: valuee, filters: filterss });
  };

  return [
    {
      searchValue,
      filtersFields: header.options?.tableOptions?.isFilterable
        ? filtersFields
        : null,
      filter: null,
    },
    updateFilters,
  ];
};

const buildFilterTypes = ({ fields, auxData }) => {
  const buildTypeValues = (field) => {
    const filterSource = field.tableOptions?.filter;
    const filterProperty = filterSource?.property;
    const filterValuesSource = filterSource?.values;

    const filterValues = filterValuesSource
      ? typeof filterValuesSource === "function"
        ? auxData
          ? filterValuesSource(auxData)
          : []
        : filterValuesSource
      : [];

    return (
      filterValues?.map((filter) => ({
        ...filter,
        type: filterProperty ? filterProperty : field.property,
      })) || []
    );
  };

  const buildGeneriType = (field) => {
    const filter =
      typeof field.tableOptions.filter === "function"
        ? field.tableOptions.filter()
        : field.tableOptions.filter;
    if (!filter) {
      return null;
    }
    const value = filter.property ? filter.property : field.property;
    return {
      value,
      label: filter.label ? filter.label : field.label,
      relation: { key: value, values: buildTypeValues(field) },
    };
  };
  return fields && fields.length
    ? fields
        .filter((field) => field.tableOptions?.filter)
        .map(buildGeneriType)
        .reduce(
          ({ root, ...filters }, { relation, ...filter }) => ({
            root: [...root, { relation: filter.value, ...filter }],
            ...filters,
            [relation.key]: relation.values,
          }),
          { root: [] }
        )
    : null;
};

export default useFilters;
