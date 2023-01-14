import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SignPage from './SignPage';

export default {
  title: 'Components/SignPage',
  component: SignPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SignPage>;

const Template: ComponentStory<typeof SignPage> = (args) => <SignPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  // any args add here..
};

