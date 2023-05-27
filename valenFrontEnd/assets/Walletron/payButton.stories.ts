import {payButton as Component} from './payButton';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'payButton',
  component: Component,
};

export const main: Story = {
  args: {
    property$1: 'main',
  },
};

export const criptoMain: Story = {
  args: {
    property$1: 'criptoMain',
  },
};

export const moneyMain: Story = {
  args: {
    property$1: 'moneyMain',
  },
};

export default meta;
