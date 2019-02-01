import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { withState } from "@dump247/storybook-state";
import TrendCard from "./react";

storiesOf("Cards/TrendCard", module)
  .addDecorator(withKnobs)
  .add("Default", () => {
    return (
      <TrendCard
        title="Lorem Ipsum"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        image={null}
      />
    );
  });
