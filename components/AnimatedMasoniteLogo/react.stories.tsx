import React from "react";
import { Story, Meta } from "@storybook/react";
import AnimatedMasoniteLogo from './index'

const Template: Story = (args: any) => <AnimatedMasoniteLogo {...args} />

export default {
  title: "Button",
  component: AnimatedMasoniteLogo
} as Meta;

export const Primary = Template.bind({});

Primary.parameters = {
  docs: {
    page: DocPage,
  },
};
