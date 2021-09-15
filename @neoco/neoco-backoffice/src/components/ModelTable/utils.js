import { translateField } from "../../utils/translations";

export const getFields = (header, t) => {
  return header.sections.reduce(
    (reducer, section) => [
      ...reducer,
      ...section.fields
        .filter(removeIfNotVisible)
        .map(translateField(header.options.name, t)),
    ],
    []
  );
};

export const getFilterFields = (header) => {
  return header.sections.reduce(
    (reducer, section) => [
      ...reducer,
      ...section.fields.filter(removeIfNotFilter),
    ],
    []
  );
};

const removeIfNotVisible = (field) =>
  typeof field.tableOptions?.show !== "undefined"
    ? field.tableOptions?.show
    : true;

const removeIfNotFilter = (field) =>
  field.tableOptions?.filter ||
  field.tableOptions?.isSearchable ||
  field.relation;

export const getClientSidePaginatedData = ({ pagination, data }) => {
  const start = (pagination.page - 1) * pagination.itemsPerPage;
  return data.slice(start, start + pagination.itemsPerPage);
};

const getModelPK = (header) => {
  return header?.options?.primaryKey;
};

export const getItemIdentifier = (item, header) => {
  if (item?.id) {
    return item.id;
  } else {
    const primaryKeyAttribute = getModelPK(header);
    return primaryKeyAttribute ? item[primaryKeyAttribute] : null;
  }
};
