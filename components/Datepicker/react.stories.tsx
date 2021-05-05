import React from "react";
import { Story, Meta } from "@storybook/react";
import Datepicker from "./react";

const Template = (args) => <Datepicker {...args} />;

export default {
  title: "Datepicker",
  component: Datepicker,
} as Meta;

export const Primary = Template.bind({});

Primary.args = {
  onChange: null,
  placeholder: "Effective Date",
  selected: "",
};
