import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SidebarPage from './SidebarPage';

export default {
  title: 'Components/SidebarPage',
  component: SidebarPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SidebarPage>;

const Template: ComponentStory<typeof SidebarPage> = (args) => <SidebarPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  // any args add here..
};

