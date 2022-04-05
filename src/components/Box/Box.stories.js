import Box from './Box';

export default {
  title: 'Layout/Box',
  component: Box,
};

const Template = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: '',
  children: 'Box text',
};
