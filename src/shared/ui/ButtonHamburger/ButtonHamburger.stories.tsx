import React from 'react';
import { ComponentStory } from '@storybook/react';
import { ButtonHamburgerProps, ButtonHamburger } from "./ButtonHamburger";

export default {
    title: 'shared/ButtonHamburger',
    component: ButtonHamburger
}

const Template: ComponentStory<typeof ButtonHamburger> = (args: ButtonHamburgerProps) => <ButtonHamburger {...args} />

export const Default = Template.bind({})

Default.args = {

}
