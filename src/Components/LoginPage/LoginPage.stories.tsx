import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoginPage from './LoginPage';

export default {
  title: 'Components/LoginPage',
  component: LoginPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = (args) => <LoginPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  // any args add here..
};

