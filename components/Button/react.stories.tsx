import React from "react";
import { Story, Meta } from "@storybook/react";
import Button from "./react";
import DocPage from './DocPage'

const Template: Story = (args: any) => <Button {...args} />;

export default {
  title: "Button",
  component: Button,
  subcomponents: { Button },
} as Meta;

export const Primary = Template.bind({});

Primary.args = {
  children: "Lorem Button",
};

Primary.parameters = {
  docs: {
    page: DocPage,
  },
};
