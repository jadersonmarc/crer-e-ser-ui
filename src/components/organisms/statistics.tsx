const data = [
    { value: 9452, label: 'MEMBROS' },
    { value: 433, label: 'AULAS' },
    { value: 214, label: 'MINISTÉRIOS' },
    { value: 512, label: 'ATIVIDADES' }
  ];

const Statistics: React.FC = () => {
    return (  
      <div className="flex flex-col items-center my-10 px-10">
          <p className="text-xs font-mono text-slate-600 text-center">
              Temos curiosidades muito distantes, atrás da palavra montanhas, longe dos países Vokalia e Consonantia, vivem os textos cegos.
          </p>

          <div className="flex justify-center my-10 space-x-8 w-full">
                {data.map((item, index) => (
                    <label key={index} className="text-center">
                    <p style={{ fontFamily: "Libre Baskerville" }} className="mb-4 mt-4 text-3xl">{item.value}</p>
                    <p className="text-xs font-mono text-slate-600">{item.label}</p>
                    </label>
                ))}
            </div>
      </div>
         
    );
  };
  
  export default Statistics;