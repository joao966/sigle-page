import React, { useState } from 'react';
import context from './contex';

function Provider({children}) {
  const [data, setdata] = useState({})

  const GLOBAL_STATE = {
    data,
    setdata,
  }

  return (
    <context.Provider value={GLOBAL_STATE}>
      {children}
    </context.Provider>
  )
}

export default Provider;