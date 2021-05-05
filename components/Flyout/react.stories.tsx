import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { React as Button } from "../../components/Button";
import Flyout from "./react";

const Template = (args) => {
  const [show, setShow] = useState(false);
  const [messageShowing, setMessageShowing] = useState(false);

  const onClose = () => {
    setShow(false);
    setMessageShowing(true);
  };

  return (
    <>
      {show && (
        <Flyout {...args} onClose={onClose}>
          <div
            style={{
              border: "solid 1px green",
              width: 100,
              marginLeft: 100,
              marginTop: 100,
            }}
          >
            {"{children}"} show below the heading.
          </div>
        </Flyout>
      )}
      <label>
        Width:
        <input
          type="number"
          value={args.width}
          onChange={({ target }) => setWidth(+target.value)}
        />
      </label>
      <div>
        <Button onClick={() => setShow(true)}>Show Flyout</Button>
      </div>
      {messageShowing && (
        <p>
          The onClose just ran. The caller is responsible for actually closing.
        </p>
      )}
    </>
  );
};

export default {
  title: "Flyout",
  component: Flyout,
} as Meta;

export const Primary = Template.bind({});

Primary.args = {
  children: "Lorem ipsum",
  heading: "Lorem Ipsum Heading",
  moreHeading: "moreHeading",
  width: 477,
};
