export const multiselect = ({ field, state, handleChange }) => {
  const { relation } = field;
  const { isMulti } = relation;

  if (typeof relation === "undefined") {
    throw new Error(
      `You must define the relation prop in ${field.property} when using multiselect controls`
    );
  }

  return {
    isMulti,
    ...(isMulti
      ? getMultiSelectProps({ field, state, handleChange })
      : getSingleSelectProps({ field, state, handleChange })),
  };
};

export const getMultiSelectProps = ({ field, state, handleChange }) => {
  const { relation, property } = field;
  const selectedOptions = getSelectedOptions({ state, relation, property });
  const value = getValues({ selectedOptions, ...relation });
  const options = getOptions({ state, ...relation });

  return {
    value,
    options,
    onChange: (selectedOptions) =>
      handleChange({
        target: {
          name: relation.name,
          value: selectedOptions,
        },
      }),
  };
};

export const getSingleSelectProps = ({ field, state, handleChange }) => {
  const { relation, property } = field;
  const selectedOption = getSelectedOptions({ state, relation, property });

  const hasRemoteData = typeof relation.options === "undefined";
  const isSelectedOptionAString = typeof selectedOption === "string";

  const options = hasRemoteData
    ? getOptions({ state, ...relation })
    : relation.options;

  const item = isSelectedOptionAString
    ? options.find((option) => option.value === selectedOption)
    : selectedOption;

  const value = item ? getSingleValue({ item, ...relation }) : "";

  return {
    value,
    options,
    onChange: (item) =>
      handleChange({
        target: {
          name: field.name || field.property,
          value: item,
        },
      }),
  };
};

const getSelectedOptions = ({ state, relation, property }) =>
  typeof state.data[relation.name] === "undefined"
    ? state.data[property]
    : state.data[relation.name];

const getValues = ({ selectedOptions, nameProps, primaryKey }) =>
  selectedOptions?.map((item) =>
    getSingleValue({ item, nameProps, primaryKey })
  );

const getOptions = ({ state, name, nameProps, primaryKey = "id" }) => {
  return state?.aux[name]?.map((item = {}) => ({
        value: item[primaryKey],
        label: getName({ item, nameProps }),
        ...item,
      }))
    ||[];
};

export const getSingleValue = ({ item, nameProps, primaryKey = "id" }) => ({
  value: item?.value || item[primaryKey],
  label: item?.label || getName({ item, nameProps }),
  ...item,
});

const getName = ({ item, nameProps = [] }) =>
  Object.keys(item)
    .filter((key) => nameProps.includes(key))
    .map((key) => item[key])
    .join(" ");

export default multiselect;
