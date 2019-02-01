import { storiesOf } from "@storybook/html";
import "./style.module.scss";
import { BaseButton, LightButton, DarkButton } from "./html";

storiesOf("Internal/Forms/Button/Button", module)
  .add("base", () => BaseButton)
  .add("light", () => LightButton)
  .add("dark", () => DarkButton);
