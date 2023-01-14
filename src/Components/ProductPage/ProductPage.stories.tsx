import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductPage from './ProductPage';

export default {
  title: 'Components/ProductPage',
  component: ProductPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ProductPage>;

const Template: ComponentStory<typeof ProductPage> = (args) => <ProductPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  // any args add here..
};

