import { getFields, getItemIdentifier } from "./utils";

const headers = {
  options: {
    primaryKey: "concept",
  },
  sections: [
    {
      fields: [{ name: "Concepto", property: "concept" }],
    },
    {
      fields: [{ name: "Horas", property: "hours" }],
    },
  ],
};

describe("regarding the getFields function", () => {
  // it("should be able to get all the fields of all the sections of the headers", () => {
  //   expect(getFields(headers)).toEqual([
  //     { name: "Concepto", property: "concept" },
  //     { name: "Horas", property: "hours" },
  //   ]);
  // });
});

describe("regarding the getItemIdentifier function", () => {
  it("should return id field if it exists", () => {
    expect(getItemIdentifier({ id: 1 })).toEqual(1);
  });

  it("should be able to get identifier for item based on headers config", () => {
    expect(getItemIdentifier({ concept: "sample" }, headers)).toEqual("sample");
  });

  it("cannot get identifier if header config not permit and item not hace id property", () => {
    expect(getItemIdentifier({ hours: "sample" }, headers)).toBeUndefined();
  });
});
