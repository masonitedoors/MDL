import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import Button from "./react";

storiesOf("Internal/Forms/Button/Button", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    const variant = select("Variant", {
      Light: "light",
      Base: "",
      Dark: "dark"
    });
    return <Button variant={variant}>Lorem Button</Button>;
  });
