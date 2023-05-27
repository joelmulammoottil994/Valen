import {mod as Component} from './mod';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'mod',
  component: Component,
};

export const off: Story = {
  args: {
    property$1: 'off',
  },
};

export const on: Story = {
  args: {
    property$1: 'on',
  },
};

export default meta;
