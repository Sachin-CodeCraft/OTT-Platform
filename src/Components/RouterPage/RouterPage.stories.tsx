import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RouterPage from './RouterPage';

export default {
  title: 'Components/RouterPage',
  component: RouterPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof RouterPage>;

const Template: ComponentStory<typeof RouterPage> = (args) => <RouterPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  // any args add here..
};

