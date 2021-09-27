import React, { useState } from "react";
import { Button as DefaultButton, Text, Label } from "bluejay-ui";
import styled from "styled-components";
import { inputMapper } from "../utils/inputs/";

const FormGenerator = ({
  headers = {},
  state = {},
  handleChange = () => {},
  onSubmit = () => Promise.resolve({}),
  children = <></>,
  Button = DefaultButton,
  ...props
}) => {
  const [error, setError] = useState({});

  const onLocalSubmit = (e) => {
    e.preventDefault();

    onSubmit(e).catch(setError);
  };

  return (
    <form onSubmit={onLocalSubmit}>
      {headers.sections.map((section, index) =>
        sectionMapper({ section, index, state, handleChange, ...props })
      )}

      {typeof children === "function" ? children({ state }) : children}

      {error.message && <Text color="danger">{error.message}</Text>}

      <Button style={{ marginTop: 20 }} color="primary">
        Guardar
      </Button>
    </form>
  );
};

const sectionMapper = ({
  section,
  index,
  state,
  handleChange,
  Title = DefaultTitle,
  Subtitle = DefaultSubtitle,
}) => {
  const { FieldsContainer = BaseFieldsContainer } = section;

  return (
    <React.Fragment key={index}>
      <Section>
        {section.title ? <Title>{section.title}</Title> : ""}
        {section.subtitle ? <Subtitle>{section.subtitle}</Subtitle> : ""}
        <FieldsContainer
          style={{ marginTop: 20, ...section.fieldsContainerStyles }}
        >
          {typeof section.render === "function"
            ? section.render()
            : section.fields.map(
                (
                  { FieldContainer = BaseFieldContainer, ...field },
                  fieldIndex
                ) => (
                  <FieldContainer key={fieldIndex} style={field.style}>
                    {inputMapper({
                      field,
                      state,
                      handleChange,
                    })}
                    {typeof field.renderAfter === "function" ? (
                      field.renderAfter()
                    ) : (
                      <></>
                    )}
                    {typeof field.isValid === "function" && (
                      <ErrorMessage>
                        {field.isValid(state.data[field.name])}
                      </ErrorMessage>
                    )}
                  </FieldContainer>
                )
              )}
        </FieldsContainer>
      </Section>
    </React.Fragment>
  );
};

const Section = styled.div``;
const DefaultTitle = styled.p`
  font-size: 18px;
`;

const DefaultSubtitle = styled.p`
  color: #909090;
  font-size: 16px;
`;

const BaseFieldsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const BaseFieldContainer = styled.div`
  flex-basis: 30%;
`;

const CheckboxLabel = styled(Label)`
  margin-left: 10px !important;
  font-size: 12px;
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.danger};
`;

export default FormGenerator;
