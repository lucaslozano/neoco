import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Input from "../Input/Input";
import ImageCrop from "../ImageCrop/ImageCrop";
import { Button, responsive, Modal } from "bluejay-ui";
import Slider from "../Slider/Slider";
import { getBase64FromUrl, fileToBase64, blobToFile } from "../../utils/file";

const { mediaQuery } = responsive;

const CropModal = ({
  source,
  onCroppedImage = () => {},
  onClose,
  modalTitle = "Editar foto",
}) => {
  const [data, setData] = useState();
  const inputRef = useRef();
  const cropperRef = useRef();

  useEffect(() => {
    if (source.uri) {
      getBase64FromUrl(source.uri).then(({ base64 }) => {
        setData({ base64, file: { name: source.name } });
      });
    }
  }, [source]);

  const onRemoveImageClick = () => {
    cropperRef.current.removePhoto() & setData(null);
  };

  const onUploadImageClick = () => {
    inputRef.current.click();
  };

  const onLocalCroppedImage = () => {
    if (cropperRef.current.props.file) {
      cropperRef.current
        .crop()
        .then((blob) => blobToFile({ blob, name: data.file?.name }))
        .then((blob) => {
          onCroppedImage(blob);
        });
    } else {
      onCroppedImage();
    }
  };

  const onFileSelected = (file) => {
    fileToBase64(file).then(({ base64 }) => {
      setData({ file, base64 });
    });
  };

  return (
    <Modal modalProps={{ style: { maxWidth: 600 } }}>
      <Header>
        <HeaderTitle>{modalTitle}</HeaderTitle>
        <CloseButton onClick={() => onClose(true)}>{closeIcon}</CloseButton>
      </Header>
      <ImageCrop
        ref={cropperRef}
        file={data}
        style={{ height: 400, width: "100%" }}
      />
      <Footer>
        <CustomButton type="button" onClick={onRemoveImageClick}>
          Borrar
        </CustomButton>
        <Slider
          disabled={typeof data?.base64 === "undefined"}
          onChange={(zoom) => cropperRef.current.zoomTo(zoom)}
        />
        <ButtonsContainer>
          <CustomButton type="button" onClick={onUploadImageClick}>
            Subir
          </CustomButton>
          <CustomButton type="button" onClick={onLocalCroppedImage}>
            Guardar
          </CustomButton>
        </ButtonsContainer>
      </Footer>
      <Input
        data-testid="upload-image"
        ref={inputRef}
        onChange={onFileSelected}
      />
    </Modal>
  );
};

const Header = styled.div`
  display: block;
  padding: 8px 0;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  z-index: 2;
  background: white;
`;

const HeaderTitle = styled.span`
  font-family: "Omnes";
  font-size: 1.3rem;
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 500;
  font-style: normal;
  margin: 0.4rem;
  margin-left: 0.8rem;
  padding-right: 0.4rem;
`;

const CloseButton = styled.span`
  font-family: Omnes;
  font-weight: 600;
  font-size: 14px;
  font-weight: lighter;
  text-align: right;
  margin-right: 0.8rem;
  padding-right: 0.4rem;
  color: var(--color-gray-light);
  cursor: pointer;
`;

const closeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    data-supported-dps="20x20"
    fill="black"
    width="20"
    height="20"
    focusable="false"
  >
    <path d="M20 5.32L13.32 12 20 18.68 18.66 20 12 13.33 5.34 20 4 18.68 10.68 12 4 5.32 5.32 4 12 10.69 18.68 4z"></path>
  </svg>
);

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  flex-direction: column;
  background: white;
  width: 100%;

  ${mediaQuery.TABLET`
    flex-direction: row;
  `}
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CustomButton = styled(Button)`
  display: flex;
  justifycontent: center;
  alignitems: center;
  padding: 8px;
  margin: 12px;
`;

export default CropModal;
