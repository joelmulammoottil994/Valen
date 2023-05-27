import {add as Component} from './add';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'add',
  component: Component,
};

export const Default: Story = {
  args: {
    property$1: 'Default',
  },
};

export const Variant2: Story = {
  args: {
    property$1: 'Variant2',
  },
};

export default meta;
