import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import UnAuthForm from "../components/UnAuthForm";
import AuthContext from "../contexts/AuthContext";

const RecoverPassword = ({ onSubmit = () => Promise.resolve(), ...props }) => {
  const { t } = useTranslation();
  const { recoverPassword } = useContext(AuthContext);

  const onLocalSubmit = (credentials) => {
    if (typeof onSubmit === "function") {
      onSubmit(credentials);
    } else {
      recoverPassword();
    }
  };

  return (
    <UnAuthForm
      {...props}
      onSubmit={onLocalSubmit}
      title={t("recoverPassword.title")}
      submitText={t("recoverPassword.send")}
      fields={[
        {
          label: t("general.email"),
          placeholder: t("general.email"),
          type: "email",
          name: "email",
          id: "email",
        },
      ]}
    />
  );
};

export default RecoverPassword;
