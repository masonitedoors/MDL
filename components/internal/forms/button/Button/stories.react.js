import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import Button from "./react";

storiesOf("Internal/Forms/Button/Button", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    const variant = select(
      "Variant",
      {
        Light: "light",
        Base: "",
        Dark: "dark"
      },
      "light"
    );
    const uppercase = boolean("Uppercase", false);
    return (
      <Button variant={variant} uppercase={uppercase}>
        Lorem Button
      </Button>
    );
  });
