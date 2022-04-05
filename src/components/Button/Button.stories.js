import Button from './Button';
import { MailIcon } from '../Icons/outline';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const defaultButton = Template.bind({});
defaultButton.args = {
  type: 'primary',
  variant: 'solid',
  children: 'Text Button',
  size: 'base',
};
export const ButtonWithRightIcon = Template.bind({});
ButtonWithRightIcon.args = {
  type: 'primary',
  variant: 'solid',
  children: 'Text Button',
  size: 'base',
  RightIcon: <MailIcon />,
};
export const ButtonWithLeftIcon = Template.bind({});
ButtonWithLeftIcon.args = {
  type: 'primary',
  variant: 'solid',
  children: 'Text Button',
  size: 'base',
  LeftIcon: <MailIcon />,
};
