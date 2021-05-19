import React from "react";
import { Story, Meta } from "@storybook/react";
import FilterableSearch from "./react";

const Template = (args) => <FilterableSearch {...args} />;

export default {
  title: "FilterableSearch",
  component: FilterableSearch,
} as Meta;

export const Primary = Template.bind({});

Primary.args = {
  children: "Lorem Button",
  filterChoices: [
    {
      label: "Filter 1",
      value: "FILTER1",
      checked: true,
    },
    {
      label: "Filter 2",
      value: "FILTER2",
      checked: false,
    },
  ],
  onFilterChange: () => {},
  placeholder: "",
  value: "",
};
