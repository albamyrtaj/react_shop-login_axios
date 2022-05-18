import { api} from "./api";


export const prodotti = () => {
  return api.post("/rest/prodotto/all",{
      id:null
  });
};

export const userLogin = (dati) => {
    return api.post("/rest/utenti/login", dati);
  };
  
export const userOrder = (dati) => {
    return api.post("/rest/ordineUtente/all2", dati);
  };
  
  
  
  
  
  