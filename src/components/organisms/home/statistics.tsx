const Statistics: React.FC = () => {

    return (  
      <div className="flex flex-col items-center mt-8 mb-8 px-10">
          <p className="text-xs font-mono text-slate-600 text-center">
              Temos curiosidades muito distantes, atrás da palavra montanhas, longe dos países Vokalia e Consonantia, vivem os textos cegos.
          </p>
          <div className="flex justify-around mt-4 w-full">
              <div className="flex flex-col items-center">
                  <label className="text-center">
                      <p style={{ fontFamily: "Libre Baskerville" }} className=" mb-4 mt-4 text-3xl">9452</p>
                      <p className="text-xs font-mono text-slate-600">MEMBROS</p>
                  </label>
                  <label className="text-center">
                      <p style={{ fontFamily: "Libre Baskerville" }} className=" mb-4 mt-4 text-3xl">433</p>
                      <p className="text-xs font-mono text-slate-600 ">AULAS</p>
                   </label>
              </div>
              <div className="flex flex-col items-center">
                  <label className="text-center">
                      <p style={{ fontFamily: "Libre Baskerville" }} className=" mb-4 mt-4 text-3xl">214</p>
                      <p className="text-xs font-mono text-slate-600 ">MINISTÉRIOS</p>
                  </label>
                  <label className="text-center">
                      <p style={{ fontFamily: "Libre Baskerville" }} className=" mb-4  mt-4 text-3xl">512</p>
                      <p className="text-xs  text-slate-600 ">ATIVIDADES</p>
                  </label>
              </div>
          </div>
      </div>
         
    );
  };
  
  export default Statistics;