import BaseLayout from '../../components/layouts/baseLayout';
import Statistics from '@/components/organisms/statistics';
import Card from '@/components/molecules/card';

const winnerWater = require('../../../public/fast.jpg');

const article =       {
  title: "",
  description: "",
  imageUrl: winnerWater,
  with: '100%',
  height: '700px'
}

export default function About() {
  return (
    <>
      <BaseLayout>
      <Card 
   
        { ...article }

         />
         <div className='flex justify-center'>
          <div>
            <h1 style={{ fontFamily: "Libre Baskerville" }} className='text-center mt-8 text-3xl text-bold'>Versículo Diário</h1>
            <p  style={{ fontFamily: "Libre Baskerville" }} className="text-sm font- my-6 text-slate-600 mb-8 text-center">Dignissimos asperiores vitae velit veniam totam fuga molestias acusamus alias autem provident. Odit ab aliquam dolor eius.</p>
          </div>
          <div>
            <h1 style={{ fontFamily: "Libre Baskerville" }} className='text-center mt-8 text-3xl text-bold'>Nossa missão</h1>
            <p className="text-xs font-mono my-6 text-slate-600 mb-8 text-center">Dignissimos asperiores vitae velit veniam totam fuga molestias acusamus alias autem provident. Odit ab aliquam dolor eius.</p>
           </div>     
           <div>
            <h1 style={{ fontFamily: "Libre Baskerville" }} className='text-center mt-8 text-3xl text-bold'>Nossos Ministérios</h1>
            <p className="text-xs font-mono my-6 text-slate-600 mb-8 text-center">Dignissimos asperiores vitae velit veniam totam fuga molestias acusamus alias autem provident. Odit ab aliquam dolor eius.</p>
            </div>
         </div>

        <Statistics />
      </BaseLayout>
    </>
  );
}
