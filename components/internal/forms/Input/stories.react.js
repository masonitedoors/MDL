import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import { withState } from "@dump247/storybook-state";
import Input from "./react";

storiesOf("Internal/Forms/Input", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    const variant = select(
      "Variant",
      { Light: "light", Dark: "dark" },
      "light"
    );
    const error = boolean("Error State", false);
    return <Input variant={variant} error={error} />;
  });
