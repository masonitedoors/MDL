import React from "react";
import { storiesOf } from "@storybook/react";
import AnimatedMasoniteLogo from "./index.js";

const stories = storiesOf("AnimatedMasoniteLogo", module);

stories.add("Default", () => <AnimatedMasoniteLogo />);
