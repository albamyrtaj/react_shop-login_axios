import { Footer } from "../components/Footer";
import { HeaderU } from "../components/Header-user";
import { React, useEffect, useState } from "react";
import { userOrder } from "../Backend/function";


export const User = () => {

  const [ordine, setOrdine] = useState([]);

  useEffect(() => {
    userOrder({ idUtente: ordine }).then((result) => {
      setOrdine(result.data);
      console.log(result.data);
    });
  }, []);
  return (
    <>
      <HeaderU />
      <div className='user'>
        <div className='order'>
          {ordine.map((elemento) => {
            return (
              <>
              <div className="info">
              <span className='date'>Ordine in data:  {elemento.date}</span>
                {elemento.listaProdottiDelRelativoOrdine.map((el) => {
                  return <span className='descrizione'> Prodotto: {el.descrizione}</span>;
                })}
              </div>
               
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
