export const translateField =
  (modelName, t, prop = "name") =>
  (field) => ({
    ...field,
    [prop]: t(`fields.${modelName}.${field.property}`),
  });
