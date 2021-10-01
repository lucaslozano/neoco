import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Form from "@neoco/neoco-form";
import { H1, Card } from "../../ui";
import { beforeSave, filterHeaders } from "./utils";
import { getRoutePath } from "../../utils/routes";
import { isEmptyObject } from "../../utils/object";

const getInitialState = (sections) =>
  sections.reduce(
    (reducer, { fields }) => ({
      ...reducer,
      ...fields.reduce(
        (fieldsReducer, { property, upsertOptions }) => ({
          ...fieldsReducer,
          ...(upsertOptions?.value ? { [property]: upsertOptions.value } : {}),
        }),
        {}
      ),
    }),
    {}
  );

const ModelUpsert = ({ header, children }) => {
  const [state, setState] = useState({
    data: getInitialState(header.sections),
    aux: {},
  });
  const history = useHistory();
  const params = useParams();
  const { t } = useTranslation();

  const {
    findOneRequest = () => Promise.resolve(),
    upsertRequest = () => Promise.resolve(),
  } = header.options?.requests || {};

  const {
    upsertOptions: {
      onMount = () => Promise.resolve(),
      renderAfter = () => <></>,
    } = {},
  } = header.options;

  const { id } = params;
  const isCreating = typeof id === "undefined";
  const path = getRoutePath(header.options.route);
  const renderChildren = children || header.options?.upsertOptions?.children;
  const allFields = header.sections.reduce(
    (reducer, section) => [...reducer, ...section.fields],
    []
  );
  const updateState = (nextState) =>
    setState((currentState) => ({ ...currentState, ...nextState }));

  useEffect(() => {
    if (!isCreating) {
      findOneRequest({ id }).then((data) => updateState({ data }));
    }

    onMount().then((aux) => updateState({ aux }));
  }, [params.id]);

  const onSubmit = () => {
    return beforeSave({ header, state })
      .then(upsertRequest)
      .then((res) => {
        history.push(`${path}/${id ? "" : res.id}`);
        return res;
      });
  };

  const handleChange = (data) => {
    updateState({ data: { ...state.data, ...data } });
  };

  return (
    <>
      <H1 style={{ marginTop: 10 }}>
        <ActionSpan>{t(`general.${id ? "edit" : "create"}`)}</ActionSpan>{" "}
        {t("general.one" + header.options?.name)}
      </H1>
      <Card>
        {isCreating || (!isCreating && !isEmptyObject(state.data)) ? (
          <Form
            headers={filterHeaders(header, t)}
            onSubmit={onSubmit}
            state={state}
            handleChange={handleChange}
            children={renderChildren}
          />
        ) : (
          <></>
        )}
        {typeof renderAfter === "function"
          ? renderAfter({ state })
          : renderAfter}
      </Card>
    </>
  );
};

const ActionSpan = styled.span`
  color: #9da1a7;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 400;
`;

export default ModelUpsert;
