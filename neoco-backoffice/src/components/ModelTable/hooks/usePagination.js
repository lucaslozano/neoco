import { useState, useEffect } from "react";
import { itemsPerPageOptions } from "../components/PaginationButtons";

const usePagination = ({ onPaginationChange = () => Promise.resolve() }) => {
  const [pagination, setPagination] = useState({
    itemsPerPage: itemsPerPageOptions[0].value,
    page: 1,
    firstPage: 1,
    count: null,
  });

  const pages = pagination.numPages
    ? pagination.numPages
    : pagination.count
    ? Math.ceil(pagination.count / pagination.itemsPerPage)
    : 1;

  const updatePagination = (nextPagination) =>
    setPagination((currentPagination) => ({
      ...currentPagination,
      ...nextPagination,
    }));

  useEffect(() => {
    if (pagination.count !== null) {
      onPaginationChange();
    }
  }, [pagination.page, pagination.itemsPerPage]);

  useEffect(() => {
    if (pagination.count === null) {
      onPaginationChange();
    }
  }, [pagination.count]);

  return [{ ...pagination, pages }, updatePagination];
};

export default usePagination;
