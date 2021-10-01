import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import UnAuthForm from "../components/UnAuthForm";
import AuthContext from "../contexts/AuthContext";

const Login = ({ onSubmit = () => Promise.resolve(), children, ...props }) => {
  const { t } = useTranslation();
  const { login } = useContext(AuthContext);
  const [message, setMessage] = useState({});

  const onLocalSubmit = (credentials) => {
    if (!credentials.email && !credentials.password) {
      return;
    }

    if (typeof onSubmit === "function") {
      onSubmit(credentials)
        .then(login)
        .catch(({ message }) => setMessage(message));
    }
  };

  return (
    <UnAuthForm
      {...props}
      onSubmit={onLocalSubmit}
      message={message}
      title={t("login.title")}
      submitText={t("general.signin")}
      fields={[
        {
          label: t("general.email"),
          placeholder: t("general.email"),
          type: "email",
          name: "email",
          id: "email",
        },
        {
          label: t("general.password"),
          placeholder: t("general.password"),
          type: "password",
          name: "password",
          id: "password",
        },
      ]}
    >
      {children}
    </UnAuthForm>
  );
};

export default Login;
