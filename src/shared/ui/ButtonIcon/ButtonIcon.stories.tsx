import React from 'react';
import { ComponentStory } from '@storybook/react';
import { type ButtonIconProps, ButtonIcon } from "./ButtonIcon";

export default {
    title: 'shared/ButtonIcon',
    component: ButtonIcon
}

const Template: ComponentStory<typeof ButtonIcon> = (args: ButtonIconProps) => <ButtonIcon {...args} />

export const Default = Template.bind({})

Default.args = {
    icon: 'placeholder'
}
