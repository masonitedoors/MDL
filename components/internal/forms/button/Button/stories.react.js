import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./react";

storiesOf("Forms/Button/Button", module).add("default", () => (
  <Button>Lorem Button</Button>
));
