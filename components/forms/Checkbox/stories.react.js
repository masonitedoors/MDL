import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { withState } from "@dump247/storybook-state";
import Checkbox from "./react";

storiesOf("Internal/Forms/Checkbox", module)
  .addDecorator(withKnobs)
  .add("checkable from parent state only", () => {
    const checked = boolean("Checked", true);
    return <Checkbox checked={checked} stateful={false} />;
  })
  .add(
    "checkable with a click event",
    withState({ checked: false })(({ store }) => (
      <Checkbox
        checked={store.state.checked}
        onChange={() => store.set({ checked: !store.state.checked })}
      />
    ))
  )
  .add("maintains state and can be updated by props", () => {
    const checked = boolean("Checked", true);
    return <Checkbox checked={checked} />;
  })
  .add("checkable without props", () => <Checkbox />);
