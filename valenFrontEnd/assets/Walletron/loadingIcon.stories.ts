import {loadingIcon as Component} from './loadingIcon';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'loadingIcon',
  component: Component,
};

export const Default: Story = {
  args: {
    property$1: 'Default',
  },
};

export const Variant3: Story = {
  args: {
    property$1: 'Variant3',
  },
};

export default meta;
