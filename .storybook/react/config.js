import { configure } from "@storybook/react";

const req = require.context(
  "./../../components",
  true,
  /\.stories\.react\.js$/
);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
