export default function AboutUs() {
    return (
        <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
                <h1 style={{ fontFamily: "Libre Baskerville" }}  className="text-center text-3xl font-bold mt-8">Versículo Diário</h1>
                <p style={{ fontFamily: "Libre Baskerville" }} className="text-sm my-6 mb-8 text-center px-4 text-slate-600">
                    Mas alguém dirá: "Você tem fé; eu tenho obras". Mostre-me a sua fé sem obras, e eu lhe mostrarei a minha fé pelas obras.
                </p>
            </div>
            <div className="w-full md:w-1/3 p-4">
                <h1 style={{ fontFamily: "Libre Baskerville" }} className="text-center text-3xl font-bold mt-8">Nossa missão</h1>
                <p className="text-xs my-6 mb-8 font-mono text-center px-4 text-slate-600">
                A MISSÃO da nossa igreja é ganhar, batizar, cuidar, motivar, discipular e treinar todos aqueles que entram em contato conosco, seguindo o modelo de Cristo e fundamentados no amor, na misericórdia e no serviço.
                </p>
            </div>
            <div className="w-full md:w-1/3 p-4">
                <h1 style={{ fontFamily: "Libre Baskerville" }} className="text-center text-3xl font-bold mt-8">Nossos Valores</h1>
                <p className="text-xs my-6 mb-8 text-center px-4 font-mono text-slate-600">
                Tudo isso é fundamentado no amor, na misericórdia e no serviço, refletindo o caráter de Cristo em todas as nossas ações. Nossa missão é proporcionar um ambiente acolhedor e transformador, onde as pessoas possam encontrar Deus, crescer em sua fé e ser equipadas para viver uma vida de impacto e propósito em sua família, comunidade e além.
                </p>
            </div>
        </div>
    </div>
    
    );
  }