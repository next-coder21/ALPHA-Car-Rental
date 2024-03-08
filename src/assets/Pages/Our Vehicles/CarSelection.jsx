// import { useState } from 'react';
// import Suv from '../../Images/Hero/Suv.png';

// const CarSelection = () => {
//   const [changed ,setChanged] = useState(true);
//   const [selectedCar, setSelectedCar] = useState(null);
//   let imgSrc;
//   const handleCarClick = (value) => {
//     setSelectedCar(value);
//     console.log(value);
//     if(value === 1){
//         selectedCar(imgSrc=Suv);
//         imgSrc = 'https://ucarecdn.com/14ce4e85-ca66-4b28-959d-6edb3e0a781d/Suv.png';
//     }

//   };

//   return (
//     <section>
//     <div className='flex'>
//         <div className="grid grid-cols-1  p-7 gap-5">
//           <div className="car" value="1" onClick={() => handleCarClick(1)}>
//             Coupe
//           </div>
//           <div className="car" value="2" onClick={() => handleCarClick(2)}>
//             Sedan
//           </div>
//           <div className="car" value="3" onClick={() => handleCarClick(3)}>
//             Suv
//           </div>
//           <div className="car" value="4" onClick={() => handleCarClick(4)}>
//             Hybrid
//           </div>
//           <div className="car" value="5" onClick={() => handleCarClick(5)}>
//             Electric
//           </div>
//           <div className="car" value="6" onClick={() => handleCarClick(6)}>
//             Microcar
//           </div>
//         </div>
//         { selectedCar ? (<img  src={imgSrc} alt/>) : null
//         }

//         </div>

//     </section>
//   );
// };

// export default CarSelection;

import React, { useState } from "react";

const carImages = {
  1: {
    image:
      "https://ucarecdn.com/bc0d85a3-69ed-4e93-a1ae-7a270f2db1a9/Coupe.png",
    basePrice: "₹ 500",
    pricePerKm: "₹ 30 /Km",
    hourlyCharge: "₹ 70 / hour",
    totalCost: "₹ 600 / booking",

  },
  2: {
    image:
      "https://ucarecdn.com/d89285cd-32a1-4fa1-b956-2f32255c592e/sedan.png",
    basePrice: "₹ 200",
    pricePerKm: "₹ 10 /Km",
    hourlyCharge: "₹ 50 / hour",
    totalCost: "₹ 260 / booking",
  },
  3: {
    image: "https://ucarecdn.com/028b170e-45f1-4170-82fa-cfc1af591d04/Suv.png",
    basePrice: "₹ 150",
    pricePerKm: "₹ 15 / km",
    hourlyCharge: "₹ 50 / hour",
    totalCost: "₹ 215 / booking",
  },
  4: {
    image:
      "https://ucarecdn.com/abf796eb-96da-4a10-8789-d74ab54b36ef/hybrid.png",
    basePrice: "₹ 250",
    pricePerKm: "₹ 10 /Km",
    hourlyCharge: "₹ 50 / hour",
    totalCost: "₹ 310 / booking",
  },
  5: {
    image:
      "https://ucarecdn.com/9439ccf6-daa6-4016-bdc7-13b700d1a422/electric.png",
    basePrice: "₹ 300",
    pricePerKm: "₹ 5 /Km",
    hourlyCharge: "₹ 50 / hour",
    totalCost: "₹ 355 / booking",
  },
  6: {
    image:
      "https://ucarecdn.com/d382b574-c4e7-4696-930c-67ea6e28907e/Micro.png",
    basePrice: "₹ 100",
    pricePerKm: "₹ 5 /Km",
    hourlyCharge: "₹ 50 / hour",
    totalCost: "₹ 155 / booking ",
  },
};

const CarSelection = () => {
  const [selectedCar, setSelectedCar] = useState("1");

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  return (
    <section  className="">
      
        <div className="grid grid-cols-1 sm:grid-cols-2 p-7 gap-5">
          <div>
            {Object.entries(carImages).map(([key, value]) => (
              <div
                key={key}
                className={`cursor-pointer p-2 md:p-4 ${
                  selectedCar === key ? "bg-blue-500 text-white font-bold" : ""
                }`}
                onClick={() => handleCarClick(key)}
              >
                {key === "1"
                  ? "Coupe  - Luxury (2 Seater)"
                  : key === "2"
                  ? "Sedan -  Luxury (4 Seater)"
                  : key === "3"
                  ? "Suv  - Family (5 Seater)"
                  : key === "4"
                  ? "Hybrid - Eco Friendly (3 Seater)"
                  : key === "5"
                  ? "Electric  - Green (4 Seater)"
                  : "Microcar - Tiny (2 Seater)"}
              </div>
            ))}
          </div>
          
            <div className="md:mx-auto pl-0">
              {selectedCar && (
                <>
                  <img
                    className="h-52 md:w-82 md:h-64 w-96 image-cover mb-2 border-2 border-red-500 md:border-0  md:border-red-600"
                    src={carImages[selectedCar].image}
                    alt={selectedCar}
                  />
                  <p className="text-lg font-mono text-gray-700">Base price: <span className="text-green-600">{carImages[selectedCar].basePrice}</span></p>
                  <p className="text-lg font-mono text-gray-700">Price per km: <span className="text-green-600">{carImages[selectedCar].pricePerKm}</span></p>
                  <p className="text-lg font-mono text-gray-700">Hourly Charges: <span className="text-green-600">{carImages[selectedCar].hourlyCharge}</span></p>
                  
                  <p className="text-lg font-mono text-gray-700">Total cost: <span className="text-red-600">{carImages[selectedCar].totalCost}</span></p>
                </>
              )}
            </div>
          
        </div>
     
    </section>
  );
};

export default CarSelection;
