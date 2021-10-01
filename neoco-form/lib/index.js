'use strict';

var React = require('react');
var bluejayUi = require('bluejay-ui');
var styled = require('styled-components');
var tinymceReact = require('@tinymce/tinymce-react');
var ImageUploader = require('neoco/neoco-image-uploader');
var luxon = require('luxon');
const alertify = require('alertifyjs');


function _interopDefaultLegacy(e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var ImageUploader__default = /*#__PURE__*/_interopDefaultLegacy(ImageUploader);

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var multiselect = function multiselect(_ref) {
  var field = _ref.field,
    state = _ref.state,
    handleChange = _ref.handleChange;
  var relation = field.relation;
  var isMulti = relation.isMulti;

  if (typeof relation === "undefined") {
    throw new Error("You must define the relation prop in ".concat(field.property, " when using multiselect controls"));
  }

  return _objectSpread2({
    isMulti: isMulti
  }, isMulti ? getMultiSelectProps({
    field: field,
    state: state,
    handleChange: handleChange
  }) : getSingleSelectProps({
    field: field,
    state: state,
    handleChange: handleChange
  }));
};
var getMultiSelectProps = function getMultiSelectProps(_ref2) {
  var field = _ref2.field,
    state = _ref2.state,
    handleChange = _ref2.handleChange;
  var relation = field.relation,
    property = field.property;
  var selectedOptions = getSelectedOptions({
    state: state,
    relation: relation,
    property: property
  });
  var value = getValues(_objectSpread2({
    selectedOptions: selectedOptions
  }, relation));
  var options = getOptions(_objectSpread2({
    state: state
  }, relation));
  return {
    value: value,
    options: options,
    onChange: function onChange(selectedOptions) {
      return handleChange({
        target: {
          name: relation.name,
          value: selectedOptions
        }
      });
    }
  };
};
var idDestino;
var getSingleSelectProps = function getSingleSelectProps(_ref3) {
  var field = _ref3.field,
    state = _ref3.state,
    handleChange = _ref3.handleChange;
  var relation = field.relation,
    property = field.property;
  var selectedOption = getSelectedOptions({
    state: state,
    relation: relation,
    property: property
  });
  var hasRemoteData = typeof relation.options === "undefined";
  var isSelectedOptionAString = typeof selectedOption === "string";
  var options = hasRemoteData ? getOptions(_objectSpread2({
    state: state
  }, relation)) : relation.options;
  var item = isSelectedOptionAString ? options.find(function (option) {
    return option.value === selectedOption;
  }) : selectedOption;
  var value = item ? getSingleValue(_objectSpread2({
    item: item
  }, relation)) : "";
  return {
    value: value,
    options: options,
    onChange: function onChange(item) {
      if (_ref3.field.accion)
        idDestino = item.id;
      // console.log('idDestino', idDestino);

      return handleChange({
        target: {
          name: field.name || field.property,
          value: item
        }
      });
    }
  };
};

var getSelectedOptions = function getSelectedOptions(_ref4) {
  var state = _ref4.state,
    relation = _ref4.relation,
    property = _ref4.property;
  return typeof state.data[relation.name] === "undefined" ? state.data[property] : state.data[relation.name];
};

var getValues = function getValues(_ref5) {
  var selectedOptions = _ref5.selectedOptions,
    nameProps = _ref5.nameProps,
    primaryKey = _ref5.primaryKey;
  return selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.map(function (item) {
    return getSingleValue({
      item: item,
      nameProps: nameProps,
      primaryKey: primaryKey
    });
  });
};

var getOptions = function getOptions(_ref6) {
  var _state$aux$name;

  var state = _ref6.state,
    name = _ref6.name,
    nameProps = _ref6.nameProps,
    _ref6$primaryKey = _ref6.primaryKey,
    primaryKey = _ref6$primaryKey === void 0 ? "id" : _ref6$primaryKey;
  return (state === null || state === void 0 ? void 0 : (_state$aux$name = state.aux[name]) === null || _state$aux$name === void 0 ? void 0 : _state$aux$name.map(function () {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _objectSpread2({
      value: item[primaryKey],
      label: getName({
        item: item,
        nameProps: nameProps
      })
    }, item);
  })) || [];
};

var getSingleValue = function getSingleValue(_ref7) {
  var item = _ref7.item,
    nameProps = _ref7.nameProps,
    _ref7$primaryKey = _ref7.primaryKey,
    primaryKey = _ref7$primaryKey === void 0 ? "id" : _ref7$primaryKey;
  return _objectSpread2({
    value: (item === null || item === void 0 ? void 0 : item.value) || item[primaryKey],
    label: (item === null || item === void 0 ? void 0 : item.label) || getName({
      item: item,
      nameProps: nameProps
    })
  }, item);
};

var getName = function getName(_ref8) {
  var item = _ref8.item,
    _ref8$nameProps = _ref8.nameProps,
    nameProps = _ref8$nameProps === void 0 ? [] : _ref8$nameProps;
  return Object.keys(item).filter(function (key) {
    return nameProps.includes(key);
  }).map(function (key) {
    return item[key];
  }).join(" ");
};

var date = function date(_ref) {
  var field = _ref.field,
    state = _ref.state,
    handleChange = _ref.handleChange,
    format = _ref.format,
    _ref$toFormat = _ref.toFormat,
    toFormat = _ref$toFormat === void 0 ? "yyyy-MM-dd" : _ref$toFormat;
  var value = format({
    state: state,
    field: field
  });
  var parsedDate = luxon.DateTime.fromISO(value);
  return _objectSpread2(_objectSpread2({}, field), {}, {
    onChange: handleChange,
    value: parsedDate.isValid ? parsedDate.toFormat(toFormat) : value
  });
};

var inputMapper = function inputMapper(_ref) {
  var _field$upsertOptions, _field$upsertOptions2, _inputRef$current, _inputRef$current3, _inputRef$current4, _inputRef$current5;

  var field = _ref.field,
    state = _ref.state,
    _ref$handleChange = _ref.handleChange,
    handleChange = _ref$handleChange === void 0 ? function () { } : _ref$handleChange;
  var format = ((_field$upsertOptions = field.upsertOptions) === null || _field$upsertOptions === void 0 ? void 0 : _field$upsertOptions.format) || defaultFormat;

  var defaultHandleChange = function defaultHandleChange(_ref2) {
    var _ref2$target = _ref2.target,
      name = _ref2$target.name,
      value = _ref2$target.value;
    handleChange(_defineProperty({}, name, value));
  };

  var fieldHandleChange = ((_field$upsertOptions2 = field.upsertOptions) === null || _field$upsertOptions2 === void 0 ? void 0 : _field$upsertOptions2.onChange) ? function (_ref3) {
    var _field$upsertOptions3;

    var _ref3$target = _ref3.target,
      name = _ref3$target.name,
      value = _ref3$target.value;
    Promise.resolve((_field$upsertOptions3 = field.upsertOptions) === null || _field$upsertOptions3 === void 0 ? void 0 : _field$upsertOptions3.onChange({
      name: name,
      value: value
    })).then(handleChange);
  } : defaultHandleChange;

  switch (field.type) {
    case "textarea":
      return /*#__PURE__*/React__default['default'].createElement(bluejayUi.Input, _extends({
        as: bluejayUi.TextArea
      }, field, {
        onChange: fieldHandleChange,
        rows: 5,
        value: format({
          state: state,
          field: field
        })
      }));

    case "checkbox":
      return /*#__PURE__*/React__default['default'].createElement(bluejayUi.Checkbox, {
        onChange: function onChange(_ref4) {
          var target = _ref4.target;
          fieldHandleChange({
            target: {
              name: field.name || field.property,
              value: target.checked
            }
          });
        },
        checked: format({
          state: state,
          field: field
        }),
        label: field.label
      });

    case "email":
      return /*#__PURE__*/React__default['default'].createElement(bluejayUi.Input, _extends({}, field, {
        onChange: fieldHandleChange,
        value: format({
          state: state,
          field: field
        }),
        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
      }));

    case "image":
      var data = format({
        state: state,
        field: field
      });

      return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(ImageUploader__default['default'], {
        onChange: function onChange(data) {
          fieldHandleChange({
            target: {
              name: field.name || field.property,
              value: data
            }
          });
        },
        source: _objectSpread2(_objectSpread2({}, typeof data === "string" && {
          uri: data,
          name: state.data[field.property]
        }), _typeof(data) === "object" && {
          file: data,
          name: state.data[field.property]
        }),
        label: field.label
      }), (field.id) ?
      /*#__PURE__*/React__default['default'].createElement('div', { style: { textAlign: 'center' } },
      /*#__PURE__*/React__default['default'].createElement(bluejayUi.Label,
        {
          style: { width: '100%', fontSize: '16px' },
          id: `footer${field.id}`,
          color: 'primary',
        },
        (field.id && field.footer) ? field.footer.toString() : ""
      ),
            /*#__PURE__*/React__default['default'].createElement(bluejayUi.Button,
        {
          style: { width: '100%', marginTop: '15px' },
          color: 'primary',
          onClick: async function onClick(e) {
            const resultado = prompt("Introduzca el nuevo pie de foto");
            field.footer = resultado;
            document.getElementById(`footer${field.id}`).innerHTML = resultado;
            e.preventDefault();

            const loginRequest = (credentials) =>
              request(`login`, {
                method: "POST",
                body: JSON.stringify({
                  email: credentials.email,
                  pass: credentials.password,
                }),
              }).then((res) => {
                if (res.user) {
                  return Promise.resolve(res);
                }
              });

            const request = (url, options) =>
              fetch(`${process.env.REACT_APP_API_URL}${url}`, {
                ...options,
                headers: getHeaders(options.headers),
              }).then((res) => {
                switch (res.status) {
                  case 200:
                    return res.json();
                  case 403:
                    localStorage.removeItem("token");
                    localStorage.setItem("isLoggedIn", false);
                    localStorage.setItem("user", {});
                    window.location = "/";
                    return;
                  default:
                    return res
                      .json()
                      .then((error) => Promise.reject({ status: res.status, error }));
                }
              });


            const getHeaders = (headers) => {
              const nextHeaders = {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                ...headers,
              };

              return Object.keys(nextHeaders)
                .filter((key) => typeof nextHeaders[key] !== "undefined")
                .reduce((reducer, key) => ({ ...reducer, [key]: nextHeaders[key] }), {});
            };

            await loginRequest({ email: "vitar@ticrevolution.com", password: "sweetadmin" }).then(x => {
              request(`admin/image/${field.id}`,
                {
                  method: "PUT",
                  headers:
                  {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${x.token}`,
                  },
                  body: JSON.stringify({ id: field.id, name: field.nombre, url: field.nombre, footer: resultado }),
                }).then(x => { if (x.code == 202) alertify.notify('El pie se ha actualizado correctamente', 'success'); else alertify.notify('Se ha producido un error al actualizar el pie', 'warning'); });

            });
          }
        }, 'Actualizar pie de foto')
      ) : null);

    case "file":
    case "file-pdf":
      var currentFilename = format({
        state: state,
        field: field
      });
      var inputRef = React.useRef(null);
      var thereAreFile = (currentFilename === null || currentFilename === void 0 ? void 0 : currentFilename.length) || (inputRef === null || inputRef === void 0 ? void 0 : (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.files.length);
      var icon = field === null || field === void 0 ? void 0 : field.icon;
      return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(bluejayUi.Label, null, field.label), /*#__PURE__*/React__default['default'].createElement("div", {
        style: {
          marginTop: 6
        }
      }, /*#__PURE__*/React__default['default'].createElement("label", {
        className: "custom-file-upload"
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }
      }, /*#__PURE__*/React__default['default'].createElement(bluejayUi.Button, {
        onClick: function onClick(e) {
          var _inputRef$current2;

          e.preventDefault();
          inputRef === null || inputRef === void 0 ? void 0 : (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.click();
        }
      }, icon ? icon : "UPLOAD"), thereAreFile ? /*#__PURE__*/React__default['default'].createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center"
        }
      }, /*#__PURE__*/React__default['default'].createElement(bluejayUi.Button, {
        style: {
          backgroundColor: "red",
          marginLeft: 4,
          height: 24,
          width: 2,
          marginRight: 6,
          borderRadius: 4
        },
        onClick: function onClick(e) {
          e.target.value = null;
          e.preventDefault();
          inputRef.current.value = "";
          fieldHandleChange({
            target: {
              name: field.name || field.property,
              value: null
            }
          });
        }
      }, "X"), /*#__PURE__*/React__default['default'].createElement("i", {
        className: "fa fa-cloud-upload"
      }, (inputRef === null || inputRef === void 0 ? void 0 : (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 ? void 0 : _inputRef$current3.files) && (inputRef === null || inputRef === void 0 ? void 0 : (_inputRef$current4 = inputRef.current) === null || _inputRef$current4 === void 0 ? void 0 : _inputRef$current4.files.length) ? inputRef === null || inputRef === void 0 ? void 0 : (_inputRef$current5 = inputRef.current) === null || _inputRef$current5 === void 0 ? void 0 : _inputRef$current5.files[0].name : currentFilename ? currentFilename : "")) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null)), /*#__PURE__*/React__default['default'].createElement("input", {
        ref: inputRef,
        type: "file",
        style: {
          width: 0,
          height: 0
        },
        accept: field.type === "file-pdf" ? "application/pdf" : "*",
        onChange: function onChange(_ref5) {
          var target = _ref5.target;
          var files = target.files;
          var filesArr = Array.prototype.slice.call(files);

          if (filesArr.length) {
            fieldHandleChange({
              target: {
                name: field.name || field.property,
                value: filesArr[0]
              }
            });
          } else {
            fieldHandleChange({
              target: {
                name: field.name || field.property,
                value: null
              }
            });
          }
        }
      }))));

    case "date":
      {
        var props = date({
          field: field,
          state: state,
          handleChange: fieldHandleChange,
          format: format
        });
        return /*#__PURE__*/React__default['default'].createElement(bluejayUi.Input, props);
      }

    case "datetime-local":
      {
        var _props = date({
          field: field,
          state: state,
          handleChange: fieldHandleChange,
          format: format,
          toFormat: "yyyy-MM-dd'T'HH:mm"
        });

        return /*#__PURE__*/React__default['default'].createElement(bluejayUi.Input, _props);
      }

    case "multiselect":
      {
        var _props2 = multiselect({
          field: field,
          state: state,
          handleChange: fieldHandleChange
        });

        return /*#__PURE__*/React__default['default'].createElement(bluejayUi.MultiSelect, _extends({}, field, {
          isSearchable: true,
          placeholder: "Sin asignar",
          isDisabled: field.disabled
        }, _props2));
      }

    case "fusion":
      {
        return /*#__PURE__*/React__default['default'].createElement(bluejayUi.Button, {
          style: { backgroundColor: 'red' },
          onClick: async function onClick(e) {
            // console.log('idDestino', idDestino);
            var idOrigen = state.data.id;
            // console.log('idOrigen', idOrigen);

            if (idDestino && idOrigen) {
              const loginRequest = (credentials) =>
                request(`login`, {
                  method: "POST",
                  body: JSON.stringify({
                    email: credentials.email,
                    pass: credentials.password,
                  }),
                }).then((res) => {
                  if (res.user) {
                    return Promise.resolve(res);
                  }
                });

              const request = (url, options) =>
                fetch(`${process.env.REACT_APP_API_URL}${url}`, {
                  ...options,
                  headers: getHeaders(options.headers),
                }).then((res) => {
                  switch (res.status) {
                    case 200:
                      return res.json();
                    case 403:
                      localStorage.removeItem("token");
                      localStorage.setItem("isLoggedIn", false);
                      localStorage.setItem("user", {});
                      window.location = "/";
                      return;
                    default:
                      return res
                        .json()
                        .then((error) => Promise.reject({ status: res.status, error }));
                  }
                });


              const getHeaders = (headers) => {
                const nextHeaders = {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                  ...headers,
                };

                return Object.keys(nextHeaders)
                  .filter((key) => typeof nextHeaders[key] !== "undefined")
                  .reduce((reducer, key) => ({ ...reducer, [key]: nextHeaders[key] }), {});
              };

              alert('Se van a fusionar las etiquetas');
              await loginRequest({ email: "vitar@ticrevolution.com", password: "sweetadmin" }).then(x => {
                request(`admin/tag/unificarTag?idOrigen=${idOrigen}&idDestino=${idDestino}`,
                  {
                    method: "POST",
                    headers:
                    {
                      "Content-Type": "application/json",
                      Accept: "application/json",
                      Authorization: `Bearer ${x.token}`,
                    },
                    // body: JSON.stringify({ idOrigen: idOrigen.toString(), idDestino: idDestino.toString() }),
                  }).then(x => console.log(x));

              });
            }
          }
        }, "Fusionar etiquetas");
      }

    case "seo":
      {
        function stripHtml(html) {
          var temporalDivElement = document.createElement("div");
          temporalDivElement.innerHTML = html;
          return temporalDivElement.textContent || temporalDivElement.innerText || "";
        }

        var h1 = 0
        var h2 = 0;
        var charContenido = 0
        var img = 0;
        var href = 0;
        var mismoDominio = 0;
        try { h1 = state.data.content.match(/<h1>/g || []).length; } catch { }
        try { h2 = state.data.content.match(/<h2>/g || []).length; } catch { }
        try { img = state.data.content.match(/<img/g || []).length; } catch { }
        try { href = state.data.content.match(/href=/g || []).length; } catch { }
        try { mismoDominio = state.data.content.match(/href="https:\/\/www.sweetpress.com\//g || []).length; } catch { }
        try { charContenido = stripHtml(state.data.content).length; } catch { }

        var puntuacion = 0;
        if (state.data.titleSeo != undefined) if (state.data.titleSeo.length > 67) puntuacion++;
        if (state.data.descriptioSeo != undefined) if (state.data.descriptioSeo.length > 157) puntuacion++;
        if (h1 > 0) puntuacion++;
        if (h2 > 0) puntuacion++;
        if (charContenido > 601) puntuacion += 2;
        if (img > 0) puntuacion++;
        if (state.data.descriptioSeo != undefined) if (state.data.gallery) puntuacion++;
        if (mismoDominio > 0) puntuacion++;
        if ((href - mismoDominio) > 0) puntuacion++;

        var semaforo;
        if (puntuacion <= 5) semaforo = "red";
        if (puntuacion > 5 && puntuacion < 8) semaforo = "yellow";
        if (puntuacion >= 8) semaforo = "green";

        return React__default['default'].createElement(React__default['default'].Fragment, null,
          React.createElement(bluejayUi.Label, null, "Puntuación SEO: " + puntuacion),
          React.createElement("div", {
            style: {
              width: "50px",
              height: "50px",
              borderRadius: "25px",
              backgroundColor: semaforo,
              marginTop: "10px",
              marginBottom: "10px"
            }
          }, null),
          React.createElement(bluejayUi.TextArea, _extends({}, field, {
            onChange: fieldHandleChange,
            rows: 9,
            disabled: "disabled",
            value:
              (state.data.titleSeo ? `Título SEO: ${state.data.titleSeo.length} caracteres \n` : "Título SEO: 0 caracteres \n") +
              (state.data.descriptioSeo ? `Descripción SEO: ${state.data.descriptioSeo.length} caracteres \n` : "Descripción SEO: 0 caracteres \n") +
              (state.data.content ? `Cantidad de H1: ${h1} ocurrencias \n` : "Cantidad de H1: 0 ocurrencias \n") +
              (state.data.content ? `Cantidad de H2: ${h2} ocurrencias \n` : "Cantidad de H2: 0 ocurrencias \n") +
              (state.data.content ? `Longitud contenido: ${charContenido} caracteres \n` : "Longitud contenido: 0 caracteres \n") +
              (state.data.content ? `Cantidad de imágenes: ${img} imágenes \n` : "Cantidad de imágenes: 0 imágenes \n") +
              (state.data.content ? `Enlaces al mismo dominio: ${mismoDominio} enlaces \n` : "Enlaces al mismo dominio: 0 enlaces \n") +
              (state.data.content ? `Enlaces otros dominios: ${href - mismoDominio} enlaces \n` : "Enlaces otros dominios: 0 enlaces \n") +
              (state.data.gallery ? `Galería asociada` : "Sin galería asociada")
          }))
        );
      }

    case "html":
      {
        const loginRequest = (credentials) =>
          request(`login`, {
            method: "POST",
            body: JSON.stringify({
              email: credentials.email,
              pass: credentials.password,
            }),
          }).then((res) => {
            if (res.user) {
              return Promise.resolve(res);
            }
          });

        const request = (url, options) =>
          fetch(`${process.env.REACT_APP_API_URL}${url}`, {
            ...options,
            headers: getHeaders(options.headers),
          }).then((res) => {
            switch (res.status) {
              case 200:
                return res.json();
              case 403:
                localStorage.removeItem("token");
                localStorage.setItem("isLoggedIn", false);
                localStorage.setItem("user", {});
                window.location = "/";
                return;
              default:
                return res
                  .json()
                  .then((error) => Promise.reject({ status: res.status, error }));
            }
          });


        const getHeaders = (headers) => {
          const nextHeaders = {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            ...headers,
          };

          return Object.keys(nextHeaders)
            .filter((key) => typeof nextHeaders[key] !== "undefined")
            .reduce((reducer, key) => ({ ...reducer, [key]: nextHeaders[key] }), {});
        };

        var _field$controlProps;

        var imageFilePicker = async function (callback, value, meta) {
          var imagenes;
          await loginRequest({ email: "vitar@ticrevolution.com", password: "sweetadmin" }).then(x => {
            request(`admin/medialibrary/all`,
              {
                method: "GET",
                headers:
                {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  Authorization: `Bearer ${x.token}`,
                }
              }).then(x => {
                imagenes = x.data;

                const groupBy = key => array => array.reduce((objectsByKeyValue, obj) => {
                  const value = obj[key];
                  objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
                  return objectsByKeyValue;
                }, {});

                const groupByCategory = groupBy('category');
                const imagenesTab = groupByCategory(imagenes);
                var tabs = [];

                Object.keys(imagenesTab).forEach(x => {
                  var items = [];
                  imagenes.filter(img => img.category == x).forEach(item => {
                    items.push(
                      {
                        type: 'htmlpanel',
                        html: `<img src="${process.env.REACT_APP_API_URL}/image/${item.url}" style="height:150px; margin-top:20px" alt="Imagen"/>`,
                      },
                      {
                        type: 'checkbox',
                        name: item.url ? item.url : item.id.toString(),
                        label: item.name,
                      });
                  });
                  tabs.push(
                    {
                      name: x,
                      title: x,
                      items: items
                    }
                  );
                });

                tinymce.activeEditor.windowManager.open({
                  title: 'Galería de medios',
                  size: 'medium',
                  body: {
                    type: 'tabpanel',
                    tabs: tabs,
                  },
                  buttons: [
                    {
                      type: 'cancel',
                      text: 'Cerrar',
                      onclick: 'close'
                    },
                    {
                      type: 'submit',
                      text: 'Seleccionar',
                      primary: true,
                    },
                  ],
                  onSubmit: function (api) {
                    var data = api.getData();
                    callback(process.env.REACT_APP_API_URL + '/image/' + Object.keys(data)[Object.values(data).indexOf(true)]);
                    tinymce.activeEditor.windowManager.close();
                  }
                });
              });
          });
        };




        var value = typeof field.value === "function" ? field.value({
          field: field,
          state: state
        }) : state.data[field.property];
        return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(bluejayUi.Label, null, field.label), /*#__PURE__*/React__default['default'].createElement("div", {
          style: {
            marginTop: 10,
            marginBottom: 20
          }
        }, /*#__PURE__*/React__default['default'].createElement(tinymceReact.Editor, {
          apiKey: "vrs1q275q482m5em1el96e57gfb55525ketzt1ulyk3z12fb",
          init: _objectSpread2({
            language: "es",
            selector: "textarea#full-featured",
            plugins: "print preview importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons code cita",
            menubar: "file edit view insert format tools table tc help code",
            toolbar: "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect btnCita| alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment",
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
            quickbars_selection_toolbar: "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
            noneditable_noneditable_class: "mceNonEditable",
            toolbar_mode: "sliding",
            content_style: ".mymention{ color: gray; }",
            contextmenu: "link image imagetools table configurepermanentpen",
            a11y_advanced_options: true,
            image_advtab: true,
            external_plugins: {
              'cita': '/plugins/cita/plugin.min.js'
            },
            file_picker_callback: function (callback, value, meta) {
              imageFilePicker(callback, value, meta);
            },
          }, (_field$controlProps = field.controlProps) === null || _field$controlProps === void 0 ? void 0 : _field$controlProps.init),
          value: value,
          onEditorChange: function onEditorChange(content) {
            return fieldHandleChange({
              target: {
                name: field.name || field.property,
                value: content
              }
            });
          }
        })));
      }

    default:
      return /*#__PURE__*/React__default['default'].createElement(bluejayUi.Input, _extends({}, field, {
        onChange: fieldHandleChange,
        value: format({
          state: state,
          field: field
        })
      }));
  }
};

var defaultFormat = function defaultFormat(_ref6) {
  var state = _ref6.state,
    field = _ref6.field;
  return state.data[field.name || field.property];
};

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n  color: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 10px !important;\n  font-size: 12px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  flex-basis: 30%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: #909090;\n  font-size: 16px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var FormGenerator = function FormGenerator(_ref) {
  var _ref$headers = _ref.headers,
    headers = _ref$headers === void 0 ? {} : _ref$headers,
    _ref$state = _ref.state,
    state = _ref$state === void 0 ? {} : _ref$state,
    _ref$handleChange = _ref.handleChange,
    handleChange = _ref$handleChange === void 0 ? function () { } : _ref$handleChange,
    _ref$onSubmit = _ref.onSubmit,
    onSubmit = _ref$onSubmit === void 0 ? function () {
      return Promise.resolve({});
    } : _ref$onSubmit,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null) : _ref$children,
    _ref$Button = _ref.Button,
    Button = _ref$Button === void 0 ? bluejayUi.Button : _ref$Button,
    props = _objectWithoutProperties(_ref, ["headers", "state", "handleChange", "onSubmit", "children", "Button"]);

  var _useState = React.useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];

  var onLocalSubmit = function onLocalSubmit(e) {
    e.preventDefault();
    onSubmit(e).catch(setError);
  };

  return /*#__PURE__*/React__default['default'].createElement("form", {
    onSubmit: onLocalSubmit
  }, headers.sections.map(function (section, index) {
    return sectionMapper(_objectSpread2({
      section: section,
      index: index,
      state: state,
      handleChange: handleChange
    }, props));
  }), typeof children === "function" ? children({
    state: state
  }) : children, error.message && /*#__PURE__*/React__default['default'].createElement(bluejayUi.Text, {
    color: "danger"
  }, error.message), /*#__PURE__*/React__default['default'].createElement(Button, {
    style: {
      marginTop: 20
    },
    color: "primary"
  }, "Guardar"));
};

var sectionMapper = function sectionMapper(_ref2) {
  var section = _ref2.section,
    index = _ref2.index,
    state = _ref2.state,
    handleChange = _ref2.handleChange,
    _ref2$Title = _ref2.Title,
    Title = _ref2$Title === void 0 ? DefaultTitle : _ref2$Title,
    _ref2$Subtitle = _ref2.Subtitle,
    Subtitle = _ref2$Subtitle === void 0 ? DefaultSubtitle : _ref2$Subtitle;
  var _section$FieldsContai = section.FieldsContainer,
    FieldsContainer = _section$FieldsContai === void 0 ? BaseFieldsContainer : _section$FieldsContai;
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, {
    key: index
  }, /*#__PURE__*/React__default['default'].createElement(Section, null, section.title ? /*#__PURE__*/React__default['default'].createElement(Title, null, section.title) : "", section.subtitle ? /*#__PURE__*/React__default['default'].createElement(Subtitle, null, section.subtitle) : "", /*#__PURE__*/React__default['default'].createElement(FieldsContainer, {
    style: _objectSpread2({
      marginTop: 20
    }, section.fieldsContainerStyles)
  }, typeof section.render === "function" ? section.render() : section.fields.map(function (_ref3, fieldIndex) {
    var _ref3$FieldContainer = _ref3.FieldContainer,
      FieldContainer = _ref3$FieldContainer === void 0 ? BaseFieldContainer : _ref3$FieldContainer,
      field = _objectWithoutProperties(_ref3, ["FieldContainer"]);

    return /*#__PURE__*/React__default['default'].createElement(FieldContainer, {
      key: fieldIndex,
      style: field.style
    }, inputMapper({
      field: field,
      state: state,
      handleChange: handleChange
    }), typeof field.renderAfter === "function" ? field.renderAfter() : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null), typeof field.isValid === "function" && /*#__PURE__*/React__default['default'].createElement(ErrorMessage, null, field.isValid(state.data[field.name])));
  }))));
};

var Section = styled__default['default'].div(_templateObject());
var DefaultTitle = styled__default['default'].p(_templateObject2());
var DefaultSubtitle = styled__default['default'].p(_templateObject3());
var BaseFieldsContainer = styled__default['default'].div(_templateObject4());
var BaseFieldContainer = styled__default['default'].div(_templateObject5());
var CheckboxLabel = styled__default['default'](bluejayUi.Label)(_templateObject6());
var ErrorMessage = styled__default['default'].span(_templateObject7(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.danger;
});

module.exports = FormGenerator;
//# sourceMappingURL=index.js.map
