import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Table, Modal, Text, Button, Loader } from "bluejay-ui";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { H1, Card } from "../../ui";
import {
  getFields,
  getClientSidePaginatedData,
  getItemIdentifier,
  getFilterFields,
} from "./utils";
import { ReactComponent as Pencil } from "../../images/pencil.svg";
import { ReactComponent as Trash } from "../../images/trash.svg";
import { getRoutePath } from "../../utils/routes";
import PaginationButtons from "./components/PaginationButtons";
import TableSearch from "./components/TableSearch";
import usePagination from "./hooks/usePagination";
import FiltersInput from "./components/FiltersInput";
import AuthContext from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

const ModelTable = ({
  header,
  data,
  styles = {},
  renderActions = () => <></>,
  children,
}) => {
  const history = useHistory();
  const { logout } = useContext(AuthContext);
  const { t } = useTranslation();
  const [auxData, setAuxData] = useState({});

  const [filter, setFilter] = useState(null);
  const [remoteData, setRemoteData] = useState([]);
  const [itemToDelete, setItemToDelete] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, updatePagination] = usePagination({
    onPaginationChange: () => getData(),
    filter,
  });

  const updateAuxData = (nextState) => {
    setAuxData((currentState) => ({ ...currentState, ...nextState }));
  };

  useEffect(() => {
    onMount().then((a) => {
      updateAuxData(a);
    });
  }, []);

  useEffect(() => {
    updatePagination({ count: data?.length });
  }, [data]);

  useEffect(() => {
    if (filter !== null) {
      updatePagination({
        count: null,
        page: 1,
      });
    }
  }, [filter]);

  const {
    findRequest = () => Promise.resolve(),
    mapFindResponse = (data) => data,
    deleteRequest = () => Promise.resolve(),
    countRequest = () => Promise.resolve(),
  } = header.options?.requests || {};

  const {
    isCreatable = true,
    isEditable = false,
    isDeletable = false,
    isSearchable = false,
    isFilterable = false,
    openOnClickRow = false,
    displayItemsPerPage = true,
    getItemActions = () => ({ isEditable, isDeletable }),
    onMount = () => Promise.resolve(),
  } = header.options?.tableOptions || {};

  const path = getRoutePath(header.options?.route);
  const isSmart = typeof data === "undefined";
  const renderChildren = children || header.options?.tableOptions?.children;

  const updateState = (fn) => setRemoteData(fn);

  const getData = () => {
    setIsLoading(true);
    return findRequest({
      pagination,
      filter,
      fields: isSearchable || isFilterable ? getFilterFields(header) : [],
    })
      .then((data) => {
        setIsLoading(false);

        if (isSmart) setRemoteData(mapFindResponse(data));

        return Promise.resolve(data);
      })
      .then((data) => {
        if (pagination.count === null) {
          countRequest({
            pagination,
            filter,
            fields: isSearchable || isFilterable ? getFilterFields(header) : [],
            data,
          }).then(({ count, numPages } = { count: 0, numPages: 0 }) => {
            updatePagination({
              count,
              page: pagination.page,
              numPages,
            });
          });
        }
        return Promise.resolve(data);
      })
      .catch(({ status }) => {
        if (status === 401) {
          logout();
        }
      });
  };
  const onDeleteClick = (item) => {
    setItemToDelete(item);
  };

  const onConfirmDeleteClick = (e) => {
    deleteRequest(itemToDelete).then(() => {
      setItemToDelete(null);
      getData();
    });
  };

  return (
    <>
      {itemToDelete && (
        <DeleteRowModal
          onConfirmDeleteClick={onConfirmDeleteClick}
          onCancelDeleteClick={() => setItemToDelete(null)}
        />
      )}
      <H1 style={{ marginTop: 10 }}>{t("general." + header.options?.name)}</H1>
      {typeof header.options?.tableOptions?.renderBefore === "function" &&
        header.options.tableOptions.renderBefore()}
      <Card style={styles.container}>
        <ControlsContainer>
          {isCreatable && (
            <ButtonContainer>
              <Button color="primary" as={Link} to={`${path}/new`}>
                {t("general.new" + header.options?.name)}
              </Button>
            </ButtonContainer>
          )}
        </ControlsContainer>
        <Loader isLoading={isLoading}>
          <TableSearch
            isSearchable={isSearchable}
            isFilterable={isFilterable}
            header={header}
            count={pagination ? pagination.count : null}
            updateFilter={setFilter}
            auxData={auxData}
          />
          <Table
            headers={getFields(header, t)}
            onRowClick={
              openOnClickRow &&
              ((item) =>
                history.push(`${path}/${getItemIdentifier(item, header)}`))
            }
            data={
              isSmart
                ? remoteData
                : getClientSidePaginatedData({ pagination, data })
            }
            renderCustomCell={(item) => {
              const itemActions = getItemActions({
                item,
                state: remoteData,
              });
              const itemId = getItemIdentifier(item, header);
              return (
                <ActionsContainer>
                  {isEditable && itemActions.isEditable && itemId && (
                    <Link to={`${path}/${itemId}`}>
                      <EditIcon />
                    </Link>
                  )}
                  {isDeletable && itemActions.isDeletable && (
                    <Link onClick={() => onDeleteClick(item)}>
                      <TrashIcon />
                    </Link>
                  )}
                  {typeof renderActions === "function" &&
                    renderActions({
                      item,
                      state: remoteData,
                      updateState,
                    })}
                </ActionsContainer>
              );
            }}
          />
          <PaginationButtons
            pagination={pagination}
            updatePagination={updatePagination}
            displayItemsPerPage={displayItemsPerPage}
          />
        </Loader>
        {typeof renderChildren === "function"
          ? renderChildren({ state: remoteData })
          : renderChildren}
      </Card>
    </>
  );
};

const DeleteRowModal = ({ onConfirmDeleteClick, onCancelDeleteClick }) => {
  const { t } = useTranslation();

  return (
    <Modal title={t("general.areYouSure")}>
      <Text style={{ textAlign: "center" }}>
        {t("general.thisActionCannotBeUndone")}
      </Text>
      <ModalActions>
        <Button
          color="primary"
          onClick={onCancelDeleteClick}
          style={{ marginRight: 20 }}
        >
          {t("actions.cancel")}
        </Button>
        <Button color="danger" onClick={onConfirmDeleteClick}>
          {t("actions.delete")}
        </Button>
      </ModalActions>
    </Modal>
  );
};

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const EditIcon = styled(Pencil)`
  fill: #998335;
  height: 15px;
  width: auto;
  padding: 0 15px;
`;

const TrashIcon = styled(Trash)`
  fill: #fc4219;
  fill-rule: evenodd;
  height: 15px;
  width: auto;
  padding: 0 15px;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
`;

const ControlsContainer = styled.div`
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default ModelTable;
