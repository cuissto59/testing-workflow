import {Avatar} from "./Avatar";


export default {
    title: 'Avatar',
    component: Avatar,
    argsTypes: {
        size: {
            defaultValue: 'l',
            description: 'size desc',
            options: ['xs', 'sm', 'base', 'l', 'xl'],
            control: {type: 'select'},

        },
        src: {
            description: 'size desc',
            control: {type: 'text'}

        }
    }
}

const Template = (args) => <Avatar {...args}/>

export const VerySmall = Template.bind({})

VerySmall.args = {
    size: 'xs',
    src: 'https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png',
    alt: 'avatar'
}
export const Small = Template.bind({})
Small.args = {
    size: 'sm',
    src: 'https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png',
    alt: 'avatar'
}
export const Base = Template.bind({})

Base.args = {
    size: 'base',
    src: 'https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png',
    alt: 'avatar'
}
export const Large = Template.bind({})

Large.args = {
    size: 'l',
    src: 'https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png',
    alt: 'avatar'
}
export const VeryLarge = Template.bind({})
VeryLarge.args = {
    size: 'xl',
    src: 'https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png',
    alt: 'avatar'
}
