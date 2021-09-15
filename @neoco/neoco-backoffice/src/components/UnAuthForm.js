import React, { useState } from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, Input, Link, Text, responsive } from "bluejay-ui";
import { isEmptyObject } from "../utils/object";

const { mediaQuery } = responsive;

const Form = styled.form`
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.formBackgroundColor};

  ${mediaQuery.TABLET`    
    width: 350px;
  `};
`;

const UnAuthForm = ({
  onSubmit,
  title,
  submitText,
  register = {},
  recoverPassword = {},
  fields = [
    {
      name: "email",
    },
    {
      name: "password",
    },
  ],
  message = {},
  children,
  resetMode = () => {},
}) => {
  const { t } = useTranslation();

  const [credentials, setCredentials] = useState(initialStateFields(fields));

  const onInputChange = (e, field) => {
    setCredentials({ ...credentials, [field.name]: e.target.value });
    resetMode();
  };

  const onLocalSubmit = (e) => {
    e.preventDefault();

    onSubmit(credentials);
  };

  return (
    <Form onSubmit={onLocalSubmit}>
      <span
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          color: "black",
          marginBottom: 35,
        }}
      >
        {title}
      </span>

      {fields.map((field, index) => (
        <Input
          key={field.name}
          {...field}
          onChange={(e) => onInputChange(e, field)}
          value={credentials[field.name]}
        ></Input>
      ))}

      {recoverPassword.linkText && (
        <span
          style={{
            margin: "0px auto 50px auto",
            textAlign: "center",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          {recoverPassword.text}
          <Link as={RouterLink} to={recoverPassword.to} color="primary">
            {recoverPassword.linkText}
          </Link>
        </span>
      )}

      {message && (
        <Text
          color={message.color}
          style={{ margin: "auto auto 30px auto", textAlign: "center" }}
        >
          {t(message.translation)}
        </Text>
      )}

      {submitText && (
        <Button
          color="primary"
          style={{ fontWeight: "bold", textTransform: "none" }}
          type="submit"
          data-testid="unauth-submit"
          onClick={(e) =>
            isEmptyObject(credentials) ? e.preventDefault() : null
          }
        >
          {submitText}
        </Button>
      )}

      {register.linkText && (
        <span
          style={{
            margin: "0px auto 50px auto",
            textAlign: "center",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          {register.text}
          <Link as={RouterLink} to={register.to} color="primary">
            {register.linkText}
          </Link>
        </span>
      )}

      {children}
    </Form>
  );
};

function initialStateFields(fields = []) {
  return fields.reduce((reducer, field) => {
    const fieldName = field.name;
    return { ...reducer, [fieldName]: "" };
  }, {});
}

export default UnAuthForm;
