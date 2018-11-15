import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { withState } from "@dump247/storybook-state";
import Checkbox from "./react";

storiesOf("Checkbox", module)
  .addDecorator(withKnobs)
  .add("checked from parent state", () => {
    const checked = boolean("Checked", true);
    return <Checkbox checked={checked} />;
  })
  .add(
    "checked by its click event",
    withState({ checked: false })(({ store }) => {
      console.log("store", store);
      return (
        <Checkbox
          checked={store.state.checked}
          onChange={() => store.set({ checked: !store.state.checked })}
        />
      );
    })
  );
