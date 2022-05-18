import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { prodotti } from "../Backend/function";
import scarpe from "../Images/scarpe.jpg";
import tv from "../Images/tv.jpg";
import telecomando from "../Images/telecomando.jpg";
import pc from "../Images/pc.jpg";
import borraccia from "../Images/borraccia.jpg";

export const Home = () => {
  const [prodotto, setProdotti] = useState([]);
  const [immg, setImg] = useState([]);

 

   let  myArr = [ scarpe, tv,telecomando,pc,borraccia];

  useEffect(() => {
    prodotti().then((result) => {
      setProdotti(result.data);
      setImg(myArr);
      console.log(result);
    });
  }, []);



  // function img (){
  //   for(let i = 0; i <= myArr.length-1; i++)
  //   {
       
  //       document.getElementById("img" + i).src = myArr[i].src;
  //   }
  // }

  return (
    <>
      <Header />
            {/* // <img className="svg-header" src={shopper}></img> */}
      <div className='prodotti-cards'>
        <div className="container-cards">
          {prodotto.map((p,i) => {
            return (
              <div className='cards'>
                <span className='descrizione'> Prodotto: {p.descrizione} </span>
                <span className='prezzo'> Prezzo: {p.prezzo}$</span>
                <img className="img-prodotti" src={immg[i]} />
              </div>
            );
          })}
       
        </div>
      </div>

      <Footer />
    </>
  );
};
