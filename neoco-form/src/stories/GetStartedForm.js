import React, { useState } from "react";
import { Source, ArgsTable } from "@storybook/addon-docs/blocks";
import dedent from "ts-dedent";
import Form from "../core";

const headers = {
  options: {
    title: "",
    subtitle: "",
    uploadURL: "",
    style: {},
    Container: () => <></>,
    submit: {
      text: "ENVIAR DATOS",
    },
  },
  sections: [
    {
      title: "Información Personal",
      fields: [
        {
          name: "name",
          label: "Nombre",
          options: {
            disabled: false,
            show: true,
          },
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
      <ArgsTable of={Form} />
      <p>Headers</p>
      <Source language="json" code={dedent(JSON.stringify(headers, null, 2))} />
    </>
  );
};

export default GetStartedForm;
