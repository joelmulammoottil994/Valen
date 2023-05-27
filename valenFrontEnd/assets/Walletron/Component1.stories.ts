import {Component1 as Component} from './Component1';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Component1',
  component: Component,
};

export const Component1: Story = {
  ,
};

export default meta;
