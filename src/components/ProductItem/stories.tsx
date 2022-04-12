import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ProductItem } from ".";

export default {
  title: 'ProductItem',
  component: ProductItem,
  argTypes: {
    name: { type: 'string' },
    description: { type: 'string' },
  },
  args: {
    name: 'Test name sua mae',
    description: 'Test description',
  }
} as ComponentMeta<typeof ProductItem>;

export const Basic: ComponentStory<typeof ProductItem> = args => <ProductItem {...args} />
