import {Dark as Component} from './Dark';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Dark',
  component: Component,
};

export const Rectangle7: Story = {
  args: {
    property$1: 'Rectangle7',
  },
};

export const Rectangle6: Story = {
  args: {
    property$1: 'Rectangle6',
  },
};

export const colourPallet: Story = {
  args: {
    property$1: 'colourPallet',
  },
};

export default meta;
