import { storiesOf } from "@storybook/html";
import html from "./html";
import "./style.module.scss";

const { BaseButton, LightButton, DarkButton } = html;

storiesOf("Forms/Button/Button", module)
  .add("base", () => BaseButton)
  .add("light", () => LightButton)
  .add("dark", () => DarkButton);
