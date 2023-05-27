import {loading as Component} from './loading';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'loading',
  component: Component,
};

export const $1: Story = {
  args: {
    property$1: '$1',
  },
};

export const Variant2: Story = {
  args: {
    property$1: 'Variant2',
  },
};

export default meta;
