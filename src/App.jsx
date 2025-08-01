import React from 'react';
import Cup1 from './assets/images/cups/Rectangle 9.png'
import Cup2 from './assets/images/cups/Rectangle 10.png'
import Cup3 from './assets/images/cups/Rectangle 11.png'
import Cup4 from './assets/images/cups/Rectangle 12.png'
const App = () => {
  return (
    <>
      <div className='text-amber-300 text-3xl'>ALLAHU AKBAR</div>
      <div className='grid grid-cols-4 gap-3'>
        <img className='m-5' src={Cup1} alt="image" srcset="" />
        <img className='m-5' src={Cup2} alt="image" srcset="" />
        <img className='m-5' src={Cup3} alt="image" srcset="" />
        <img className='m-5' src={Cup4} alt="image" srcset="" />
      </div>

    </>

  );
};

export default App;