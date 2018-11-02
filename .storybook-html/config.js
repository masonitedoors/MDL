import { configure } from "@storybook/html";

const req = require.context("./../components", true, /\.stories\.html\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
