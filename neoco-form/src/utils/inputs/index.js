import React, { useRef } from "react";
import {
  MultiSelect,
  TextArea,
  Checkbox,
  Input,
  Label,
  Button,
} from "bluejay-ui";
import { Editor } from "@tinymce/tinymce-react";
import ImageUploader from "@neoco/neoco-image-uploader";
import multiselect from "./multi-select/multi-select";
import date from "./date/date";

export const inputMapper = ({ field, state, handleChange = () => {} }) => {
  const format = field.upsertOptions?.format || defaultFormat;

  const defaultHandleChange = ({ target: { name, value } }) => {
    handleChange({ [name]: value });
  };
  const fieldHandleChange = field.upsertOptions?.onChange
    ? ({ target: { name, value } }) => {
        Promise.resolve(field.upsertOptions?.onChange({ name, value })).then(
          handleChange
        );
      }
    : defaultHandleChange;

  switch (field.type) {
    case "textarea":
      return (
        <Input
          as={TextArea}
          {...field}
          onChange={fieldHandleChange}
          rows={5}
          value={format({ state, field })}
        />
      );

    case "checkbox":
      return (
        <Checkbox
          onChange={({ target }) => {
            fieldHandleChange({
              target: {
                name: field.name || field.property,
                value: target.checked,
              },
            });
          }}
          checked={format({ state, field })}
          label={field.label}
        />
      );

    case "email":
      return (
        <Input
          {...field}
          onChange={fieldHandleChange}
          value={format({ state, field })}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
      );

    case "image":
      const data = format({ state, field });

      return (
        <>
          <Label>{field.label}</Label>
          <ImageUploader
            onChange={(data) => {
              fieldHandleChange({
                target: {
                  name: field.name || field.property,
                  value: data,
                },
              });
            }}
            source={{
              ...(typeof data === "string" && {
                uri: data,
                name: state.data[field.property],
              }),
              ...(typeof data === "object" && {
                file: data,
                name: state.data[field.property],
              }),
            }}
            label={field.label}
          />
        </>
      );

    case "file":
    case "file-pdf":
      const currentFilename = format({ state, field });
      const inputRef = useRef(null);
      const thereAreFile = currentFilename?.length || inputRef?.current?.files.length
      const icon = field?.icon;
      
       return (
        <>
          <Label>{field.label}</Label>
          <div style={{ marginTop: 6 }}>
            <label className="custom-file-upload">
              <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  inputRef?.current?.click();
                }}
              >
                {icon ? icon : "UPLOAD"}
              </Button>
              {thereAreFile ? <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                <Button style={{backgroundColor:"red", marginLeft:4, height:24, width:2, marginRight:6, borderRadius:4}} onClick={(e)=>{
                e.target.value = null;
                e.preventDefault();

                inputRef.current.value = "";

                fieldHandleChange({
                  target: {
                    name: field.name || field.property,
                    value: null,
                  },
                });
              }}>X</Button>
              <i
                className="fa fa-cloud-upload"
              >
                {inputRef?.current?.files && inputRef?.current?.files.length
                  ? inputRef?.current?.files[0].name
                  : currentFilename
                  ? currentFilename
                  : ""}
              </i></div>:<></>}
              </div>
              <input
                ref={inputRef}
                type="file"
                style={{ width: 0, height: 0 }}
                accept={field.type === "file-pdf" ? "application/pdf" : "*"}
                onChange={({ target }) => {
                  var files = target.files;
                  var filesArr = Array.prototype.slice.call(files);
                  if (filesArr.length) {
                    fieldHandleChange({
                      target: {
                        name: field.name || field.property,
                        value: filesArr[0],
                      },
                    });
                  } else {
                    fieldHandleChange({
                      target: {
                        name: field.name || field.property,
                        value: null,
                      },
                    });
                  }
                }}
              />
            </label>
          </div>
        </>
      );

    case "date": {
      const props = date({
        field,
        state,
        handleChange: fieldHandleChange,
        format,
      });
      return <Input {...props} />;
    }

    case "datetime-local": {
      const props = date({
        field,
        state,
        handleChange: fieldHandleChange,
        format,
        toFormat: "yyyy-MM-dd'T'HH:mm",
      });

      return <Input {...props} />;
    }

    case "multiselect": {
      const props = multiselect({
        field,
        state,
        handleChange: fieldHandleChange,
      });

      return (
        <MultiSelect
          {...field}
          isSearchable={true}
          placeholder={"Sin asignar"}
          isDisabled={field.disabled}
          {...props}
        />
      );
    }

    case "html": {
      const value =
        typeof field.value === "function"
          ? field.value({ field, state })
          : state.data[field.property];

      return (
        <>
          <Label>{field.label}</Label>
          <div style={{ marginTop: 10, marginBottom: 20 }}>
            <Editor
              apiKey="vrs1q275q482m5em1el96e57gfb55525ketzt1ulyk3z12fb"
              init={{
                language: "es",
                selector: "textarea#full-featured",
                plugins:
                  "print preview importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons code",
                menubar:
                  "file edit view insert format tools table tc help code",
                toolbar:
                  "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment",
                autosave_ask_before_unload: true,
                autosave_interval: "30s",
                autosave_prefix: "{path}{query}-{id}-",
                autosave_restore_when_empty: false,
                autosave_retention: "2m",
                image_advtab: true,
                images_upload_url: field.imageUploadURL,
                images_upload_handler: field.onImageUpload,
                importcss_append: true,
                height: 600,
                image_caption: true,
                quickbars_selection_toolbar:
                  "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
                noneditable_noneditable_class: "mceNonEditable",
                toolbar_mode: "sliding",
                content_style: ".mymention{ color: gray; }",
                contextmenu:
                  "link image imagetools table configurepermanentpen",
                a11y_advanced_options: true,
                ...field.controlProps?.init,
              }}
              value={value}
              onEditorChange={(content) =>
                fieldHandleChange({
                  target: {
                    name: field.name || field.property,
                    value: content,
                  },
                })
              }
            />
          </div>
        </>
      );
    }

    default:
      return (
        <Input
          {...field}
          onChange={fieldHandleChange}
          value={format({ state, field })}
        />
      );
  }
};

const defaultFormat = ({ state, field }) =>
  state.data[field.name || field.property];
