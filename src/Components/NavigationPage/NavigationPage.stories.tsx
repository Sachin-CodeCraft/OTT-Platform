import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavigationPage from './NavigationPage';

export default {
  title: 'Components/NavigationPage',
  component: NavigationPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof NavigationPage>;

const Template: ComponentStory<typeof NavigationPage> = (args) => (
  <NavigationPage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // any args add here..
};
