import React from "react";

const Input = React.forwardRef(({ onChange }, ref) => {
  const onLocalChange = (e) => {
    onChange(e.target.files[0]);
  };

  return (
    <input
      type="file"
      style={{ display: "none" }}
      onChange={onLocalChange}
      multiple={false}
      ref={ref}
    />
  );
});

export default Input;
