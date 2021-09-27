import * as React from "react";
import { Pagination, MultiSelect } from "bluejay-ui";
import styled from "styled-components";

export const itemsPerPageOptions = [
  { value: 10, label: "10" },
  { value: 20, label: "20" },
  { value: 50, label: "50" },
  { value: 100, label: "100" },
];

const PaginationButtons = ({
  pagination,
  updatePagination,
  displayItemsPerPage = true,
}) => {
  const itemsOptions = itemsPerPageOptions.filter(
    ({ value }) => value === pagination?.itemsPerPage
  );

  const numberOfPages = pagination && pagination.pages ? pagination.pages : 5;

  return (
    <Container onlyPagination={!!(numberOfPages && !displayItemsPerPage)}>
      {itemsPerPageOptions[0].value >= pagination.count ||
      !displayItemsPerPage ? (
        <></>
      ) : (
        <div style={{ padding: 20, paddingLeft: 0, width: 120 }}>
          <MultiSelect
            isSearchable={false}
            value={
              itemsOptions.length ? itemsOptions[0] : itemsPerPageOptions[0]
            }
            options={itemsPerPageOptions}
            onChange={({ value }) =>
              updatePagination({
                ...pagination,
                itemsPerPage: parseInt(value),
                page: pagination.firstPage,
                pages: pagination.count
                  ? Math.ceil(pagination.count / parseInt(value))
                  : 1,
              })
            }
          />
        </div>
      )}
      {numberOfPages === 1 ? (
        <></>
      ) : (
        <div style={{ padding: 20, paddingRight: 0 }}>
          {pagination.page ? (
            <Pagination
              style={{ marginTop: 0 }}
              page={pagination.page}
              goToPage={(page) => updatePagination({ ...pagination, page })}
              pageBound={Math.min(numberOfPages, 3)}
              pages={numberOfPages}
            />
          ) : (
            <></>
          )}
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: ${({ onlyPagination }) =>
    onlyPagination ? "flex-end" : "space-between"};
`;
export default PaginationButtons;
