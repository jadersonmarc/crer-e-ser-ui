import BaseLayout from "../baseLayout";
import Card from '@/components/molecules/card';
import AboutUs from '@/components/organisms/about/aboutUs';


const winnerWater = require('../../../../public/fast.jpg');

const article =       {
  title: "",
  description: "",
  imageUrl: winnerWater,
  width: '100%',
  height: '700px'
}

export default function AboutLayout() {
  return (
    <>
      <BaseLayout>
        <Card { ...article } />
        <AboutUs />
      </BaseLayout>
    </>
  );
}

