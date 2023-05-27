import {SearchRange as Component} from './SearchRange';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'SearchRange',
  component: Component,
};

export const Maximum: Story = {
  args: {
    property$1: 'Maximum',
  },
};

export const Average: Story = {
  args: {
    property$1: 'Average',
  },
};

export const Minimum: Story = {
  args: {
    property$1: 'Minimum',
  },
};

export default meta;
