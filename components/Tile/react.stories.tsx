import React from "react";
import { Story, Meta } from "@storybook/react";
import Tile from "./react";

const Template = (args) => <Tile {...args} />;

export default {
  title: "Tile",
  component: Tile,
} as Meta;

export const Primary = Template.bind({});

Primary.args = {
  children: "Lorem Button",
  label: "Tile Component",
  imageUrl:
    "https://embed.widencdn.net/img/masonite/gsozalqsz9/exact/Shop-by-Panel.png",
  selected: false,
  uppercase: false,
};
