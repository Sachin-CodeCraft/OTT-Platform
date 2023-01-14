import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchInputPage from './SearchInputPage';

export default {
  title: 'Components/SearchInputPage',
  component: SearchInputPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SearchInputPage>;

const Template: ComponentStory<typeof SearchInputPage> = (args) => <SearchInputPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  // any args add here..
};

