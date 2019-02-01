import { storiesOf } from "@storybook/html";
import { action } from "@storybook/addon-actions";
import html from "./html.html";
import style from "./style.module";

storiesOf("Forms/Checkbox", module).add("default", () => html);
