import BaseLayout from '../../../components/layouts/baseLayout';
import Statistics from '@/components/organisms/statistics';
import Card from '@/components/molecules/card';
import ContactForm from '@/components/organisms/contact/contactForm';

export default function ContactsLayouts() {

  const winnerWater = require('../../../../public/fast.jpg');

const article =       {
  title: "",
  description: "",
  imageUrl: winnerWater,
  with: '100%',
  height: '700px'
}

  return (
    <>
      <BaseLayout>
        <Card { ...article } />
        <ContactForm />
        <Statistics />
      </BaseLayout>
    </>
  );
}
