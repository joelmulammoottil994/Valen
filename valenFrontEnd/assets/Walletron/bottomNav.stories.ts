import {bottomNav as Component} from './bottomNav';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'bottomNav',
  component: Component,
};

export const Home: Story = {
  args: {
    property$1: 'Home',
  },
};

export const Group: Story = {
  args: {
    property$1: 'Group',
  },
};

export const Personal: Story = {
  args: {
    property$1: 'Personal',
  },
};

export default meta;
