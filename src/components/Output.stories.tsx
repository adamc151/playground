// Button.stories.ts | Button.stories.tsx

import React from "react";

import { Story, Meta } from "@storybook/react";

import Output from "./Output";

export default {
  component: Output,
  title: "Components/Output",
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => <Output {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Button",
};
