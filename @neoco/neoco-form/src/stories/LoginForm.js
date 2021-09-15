import React, { useState } from "react";
import { Source, ArgsTable } from "@storybook/addon-docs/blocks";
import dedent from "ts-dedent";
import Form from "../core";

const headers = {
  options: {
    title: "",
    subtitle: "",
    uploadURL: "",
  },
  sections: [
    {
      title: "Información Personal",
      style: { display: "flex" },
      Container: ({ children }) => <div>{children}</div>,
      fields: [
        {
          name: "name",
          label: "Nombre",
        },
        {
          name: "password",
          label: "Contraseña",
          type: "password",
        },
      ],
    },
  ],
};

const GetStartedForm = () => {
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

export default GetStartedForm;
