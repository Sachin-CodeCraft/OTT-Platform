import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HomePage from './HomePage';

export default {
  title: 'Components/HomePage',
  component: HomePage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => <HomePage />;

export const Default = Template.bind({});
Default.args = {
  // any args add here..
};
