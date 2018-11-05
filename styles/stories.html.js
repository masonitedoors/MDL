import { storiesOf } from "@storybook/html";
import "./colors.css";
import colors from "./colors";

console.log(colors);

storiesOf("Colors", module).add(
  "main",
  () => `
        <div style="height: 30px; width: 30px" class="color-m-primary-green"></div>
    `
);
