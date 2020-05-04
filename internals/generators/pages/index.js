/**
 * Component Generator
 */

/* eslint strict: ["off"] */

"use strict";

const componentExists = require("../utils/componentExists");

module.exports = {
  description: "Add an unconnected component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "AboutMe",
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? "A component or container with this name already exists"
            : true;
        }

        return "The name is required";
      },
    },
    {
      type: "confirm",
      name: "memo",
      default: false,
      message: "Do you want to wrap your component in React.memo?",
    },
    {
      type: "confirm",
      name: "wantCreateSlice",
      default: true,
      message: "Do you want createSlice?",
    },
    {
      type: "confirm",
      name: "wantStyle",
      default: true,
      message: "Do you want styled-components?",
    },
  ],
  actions: (data) => {
    // Generate index.js
    const actions = [
      {
        type: "add",
        path: "../../src/pages/{{properCase name}}/index.js",
        templateFile: "./pages/index.js.hbs",
        abortOnFail: true,
      },
    ];

    // If the user wants createSlice
    if (data.wantCreateSlice) {
      actions.push({
        type: "add",
        path: "../../src/pages/{{properCase name}}/slice.js",
        templateFile: "./pages/slice.js.hbs",
        abortOnFail: true,
      });
    }

    // If the user wants styled-components
    if (data.wantStyle) {
      actions.push({
        type: "add",
        path: "../../src/pages/{{properCase name}}/styles.js",
        templateFile: "./pages/styles.js.hbs",
        abortOnFail: true,
      });
    }

    actions.push({
      type: "prettify",
      path: "/pages/",
    });

    return actions;
  },
};
