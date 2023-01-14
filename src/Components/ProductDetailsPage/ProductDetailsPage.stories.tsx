import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductDetailsPage from './ProductDetailsPage';

export default {
  title: 'Components/ProductDetailsPage',
  component: ProductDetailsPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ProductDetailsPage>;

const Template: ComponentStory<typeof ProductDetailsPage> = (args) => <ProductDetailsPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  // any args add here..
};

