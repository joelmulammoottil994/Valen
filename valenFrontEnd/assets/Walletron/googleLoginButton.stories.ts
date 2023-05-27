import {googleLoginButton as Component} from './googleLoginButton';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'googleLoginButton',
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

export const Variant3: Story = {
  args: {
    property$1: 'Variant3',
  },
};

export default meta;
