import React, { FC } from "react";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";
import Counter from "./react";

export default {
  title: "Counter",
  component: Counter,
  decorators: [
    withKnobs,
    (Story: FC) => (
      <div style={{ margin: "2rem" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Counter {...args} />;

export const Primary = Template.bind({});
