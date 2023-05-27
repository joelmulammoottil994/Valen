import {Nav as Component} from './Nav';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Nav',
  component: Component,
};

export const cript: Story = {
  args: {
    property$1: 'cript',
  },
};

export const coin: Story = {
  args: {
    property$1: 'coin',
  },
};

export const searchResCheck: Story = {
  args: {
    property$1: 'searchResCheck',
  },
};

export const searchRes: Story = {
  args: {
    property$1: 'searchRes',
  },
};

export default meta;
