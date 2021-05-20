import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { mPhone } from "@masonite/svg-icons";
import TextField from "./react";

const Template = (args) => {
  const [value, setValue] = useState('');

  return (
    <TextField {...args} onChange={(value) => setValue(value)} value={value} />
  );
};

export default {
  title: "TextField",
  component: TextField,
} as Meta;

export const Primary = Template.bind({});

Primary.args = {
  align: "left",
  disabled: false,
  error: false,
  helper: "",
  label: "Phone",
  labelAlwaysAbove: false,
  placeholder: "",
  readonly: false,
  removeMargin: false,
  trailingIcon: mPhone,
  variant: "primary",
};
