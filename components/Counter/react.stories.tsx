import React from "react";
import { Story, Meta } from "@storybook/react";
import Counter from "./react";

const Template = (args) => <Counter {...args} />;

export default {
  title: "Counter",
  component: Counter,
} as Meta;

export const Primary = Template.bind({});

Primary.args = {
  value: 42,
};
