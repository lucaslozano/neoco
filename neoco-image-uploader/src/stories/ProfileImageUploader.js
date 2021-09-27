import React, { useState } from "react";
import ImageEditor from "../components/ImageUploader/ImageUploader";
import PropTypes from "prop-types";

const ProfileImageUploader = () => {
  const [file, setFile] = useState(null);
  const [source, setSource] = useState({
    uri: "https://picsum.photos/id/237/200/300",
  });
  return (
    <ImageEditor
      source={source}
      onChange={(file) => (file ? setSource({ file }) : setSource(null))}
    />
  );
};

ProfileImageUploader.propTypes = {
  source: PropTypes.shape({
    uri: PropTypes.string,
    file: PropTypes.object,
  }),
  onChange: PropTypes.func,
  canEdit: PropTypes.bool,
  editTitle: PropTypes.string,
  imageFit: PropTypes.string,
  containerStyle: PropTypes.func,
  onChange: PropTypes.func,
  onChange: PropTypes.func,
};

ProfileImageUploader.defaultProps = {
  canEdit: true,
  editTitle: "CAMBIAR IMAGEN",
  imageFit: "cover",
  containerStyle: { width: 360, height: 180 },
};

export default ProfileImageUploader;
