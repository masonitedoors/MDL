import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { withState } from "@dump247/storybook-state";
import Tabs from "./react";

storiesOf("Internal/Nav/Tabs", module)
  .addDecorator(withKnobs)
  .add(
    "Default",
    withState({ activeTab: 1 })(({ store }) => {
      const tabs = [
        {
          id: "0",
          children: <strong>Using JSX</strong>
        },
        {
          id: "1",
          children: "Lorem Ipsum"
        }
      ];
      return (
        <Tabs
          tabs={tabs}
          activeTab={store.state.activeTab}
          onTabClick={id => store.set({ activeTab: id })}
        />
      );
    })
  );
