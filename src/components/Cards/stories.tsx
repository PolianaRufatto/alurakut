import { Story, Meta } from '@storybook/react/types-6-0';
import { withKnobs, text } from '@storybook/addon-knobs';
import Card from '.';

export default {
  title: 'Card',
  component: Card,
  decorators: [withKnobs]
} as Meta;

export const Basic: Story = () => (
  <Card
    title={text('Title', 'Alurakut')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS e Styled Components'
    )}
  />
);
