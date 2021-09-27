import React, { useState } from "react";
import { Source } from "@storybook/addon-docs/blocks";
import dedent from "ts-dedent";
import Form from "../FormGenerator";

const headers = {
  options: {
    title: "",
    subtitle: "",
    uploadURL: "",
  },
  sections: [
    {
      title: "Contenido",
      style: { display: "flex" },
      Container: ({ children }) => <div>{children}</div>,
      fields: [
        {
          name: "contenido",
          label: "Contenido",
          type: "html",
          style: { flexBasis: "100%" },
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
