import { configure } from "@storybook/html";

import "styles/global.scss";

const req = require.context("./../../components", true, /stories\.html\.js$/);

function loadStories() {
  require("./../../styles/stories.html.js");
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
