import BaseLayout from "../baseLayout";
import Statistics from '@/components/organisms/statistics';
import Card from '@/components/molecules/card';
import AboutUs from '@/components/organisms/about/aboutUs';


const winnerWater = require('../../../../public/fast.jpg');

const article =       {
  title: "",
  description: "",
  imageUrl: winnerWater,
  with: '100%',
  height: '700px'
}

export default function AboutLayout() {
  return (
    <>
      <BaseLayout>
        <Card { ...article } />
        <AboutUs />
        <Statistics />
      </BaseLayout>
    </>
  );
}

