import React from 'react';
import{ useGlobalContext} from './context'
const Button = () => {
    const {handlePage,isLoading,page,nbPages} = useGlobalContext()
  return <section className='btn-container'>
      <button disabled={isLoading} onClick={()=>{handlePage('decr')}}>Prev</button>
      <p>{page+1} of{nbPages}</p>
      <button  disabled={isLoading} onClick={()=>{handlePage('incr')}}>Next</button>
  </section>;
};

export default Button;
