import React, { useEffect, useState } from 'react';
import context from './contex';
import { toast } from 'react-toastify';

function Provider({children}) {
  const [data, setdata] = useState({})
  console.log(data.cnpj)


  const requisitionCep = async () => {
    try {
      const result = await fetch(`https://viacep.com.br/ws/${data.cep}/json/`);
      const resultJson =  await result.json();
      return resultJson;
    }catch(_error) {
      return toast.error('CEP inválido');
    }
  }
  
  // API depende do cors para rodar
  // const requisitionCnpj = async () => {
  //   try {
  //     const URL = `https://www.receitaws.com.br/v1/cnpj/${data.cnpj}`;
  //     const result = await fetch(URL);
  //     const resultJson =  await result.json();
  //     return resultJson;
  //   }catch(_error) {
  //     return toast.error('CNPJ inválido');
  //   }
  // }

  const GLOBAL_STATE = {
    data,
    setdata,
    requisitionCep,
    // requisitionCnpj
  }

  return (
    <context.Provider value={GLOBAL_STATE}>
      {children}
    </context.Provider>
  )
}

export default Provider;