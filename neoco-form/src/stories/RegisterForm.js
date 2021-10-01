import React, { useState } from "react";
import { Source, ArgsTable } from "@storybook/addon-docs/blocks";
import dedent from "ts-dedent";
import Form from "../core";
import { Link } from "bluejay-ui";

const headers = {
  options: {
    title: "Registro",
    subtitle: "de usuario",
    uploadURL: "",
  },
  sections: [
    {
      title: "Información Personal",
      fields: [
        {
          name: "name",
          label: "Nombre",
          required: true,
          options: {
            disabled: false,
            show: true,
          },
        },
        {
          name: "surnames",
          label: "Apellidos",
          options: {
            show: () => true,
            disabled: false,
          },
        },
        {
          name: "info",
          label: "Datos",
          type: "textarea",
          options: {
            disabled: () => true,
            show: () => {
              return new Promise((resolve) => {
                setTimeout(() => resolve(true), 3800);
              });
            },
          },
        },

        {
          name: "email",
          label: "Correo electrónico",
          type: "EMAIL",
          required: true,
        },
        {
          name: "birthdate",
          label: "Fecha de nacimiento",
          type: "date",
        },
        {
          name: "password",
          type: "password",
          label: "Contraseña",
          required: true,
        },
        {
          name: "termsAndConditions",
          type: "checkbox",
          label: "Aceptas los terminos y condiciones?",
          label: (
            <>
              He leído y acepto el <Link href="/aviso-legal">Aviso Legal</Link>y
              la{" "}
              <Link href="politica-de-privacidad">Política de Privacidad </Link>
            </>
          ),
          required: true,
        },
      ],
    },
  ],
};

const RegisterForm = () => {
  const [formData, setFormData] = useState({});

  return (
    <>
      <Form
        headers={headers}
        onSubmit={(formData) => {
          alert(JSON.stringify(formData));
        }}
        onChange={(formData) => {
          setFormData(formData);
        }}
      />
      <Source
        language="json"
        code={dedent(JSON.stringify(formData, null, 2))}
      />
      <p>Headers</p>
      <Source language="json" code={dedent(JSON.stringify(headers, null, 2))} />
    </>
  );
};

export default RegisterForm;
