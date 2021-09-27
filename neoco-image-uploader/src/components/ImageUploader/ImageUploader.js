import React, { useState } from "react";
import styled from "styled-components";
import { fileToBase64 } from "../../utils/file";
import CropModal from "../CropModal";

const getSrc = (source) => {
  if (source && source.uri) {
    return source.uri;
  }
  return null;
};

const ImageUploader = ({
  onChange = () => {},
  canEdit = true,
  editTitle = "CAMBIAR IMAGEN",
  source = {},
  containerStyle = {},
  imageFit = "cover",
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [nextImage, setNextImage] = useState(null);

  const image = nextImage || {
    src: getSrc(source),
  };

  const hasImage = !!image.src;

  const updateImage = (nextState) =>
    setNextImage((currentState) => ({ ...currentState, ...nextState }));

  const onCroppedImage = (file) => {
    setIsEditing(false);

    if (file) {
      fileToBase64(file).then(({ base64 }) => {
        updateImage({ src: base64 });
        onChange(file);
      });
    } else {
      updateImage({ src: null });
      onChange();
    }
  };

  return (
    <>
      {isEditing ? (
        <CropModal
          source={source}
          onCroppedImage={onCroppedImage}
          onClose={() => setIsEditing(false)}
        />
      ) : (
        <></>
      )}
      <Container style={containerStyle}>
        <ImageContainer style={containerStyle}>
          {canEdit && (
            <HoverContainer
              hasImage={hasImage}
              onClick={(e) => setIsEditing(true)}
            >
              <ImagePlaceholder className="placeholder">
                {editTitle}
              </ImagePlaceholder>
            </HoverContainer>
          )}
          {hasImage && (
            <Image src={image.src} style={{ objectFit: imageFit }} />
          )}
        </ImageContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 20px;
  padding-top: 10px;
`;

const ImageContainer = styled.div`
  position: relative;
  min-height: 180px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  min-height: 180px;
`;

const HoverContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ hasImage = false }) =>
    hasImage ? "transparent" : "#f0f0f0"};

  &:hover .placeholder {
    display: flex;
  }
`;

const ImagePlaceholder = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  color: #fff;
  background: hsla(0, 0%, 55%, 0.55);
  user-select: none;
  cursor: pointer;
  letter-spacing: 1.4px;
`;

export default ImageUploader;
