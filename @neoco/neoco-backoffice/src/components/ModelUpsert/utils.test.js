import { beforeSave, filterHeaders } from "./utils";

describe("reagarding the ModelUpsert utils", () => {
  describe("regarding the beforeSave function", () => {
    describe("given headers with a selector", () => {
      it("should automatically resolve the value", () => {
        const state = {
          data: {
            debtor: { value: 1, label: "Xavi Tristancho" },
            receiver: [
              { value: 2, label: "Joan Toni Morey" },
              { value: 3, label: "Marc Amer" },
            ],
          },
        };
        const header = {
          sections: [
            {
              fields: [
                {
                  property: "debtor",
                  type: "multiselect",
                },
              ],
            },
            {
              fields: [
                {
                  property: "receiver",
                  type: "multiselect",
                  relation: {
                    isMulti: true,
                  },
                },
              ],
            },
          ],
        };

        return beforeSave({ header, state }).then((nextState) => {
          expect(nextState).toEqual({
            debtor: 1,
            receiver: [
              { value: 2, label: "Joan Toni Morey" },
              { value: 3, label: "Marc Amer" },
            ],
          });
        });
      });
    });
  });

  // describe("regarding the filterHeaders function", () => {
  //   it("should remove the invisible fields", () => {
  //     const headers = {
  //       options: {
  //         name: "TimeEntry",
  //       },
  //       sections: [
  //         {
  //           title: "Any Text",
  //           fields: [
  //             {
  //               property: "debtor",
  //               type: "multiselect",
  //               upsertOptions: { show: false },
  //             },
  //             {
  //               property: "description",
  //             },
  //           ],
  //         },
  //         {
  //           fields: [
  //             {
  //               property: "receiver",
  //               type: "multiselect",
  //               inputProps: {
  //                 isMulti: true,
  //               },
  //             },
  //           ],
  //         },
  //       ],
  //     };

  //     const translations = {
  //       "fields.TimeEntry.description": "Descripción",
  //       "fields.TimeEntry.receiver": "Receptor",
  //     };

  //     expect(filterHeaders(headers, (key) => translations[key])).toEqual({
  //       options: {
  //         name: "TimeEntry",
  //       },
  //       sections: [
  //         {
  //           title: "Any Text",
  //           fields: [
  //             {
  //               name: "Descripción",
  //               property: "description",
  //             },
  //           ],
  //         },
  //         {
  //           fields: [
  //             {
  //               name: "Receptor",
  //               property: "receiver",
  //               type: "multiselect",
  //               inputProps: {
  //                 isMulti: true,
  //               },
  //             },
  //           ],
  //         },
  //       ],
  //     });
  //   });
  // });
});
