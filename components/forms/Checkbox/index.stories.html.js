import { storiesOf } from "@storybook/html";
import { action } from "@storybook/addon-actions";
import html from "./index.html";

storiesOf("Checkbox", module).add("default", () => html);
