import * as React from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
function resetBaseFontSize() {
  var fontSize = Math.min(50, window.innerWidth * 0.1);
  document.querySelector("html").style.fontSize = "".concat(fontSize, "px");
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", resetBaseFontSize);
} else {
  resetBaseFontSize();
}
window.addEventListener("resize", resetBaseFontSize);
const view = "_view_1qkdw_1";
var styles$d = {
  view
};
const View = ({
  children
}) => {
  return /* @__PURE__ */ React.createElement("article", {
    className: styles$d.view
  }, children);
};
const pane = "_pane_rwmzl_1";
var styles$c = {
  pane
};
const Pane = ({
  onScroll,
  children
}) => {
  return /* @__PURE__ */ React.createElement("main", {
    className: styles$c.pane,
    onScroll
  }, children);
};
const Icons = ({}) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: 0,
    height: 0
  }, /* @__PURE__ */ React.createElement("symbol", {
    id: "search",
    viewBox: "0 0 1024 1024"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6c3.2 3.2 8.4 3.2 11.6 0l43.6-43.5c3.2-3.2 3.2-8.4 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
  })), /* @__PURE__ */ React.createElement("symbol", {
    id: "add",
    viewBox: "0 0 1024 1024"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M863.328 482.56l-317.344-1.12L545.984 162.816c0-17.664-14.336-32-32-32s-32 14.336-32 32l0 318.4L159.616 480.064c-0.032 0-0.064 0-0.096 0-17.632 0-31.936 14.24-32 31.904C127.424 529.632 141.728 544 159.392 544.064l322.592 1.152 0 319.168c0 17.696 14.336 32 32 32s32-14.304 32-32l0-318.944 317.088 1.12c0.064 0 0.096 0 0.128 0 17.632 0 31.936-14.24 32-31.904C895.264 496.992 880.96 482.624 863.328 482.56z"
  })), /* @__PURE__ */ React.createElement("symbol", {
    id: "share",
    viewBox: "0 0 1024 1024"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M130.976744 1024v-825.550388h285.767442v63.503876H194.48062v698.542636h635.03876v-698.542636h-222.263566v-63.503876h285.767442v825.550388H130.976744zM543.751938 121.800434V579.472868h-63.503876V121.800434L422.205519 179.842977 377.276527 134.945736l89.794481-89.79448L512 0.222264l134.723473 134.723472-44.89724 44.897241z"
  })), /* @__PURE__ */ React.createElement("symbol", {
    id: "compose",
    viewBox: "0 0 1024 1024"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M736 832 160 832 160 288 608.234 288 640.234 256 128 256 128 864 768 864 768 383.766 736 415.766Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M475.246 568.168 455.834 548.754 798.48 206.108 775.854 183.48 416 543.302 416 608 480.432 608 840.522 248.032 817.894 225.46Z",
    "p-id": "24784"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M888.426 160.624l-24.93-24.932C858.168 130.934 851.112 128 843.492 128c-7.624 0-14.608 2.936-19.858 7.7L799.332 160l0.16 0.16 22.586 22.586 42.04 42.04 24.3-24.3c4.766-5.25 7.582-12.234 7.582-19.858C896 173.008 893.184 165.95 888.426 160.624z"
  })), /* @__PURE__ */ React.createElement("symbol", {
    id: "trash",
    viewBox: "0 0 1024 1024"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M767.436 212.362q-16.727 0-66.909 0-10.909 0-44.364 0-4.364 0-17.455 0-5.091 0-5.091-5.091 0-5.818 0-17.455 0-2.182 0-9.455 0-21.818-16-37.091-15.273-15.273-37.818-15.273-49.455 0-148.364 0-21.818 0-37.091 15.273-15.273 15.273-15.273 37.091 0 2.909 0 9.455 0 4.364 0 17.455 0 5.091-5.091 5.091-5.818 0-17.455 0-10.909 0-44.364 0-16.727 0-68.364 0-5.818 0-10.182 4.364-5.091 4.364-5.091 10.909 0 12.364 12.364 14.545 4.364 0 13.818 0 1.455 0 5.091 3.636 1.455 24.727 3.636 73.455 6.545 125.818 26.182 504 0.727 20.364 16.727 34.909 15.273 14.545 35.636 14.545 109.091 0 327.273 0 21.091 0 36.364-14.545 15.273-14.545 16-34.909 8.727-167.273 26.182-502.545 0.727-18.909 3.636-74.909 0-3.636 5.091-3.636 4.364 0 13.818 0 12.364-2.182 12.364-14.545 0-6.545-5.091-10.909-4.364-4.364-10.182-4.364zM408.89 189.816q0-2.182 0-9.455 0-9.455 6.545-16 6.545-6.545 16-6.545 49.455 0 148.364 0 9.455 0 16 6.545 6.545 6.545 6.545 16 0 2.909 0 9.455 0 4.364 0 17.455 0 5.091-5.091 5.091-5.818 0-17.455 0-37.091 0-148.364 0-4.364 0-17.455 0-5.091 0-5.091-5.091 0-5.818 0-17.455zM717.981 322.907q-6.545 124.364-26.182 498.909-0.727 9.455-6.545 15.273-6.545 5.818-16 5.818-109.091 0-327.273 0-9.455 0-16-5.818-5.818-5.818-6.545-15.273-8.727-165.091-26.182-495.273-0.727-19.636-3.636-79.273 0-2.909 0.727-4.364 1.455-0.727 4.364-0.727 141.091 0 423.273 0 2.182 0 3.636 0.727 1.455 1.455 1.455 4.364-1.455 25.455-5.091 75.636zM491.072 311.998q7.273 0 29.091 0 0 115.636 0 462.545-7.273 0-29.091 0 0-115.636 0-462.545zM399.436 775.998q-5.818-115.636-24-461.818 7.273-0.727 29.818-2.182 5.818 115.636 24 462.545-7.273 0-29.818 1.455zM611.799 775.998q-7.273 0-29.818-1.455 5.818-115.636 24-461.818 7.273 0.727 29.818 1.455-5.818 115.636-24 461.818z"
  })), /* @__PURE__ */ React.createElement("symbol", {
    id: "camera",
    viewBox: "0 0 1024 1024"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M860.8 294l-135 0-80.8-81.6c0 0-0.4-0.4-0.6-0.4l-0.4-0.4 0 0c-12-12-28.2-19.6-46.6-19.6l-168 0c-19.6 0-37 8.4-49.2 21.8l0 0.2-79 80L163.2 294C126 294 96 323.2 96 360.4l0 404.2c0 37.2 30 67.4 67.2 67.4l697.6 0c37 0 67.2-30.2 67.2-67.4L928 360.4C928 323.2 897.8 294 860.8 294zM512 731c-101.8 0-184.8-83.2-184.8-185.2 0-102.2 83-185.2 184.8-185.2 102 0 184.8 83 184.8 185.2C696.8 647.8 614 731 512 731zM848.2 401c-15.4 0-28-12.6-28-28.2s12.6-28.2 28-28.2c15.4 0 28 12.6 28 28.2S863.6 401 848.2 401z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M512 405.8c-77.2 0-139.6 62.6-139.6 140 0 77.2 62.4 140 139.6 140 77 0 139.6-62.6 139.6-140C651.6 468.4 589 405.8 512 405.8z"
  })), /* @__PURE__ */ React.createElement("symbol", {
    id: "stop",
    viewBox: "0 0 1024 1024"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128l-265.344 263.936-263.04-263.84C236.64 191.584 216.384 191.52 203.84 204 191.328 216.48 191.296 236.736 203.776 249.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248 6.24 6.272 14.464 9.44 22.688 9.44 8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.592-9.344 12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z"
  })), /* @__PURE__ */ React.createElement("symbol", {
    id: "favorites",
    viewBox: "0 0 1024 1024"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M539.569231 61.046154l90.584615 295.384615c3.938462 11.815385 15.753846 17.723077 27.569231 17.723077h295.384615c29.538462 0 41.353846 39.384615 17.723077 57.107692l-240.246154 177.23077c-9.846154 7.876923-13.784615 21.661538-9.846153 33.476923L834.953846 945.230769c7.876923 27.569231-21.661538 51.2-45.292308 33.476923L531.692308 785.723077c-9.846154-7.876923-23.630769-7.876923-35.446154 0L236.307692 978.707692c-23.630769 17.723077-55.138462-5.907692-45.292307-33.476923l110.276923-303.261538c3.938462-11.815385 0-25.6-9.846154-33.476923l-240.246154-177.23077c-23.630769-17.723077-9.846154-57.107692 17.723077-57.107692h295.384615c13.784615 0 23.630769-3.938462 27.569231-17.723077L484.430769 59.076923c7.876923-27.569231 47.261538-25.6 55.138462 1.969231z"
  })), /* @__PURE__ */ React.createElement("symbol", {
    id: "contacts",
    viewBox: "0 0 1024 1024"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M517.87 176.23c-198.82 0-360 161.18-360 360s161.18 360 360 360 360-161.18 360-360-161.18-360-360-360z m209.3 569.31c-27.2 27.21-58.87 48.56-94.11 63.46-36.45 15.42-75.21 23.23-115.2 23.23s-78.75-7.82-115.2-23.23c-35.24-14.91-66.9-36.26-94.11-63.46-27.21-27.2-48.56-58.87-63.46-94.11-15.42-36.45-23.23-75.21-23.23-115.2 0-39.99 7.82-78.75 23.23-115.2 14.91-35.24 36.26-66.9 63.46-94.11 27.2-27.21 58.87-48.56 94.11-63.46 36.45-15.42 75.21-23.23 115.2-23.23s78.75 7.82 115.2 23.23c35.24 14.91 66.9 36.26 94.11 63.46 27.21 27.2 48.56 58.87 63.46 94.11 15.42 36.45 23.23 75.21 23.23 115.2 0 39.99-7.82 78.75-23.23 115.2-14.9 35.24-36.25 66.9-63.46 94.11z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M517.87 440.23m-120 0a120 120 0 1 0 240 0 120 120 0 1 0-240 0Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M517.87 176.23c-198.82 0-360 161.18-360 360 0 84.74 29.28 162.63 78.27 224.13 65.96 82.8 167.64 135.87 281.73 135.87s215.77-53.07 281.73-135.87c48.99-61.5 78.27-139.39 78.27-224.13 0-198.82-161.18-360-360-360z m272.76 475.2a294.912 294.912 0 0 1-29.28 53.19c-58.69-68.77-145.99-112.38-243.49-112.38s-184.79 43.61-243.49 112.38a294.573 294.573 0 0 1-29.28-53.19c-15.42-36.45-23.23-75.21-23.23-115.2 0-39.99 7.82-78.75 23.23-115.2 14.91-35.24 36.26-66.9 63.46-94.11 27.2-27.21 58.87-48.56 94.11-63.46 36.45-15.42 75.21-23.23 115.2-23.23s78.75 7.82 115.2 23.23c35.24 14.91 66.9 36.26 94.11 63.46 27.21 27.2 48.56 58.87 63.46 94.11 15.42 36.45 23.23 75.21 23.23 115.2 0.01 39.99-7.81 78.75-23.23 115.2z"
  })), /* @__PURE__ */ React.createElement("symbol", {
    id: "more",
    viewBox: "0 0 1024 1024"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M227.14123 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C321.728492 456.087573 279.288914 413.647995 227.14123 413.647995z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M510.903016 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C605.490278 456.087573 563.051723 413.647995 510.903016 413.647995z",
    "p-id": "37137"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M794.665825 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C889.253086 456.087573 846.813508 413.647995 794.665825 413.647995z"
  })));
};
const icon$1 = "_icon_1agz0_1";
var styles$b = {
  icon: icon$1
};
const Icon = ({
  name,
  style,
  className
}) => {
  return /* @__PURE__ */ React.createElement("svg", {
    style,
    className: [styles$b.icon, className].join(" ")
  }, /* @__PURE__ */ React.createElement("use", {
    xlinkHref: `#${name}`
  }));
};
const large = "_large_1ddte_16";
const translucent = "_translucent_1ddte_21";
var styles$a = {
  "navigation-bar": "_navigation-bar_1ddte_1",
  "top-item": "_top-item_1ddte_7",
  large,
  translucent,
  "back-item": "_back-item_1ddte_24",
  "right-bar-item": "_right-bar-item_1ddte_24"
};
const NavigationBar = ({
  topItem,
  backItem,
  rightBarItem,
  prefersLargeTitles = false,
  isTranslucent = false
}) => {
  return /* @__PURE__ */ React.createElement("header", {
    className: [styles$a["navigation-bar"], prefersLargeTitles ? styles$a.large : "", isTranslucent ? styles$a.translucent : ""].join(" ")
  }, topItem && /* @__PURE__ */ React.createElement("h1", {
    className: styles$a["top-item"]
  }, topItem), /* @__PURE__ */ React.createElement("div", {
    className: styles$a["back-item"]
  }, backItem), /* @__PURE__ */ React.createElement("div", {
    className: styles$a["right-bar-item"]
  }, rightBarItem));
};
const icon = "_icon_19993_15";
var styles$9 = {
  "search-bar": "_search-bar_19993_1",
  "text-field": "_text-field_19993_8",
  icon,
  "cancel-button": "_cancel-button_19993_21"
};
const button$3 = "_button_1qxzs_1";
var styles$8 = {
  button: button$3
};
const Button = ({
  title: title2,
  onClick,
  style,
  className,
  children
}) => {
  return /* @__PURE__ */ React.createElement("button", {
    type: "button",
    style,
    className: [styles$8.button, className].join(" "),
    onClick
  }, children, title2);
};
const input$1 = "_input_17700_6";
const left = "_left_17700_19";
const center = "_center_17700_22";
const right$1 = "_right_17700_25";
const clearable = "_clearable_17700_28";
var styles$7 = {
  "text-field": "_text-field_17700_1",
  input: input$1,
  left,
  center,
  right: right$1,
  clearable
};
const TextField = ({
  value,
  onChange,
  maxlength = 32,
  secure = false,
  placeholder,
  onFocus,
  onBlur,
  style,
  className,
  clearable: clearable2 = false,
  align = "left",
  icon: icon2
}) => {
  const clear = () => {
    onChange("");
  };
  return /* @__PURE__ */ React.createElement("div", {
    style,
    className: [styles$7["text-field"], styles$7[align], className].join(" ")
  }, icon2, /* @__PURE__ */ React.createElement("input", {
    value,
    onChange: (e) => onChange(e.target.value),
    type: secure ? "password" : "text",
    placeholder,
    maxLength: maxlength,
    onFocus,
    onBlur,
    className: styles$7.input
  }), clearable2 && value !== "" && /* @__PURE__ */ React.createElement(Button, {
    className: styles$7.clearable,
    onClick: clear
  }));
};
const input = "_input_o0ck9_12";
const handler = "_handler_o0ck9_21";
const on = "_on_o0ck9_46";
var styles$6 = {
  "switch": "_switch_o0ck9_1",
  input,
  handler,
  on
};
const Switch = ({
  value,
  onChange
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: [styles$6.switch, value ? styles$6.on : ""].join(" ")
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles$6.handler
  }), /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    checked: value,
    onChange: (e) => onChange(e.target.checked),
    className: styles$6.input
  }));
};
const SearchBar = ({
  value,
  onChange,
  placeholder = "Search",
  maxlength = 32,
  onFocus,
  onBlur,
  clearable: clearable2 = false,
  cancelable = false,
  onCancel
}) => {
  return /* @__PURE__ */ React.createElement("section", {
    className: styles$9["search-bar"]
  }, /* @__PURE__ */ React.createElement(TextField, {
    value,
    onChange,
    maxlength,
    placeholder,
    onFocus,
    onBlur,
    clearable: clearable2,
    className: styles$9["text-field"],
    icon: /* @__PURE__ */ React.createElement(Icon, {
      name: "search",
      className: styles$9.icon
    })
  }), cancelable && /* @__PURE__ */ React.createElement(Button, {
    className: styles$9["cancel-button"],
    title: "Cancel",
    onClick: onCancel
  }));
};
const button$2 = "_button_cvov8_17";
const active = "_active_cvov8_27";
var styles$5 = {
  "tab-bar": "_tab-bar_cvov8_1",
  button: button$2,
  active
};
const TabBar = ({
  tabs
}) => {
  const [current, setCurrent] = React.useState(0);
  const click = (e, index, onClick) => {
    setCurrent(index);
    onClick == null ? void 0 : onClick(e);
  };
  return /* @__PURE__ */ React.createElement("nav", {
    className: styles$5["tab-bar"]
  }, tabs.map((tab, index) => /* @__PURE__ */ React.createElement(Button, {
    key: index,
    title: tab.title,
    onClick: (e) => click(e, index, tab.onClick),
    className: [styles$5.button, index === current ? styles$5.active : ""].join(" ")
  }, tab.image)));
};
const wrapper$2 = "_wrapper_rwtty_34";
const slide = "_slide_rwtty_1";
const button$1 = "_button_rwtty_43";
var styles$4 = {
  "action-sheet": "_action-sheet_rwtty_17",
  "fade-in": "_fade-in_rwtty_1",
  wrapper: wrapper$2,
  slide,
  button: button$1,
  "cancel-button": "_cancel-button_rwtty_49"
};
const ActionSheet = ({
  visible,
  setVisible,
  buttons: buttons2
}) => {
  const click = (e, onClick) => {
    setVisible(false);
    onClick && onClick(e);
  };
  return createPortal(/* @__PURE__ */ React.createElement("section", {
    className: styles$4["action-sheet"],
    style: visible ? {} : { display: "none" }
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles$4.wrapper
  }, buttons2.map((button2, index) => /* @__PURE__ */ React.createElement(Button, {
    key: index,
    onClick: (e) => click(e, button2.onClick),
    title: button2.title,
    className: styles$4.button
  })), /* @__PURE__ */ React.createElement(Button, {
    onClick: click,
    title: "Cancel",
    className: [styles$4.button, styles$4["cancel-button"]].join(" ")
  }))), document.body);
};
const alert = "_alert_3ch7t_19";
const wrapper$1 = "_wrapper_3ch7t_39";
const title$1 = "_title_3ch7t_49";
const message = "_message_3ch7t_54";
const buttons = "_buttons_3ch7t_60";
const button = "_button_3ch7t_60";
var styles$3 = {
  alert,
  "fade-in": "_fade-in_3ch7t_1",
  wrapper: wrapper$1,
  "pop-up": "_pop-up_3ch7t_1",
  title: title$1,
  message,
  buttons,
  button
};
const Alert = ({
  visible,
  setVisible,
  title: title2,
  message: message2 = "",
  buttons: buttons2 = [
    {
      title: "OK"
    }
  ]
}) => {
  const click = (e, onClick) => {
    setVisible(false);
    onClick && onClick(e);
  };
  return createPortal(/* @__PURE__ */ React.createElement("section", {
    className: styles$3.alert,
    style: visible ? {} : { display: "none" }
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles$3.wrapper
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles$3.title
  }, title2), message2 !== "" && /* @__PURE__ */ React.createElement("div", {
    className: styles$3.message
  }, message2), /* @__PURE__ */ React.createElement("div", {
    className: styles$3.buttons
  }, buttons2.map((button2, index) => /* @__PURE__ */ React.createElement(Button, {
    key: index,
    onClick: (e) => click(e, button2.onClick),
    title: button2.title,
    className: styles$3.button
  }))))), document.body);
};
var styles$2 = {
  "web-view": "_web-view_xale5_1"
};
const WebView = ({
  src
}) => {
  return /* @__PURE__ */ React.createElement("iframe", {
    className: styles$2["web-view"],
    src
  });
};
const table = "_table_1k72g_1";
const header = "_header_1k72g_1";
const footer = "_footer_1k72g_1";
const inset = "_inset_1k72g_29";
var styles$1 = {
  table,
  header,
  footer,
  "table-rows": "_table-rows_1k72g_26",
  inset
};
const Table = ({
  header: header2 = "",
  footer: footer2 = "",
  inset: inset2 = false,
  children
}) => {
  return /* @__PURE__ */ React.createElement("section", {
    className: [styles$1.table, inset2 ? styles$1.inset : ""].join(" ")
  }, header2 !== "" && /* @__PURE__ */ React.createElement("div", {
    className: styles$1.header
  }, header2), children && /* @__PURE__ */ React.createElement("ul", {
    className: styles$1["table-rows"]
  }, children), footer2 !== "" && /* @__PURE__ */ React.createElement("div", {
    className: styles$1.footer
  }, footer2));
};
const image = "_image_5kvn0_7";
const wrapper = "_wrapper_5kvn0_16";
const title = "_title_5kvn0_25";
const subtitle = "_subtitle_5kvn0_34";
const basic = "_basic_5kvn0_68";
const right = "_right_5kvn0_81";
const clickable = "_clickable_5kvn0_88";
const link = "_link_5kvn0_94";
var styles = {
  "table-row": "_table-row_5kvn0_1",
  image,
  wrapper,
  title,
  subtitle,
  basic,
  right,
  clickable,
  link
};
const TableRow = ({
  image: image2 = "",
  title: title2,
  subtitle: subtitle2,
  to = "",
  onClick,
  style = "basic"
}) => {
  const navigate = useNavigate();
  const click = (e) => {
    if (to !== "") {
      navigate(to);
    } else {
      onClick && onClick(e);
    }
  };
  return /* @__PURE__ */ React.createElement("li", {
    onClick: click,
    className: [styles["table-row"], styles[style], to !== "" || onClick ? styles.clickable : "", to !== "" ? styles.link : ""].join(" ")
  }, image2 !== "" && /* @__PURE__ */ React.createElement("div", {
    className: styles.image,
    style: { backgroundImage: `url(${image2})` }
  }), /* @__PURE__ */ React.createElement("div", {
    className: styles.wrapper
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.title
  }, title2), subtitle2 && /* @__PURE__ */ React.createElement("div", {
    className: styles.subtitle
  }, subtitle2)));
};
export { ActionSheet, Alert, Button, Icon, Icons, NavigationBar, Pane, SearchBar, Switch, TabBar, Table, TableRow, TextField, View, WebView };
