import React from 'react';
import Cup1 from './assets/images/cups/Rectangle 9.png'
import Cup2 from './assets/images/cups/Rectangle 10.png'
import Cup3 from './assets/images/cups/Rectangle 11.png'
import Cup4 from './assets/images/cups/Rectangle 12.png'
import { useLoaderData } from 'react-router-dom';
import Coffeecard from './Components/Coffeecard';
const App = () => {


  const coffees = useLoaderData();


  return (
    <>

      <div className='m-20 text-center '>
        <h1 className='text-3xl text-amber-700'>Our popular Product</h1>
        <div className='grid grid-cols-2'>
          {
            coffees.map(coffee => <Coffeecard coffee={coffee}></Coffeecard>)

          }
        </div>

      </div>

    </>

  );
};

export default App;