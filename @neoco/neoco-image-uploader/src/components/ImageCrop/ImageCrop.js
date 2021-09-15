import React from "react";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";
import _ from "./ImageCrop.css";

const DEFAULT_MODE = {
  modal: true,
  background: false,
  rotatable: false,
  cropBoxResizable: true,
  dragMode: "crop",
  cropBoxMovable: true,
  autoCrop: true,
  viewMode: 1,
  zoom: 0,
  autoCropArea: 1,
};

const AVATAR_MODE = {
  aspectRatio: 1,
  modal: true,
  background: false,
  autoCrop: false,
  rotatable: false,
  cropBoxResizable: false,
  dragMode: "move",
  cropBoxMovable: false,
  autoCrop: true,
  viewMode: 1,
  zoom: 0,
  aspectRatio: 1,
  minCropBoxWidth: 300,
  minCropBoxHeight: 300,
};

const getCropperOptions = (cropMode) =>
  cropMode === "avatar" ? AVATAR_MODE : DEFAULT_MODE;
class ImageCrop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.img && !this.cropper) {
      const { cropMode = "default" } = this.props;
      this.cropper = new Cropper(this.img, getCropperOptions(cropMode));
    }
    if (this.props.file !== prevProps.file) {
      this.cropper
        .reset()
        .clear()
        .replace(this.props.file && this.props.file.base64);
    }
  }
  componentWillUnmount() {
    if (this.img) {
      if (this.cropper) {
        this.cropper.destroy();
      }
      delete this.img;
      delete this.cropper;
    }
  }

  zoomTo(zoom) {
    if (this.cropper) {
      this.cropper.zoomTo(zoom);
    }
  }

  removePhoto() {
    if (this.cropper) {
      this.cropper.destroy();
      delete this.img;
      delete this.cropper;
    }
  }

  crop() {
    return new Promise((resolve) => {
      if (this.cropper) {
        const canvas = this.cropper.getCroppedCanvas({});
        if (!canvas) {
          resolve(null);
        } else {
          canvas.toBlob(function (blob) {
            const fd = new FormData();
            fd.set("a", blob);
            resolve(blob);
          });
        }
      } else {
        resolve(null);
      }
    });
  }

  render() {
    const { alt, file, crossOrigin, style } = this.props;
    return (
      <div style={style}>
        <img
          crossOrigin={crossOrigin}
          ref={(img) => {
            this.img = img;
          }}
          src={file && file.base64}
          alt={alt === undefined ? "picture" : alt}
          style={{ opacity: 0 }}
        />
      </div>
    );
  }
}

export default ImageCrop;
