import React, { useState, useEffect } from "react";

const carImages = {
  1: {
    name: "Coupe - Luxury (2 Seater)",
    image: "https://ucarecdn.com/bc0d85a3-69ed-4e93-a1ae-7a270f2db1a9/Coupe.png",
    basePrice: "₹ 500",
    pricePerKm: "₹ 30 /Km",
    hourlyCharge: "₹ 70 / hour",
    totalCost: "₹ 600 / booking",
  },
  2: {
    name: "Sedan - Luxury (4 Seater)",
    image: "https://ucarecdn.com/d89285cd-32a1-4fa1-b956-2f32255c592e/sedan.png",
    basePrice: "₹ 200",
    pricePerKm: "₹ 10 /Km",
    hourlyCharge: "₹ 50 / hour",
    totalCost: "₹ 260 / booking",
  },
  3: {
    name: "Suv - Family (5 Seater)",
    image: "https://ucarecdn.com/028b170e-45f1-4170-82fa-cfc1af591d04/Suv.png",
    basePrice: "₹ 150",
    pricePerKm: "₹ 15 / km",
    hourlyCharge: "₹ 50 / hour",
    totalCost: "₹ 215 / booking",
  },
  4: {
    name: "Hybrid - Eco Friendly (3 Seater)",
    image: "https://ucarecdn.com/abf796eb-96da-4a10-8789-d74ab54b36ef/hybrid.png",
    basePrice: "₹ 250",
    pricePerKm: "₹ 10 /Km",
    hourlyCharge: "₹ 50 / hour",
    totalCost: "₹ 310 / booking",
  },
  5: {
    name: "Electric - Green (4 Seater)",
    image: "https://ucarecdn.com/9439ccf6-daa6-4016-bdc7-13b700d1a422/electric.png",
    basePrice: "₹ 300",
    pricePerKm: "₹ 5 /Km",
    hourlyCharge: "₹ 50 / hour",
    totalCost: "₹ 355 / booking",
  },
  6: {
    name: "Microcar - Tiny (2 Seater)",
    image: "https://ucarecdn.com/d382b574-c4e7-4696-930c-67ea6e28907e/Micro.png",
    basePrice: "₹ 100",
    pricePerKm: "₹ 5 /Km",
    hourlyCharge: "₹ 50 / hour",
    totalCost: "₹ 155 / booking",
  },
};

const CarSelection = () => {
  const [selectedCar, setSelectedCar] = useState("1");

  useEffect(() => {
    // Preload car images when the component mounts
    Object.values(carImages).forEach((car) => {
      const img = new Image();
      img.src = car.image;
    });
  }, []);

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  return (
    <section className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <div className="text-center font-extrabold text-slate-800 pb-8">
          <h1 className="text-5xl mb-4">Select Your Car</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-7 gap-5">
          <div className="space-y-3">
            {Object.entries(carImages).map(([key, value]) => (
              <div
                key={key}
                className={`cursor-pointer p-4 border rounded-lg shadow-md ${
                  selectedCar === key
                    ? "bg-blue-500 text-white font-bold"
                    : "bg-white"
                }`}
                onClick={() => handleCarClick(key)}
              >
                {value.name}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center md:items-start space-y-4">
            {selectedCar && (
              <>
                <img
                  className="h-auto w-94 mb-2   rounded-lg"
                  src={carImages[selectedCar].image}
                  alt={carImages[selectedCar].name}
                />
                <div className="text-lg font-mono text-gray-700">
                  <p>
                    <strong>Base price:</strong>{" "}
                    <span className="text-green-600">
                      {carImages[selectedCar].basePrice}
                    </span>
                  </p>
                  <p>
                    <strong>Price per km:</strong>{" "}
                    <span className="text-green-600">
                      {carImages[selectedCar].pricePerKm}
                    </span>
                  </p>
                  <p>
                    <strong>Hourly Charges:</strong>{" "}
                    <span className="text-green-600">
                      {carImages[selectedCar].hourlyCharge}
                    </span>
                  </p>
                  <p>
                    <strong>Total cost:</strong>{" "}
                    <span className="text-red-600">
                      {carImages[selectedCar].totalCost}
                    </span>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarSelection;
