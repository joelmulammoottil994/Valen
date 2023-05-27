import {deliveryButton as Component} from './deliveryButton';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'deliveryButton',
  component: Component,
};

export const On: Story = {
  args: {
    property$1: 'On',
  },
};

export const off: Story = {
  args: {
    property$1: 'off',
  },
};

export default meta;
