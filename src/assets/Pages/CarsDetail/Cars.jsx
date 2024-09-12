import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faGaugeHigh, faGasPump } from "@fortawesome/free-solid-svg-icons";
import './cars.css'

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCars = async () => {
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${searchTerm}&limit=30`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "7d139b189emsh6187a690e9b07ebp1f584ejsnd909e784bfe7",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      setCars(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {}, [searchTerm]);

  return (
    <>
      <div className="flex items-center justify-center pt-10 pb-10">
        <div className="w-full max-w-sm">
          <label htmlFor="search" className="sr-only border-2 ">
            Search
          </label>
          <div className="relative rounded-md shadow-sm border-5 border-red-500">
            <input
              type="text"
              name="search"
              id="search"
              className="block w-full pr-10 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <button
                onClick={() => fetchCars()}
                className="flex items-center justify-center h-10 w-10 text-indigo-500"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cars.map((car) => (
          <div key={car.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">
              {car.make} {car.model}
            </h2>
            <div className="text-lg text-red-500">
            <p className="text-red-700 pt-3 border-t-2 border-black">{car.class}</p>

            <p className="text-red-700 inline-flex gap-2 pt-2"><img height={25}
                  width={25} src="data:image/png;base64,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"/>{car.combination_mpg}</p>
            <br/><div className="inline-flex gap-10 pt-2">
              <p className="text-red-700 inline-flex gap-2">
                <img
                  height={25}
                  width={30}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEnElEQVR4nO2cy4sdRRSHPzMYgqgkEnQhunARFzcu8sKFCrMIZkYxThISyIskIkHUhYvoRoW4Eh+gf4IEN7pxmVmoF/LYJFmFXEIwm5kEDUEFk6BGZ9KhQl0YKnWnu3qquqq6zwe1GHp6qrp+fWrqnD6nQBAEQRAEQRAEQRAEwYUdwB9A0XC7AkyKVPfzWwQxhm3WMp7OU0RugoEIkhhFw2+sWEhiE1TIkpXWBBUiSFoTVIggbhNU1PQfXtHXZJfl+Y0tavoPdcSQbW/AiRTH0BOT+o1vWhDV54Svh+gihaMgggjSLQqxkLQoRJC0KESQtChEkDCMAYeAk8CtBMLvZe0/4DLwBfA4LWMlMJ3AJNdt14CNtITlwM8JTOpSm/rkvJrMeQD4JoHJ9NU+JXM+tjzUeWAN6fMQ8KUx9otkzB7gjvFAV4GnyIeHjfHfJlNeBP41HuYmsI78MC08O54BrhsPMQdsJU+yFuQx4JLlId4hX7IVZNT29jPyJktB1Pb2W8vgvweW0U5BJit+9YzyQewTy0BOAyvIn2KEIC6foGfUDa9VTGguywZftiAGdaPiAH4J5NWOV+z/hwYEcXUq7+35l5oNvgroO3b8e0DHr1+h/xuefR1vgjjfYInOuorxj/ZBiGgd73nut6ogpfctVZBDjvfP6KS1UPQrjOGcfpGyEKRqR0NOGtcvAM8Rh/EKYijnc0OAvpMR5C/jeiwxqlrHV4QhGUHKrqdkHbPAI4H6F0FqWMcU4RBBHK3Dp89ho6z/Ti1Z/YZ9DhsiiIN1+PY5bMxWDY203UL6EXwOGxMloigxtoQQxHWNjGkdc4F8Dp+0SpB+JJ8jqiCuFUypWMdsQJ8jqiCuFUypWMcUeeAsiPMfbIDxGkuprR0jPq0QpO9BDJUg/SjxyV6QcU8Z68+TBtkL0vcgyBHSwVkQ1xMQUqC3yPimdfaLb8qyS0ZllbRm27sYRxep33iCMFyJFTrJQZCBZVwqofvVgH3WnZ/WC9IbMa7PA/cbTRDX6yksV+d0CmtIRs1D5wUZWMobng0shgjisFztpxnEQiosV8caLGszHc8hnV6yBkbecFPR3o8sYRm6LkjPqPFrql78XUuN5NcpJcqtJf5ydaShPt+yiPEn8GSN7bA3QU4lkko6CBwaMXnTIoYqYN1s/N6SBSm9weANx/tnAnjMvQZCI2aC+bzxXLdHPJfLx70ZH4KM1TgSw3c5wlH9ttqyOnyzf4QYW2tmoywUY4tr8HCxgp2fIhbsDPRpPKHZrTNZzC3udp+dVP1mXlaUqEraDgInLP/oQ5a09YCzDYRGdgH/G+NXP+8kY2xFn2e0Y1WX9xsIjWzTlrBw3MpS9pI5Icqi1xOW1y1iqP8h+2gJOR0cMGE5i0VtHg7TMnI4WuNlvRs0xVDOYCtJ+fCZzcDfFjHepuWkeDzTS5bDN+/omFUn2GUJQfwKPB1hLC/oF8JcSj+gY8Q+4m9ML5U3E8/houuHYH5Ih3kQ+DEBEYZNWW3nWQkcjyzEvPb+BY3y2A/omJhtTQ/V1BFV3wGbhgMRBEEQBEEQBEEQBEEQBIGR3AVC9Pmjk38ApwAAAABJRU5ErkJggg=="
                />
                {car.cylinders}
              </p>
              <p className="text-red-700 inline-flex gap-2 pt-2"><img height={25}
                  width={25} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAABqklEQVR4nO3aUU6DQBSF4bMPi9aupttsk1YXYOu7xhi3gYladQ8YdDATAgnMXMYh/l/CCylnLtcRCh0JAAAAAAAAABBtLelZUjVwK90xqfJyOa9e5YhBKm+wVHmhktXRHGz1+co4L1SyOmjgDxrYwgycSwO5iSjuJrIe2cRywNcYy7xQf17HvaS7jPPmXgcwsQc33XPNy74OroHArD1Jesw4L/s6rN+SVBO9dcm2DhoYiQYGupS09Rq4l7SMzNsb5lnVsXX7TK0kvXU8aH8EnnRd4KdhXqi+Ol6tm3jtgm8kLdx28GbOWFfGeaGS1fHuQs+8fUXAjzPtbWGcZ1HHwu07WTbw1DHQuUHhhXGeRR3FFA1spvrBDVCf7K3btwvI27ljj0Z5obrqOE7xL7xyF9b2X+7kBh1r6V0WLPJC9dXxMsWduB5s4w2yizzZC28GWORZ1bGZ+ptAM1CuednXQQMj0cBIvJEGZo1f5SJxDQRmjWvgQKzS1/dDA6v0W1iln/hRNPjR1XqgKlXhxrk0sIUGzqWBrNLXb/NYpZ/TKn0AAAAAAAAA0H/0Ba+GnCBYaL8mAAAAAElFTkSuQmCC" /> {car.drive}</p>
            </div><br/>
            <div className="inline-flex gap-10 pt-2">
              <p className="text-red-700">
                <FontAwesomeIcon icon={faGasPump} />&nbsp;
                {car.fuel_type}
              </p>
              <p className="">
                <FontAwesomeIcon icon={faGaugeHigh} /> {car.displacement * 1000}
              </p>
            </div><br/>
            <div className="pt-2 inline-flex gap-10">
            <p className=" inline-flex gap-2"><img className="img-fluid  img-responsive" height={25}
                  width={25} src="data:image/png;base64,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"/>{car.transmission}</p>
            <p className="inline-flex gap-2 pt-2 bold"><img height={25}
                  width={30} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEv0lEQVR4nO1aS4gVRxQ9Q4zfmPFHogSii0wkLsRRTKKJGo2iIYvMOM4I4iIEF7oQ3bgSDcRPgqBkpSuVMaDiKp+VrkJAhQHzEYKJA+Lk+Rsn4jeoM2qFC6egKKuqu6e7fd3aBy68un37VvXp+tx7+wEVKlSoEA/Kkue936dQEYAXZAYoT4dx9VnJYMeTOQGjqa8Zuh7qGnMkIGm/uRHQQv0yAP9wEEup68iRgKT95kbAXwDGOuzGW28na0nab24EKL6BdgCvUjpyfvjB9JsrAaoEUhFQoUI2UCWVzKBKKrkRMDdg+6Hj2FrOKE6klee57fMigM8ADAPwMoAlAH4rKgFRMB9eghQbEsz8bdjJOT7OYTcKwPnAA14B8B6A9wFcrwcBKkK/ku1PAVzig35C3XKPXS+AfxnsgPauh5cw+C2jz+kA+opGQCPbNWtWgFGc1k2g7oKhExIauCSeWP3I257Ke2YCaObvGQBuFImAMQECzOztderMveEqdSMsAu4DeJfXppEMkXeo+wBAf1EI6DCmcY0PL5mcnb2tpm4BgHMAug27VquPL6ifDOCyoZcl9iavbSzKJnjJswna2ZucABM9dj2G3QHqR3pOiDOcMYJjKZ73KdgdyVHnwzzLtsa3HZW9yTT+HMAkAK8BWOV4w3pPORg4GfbTRhdPMoEqgMgJ4VoSLpF4IlOoOssJjkNm0LUY9lfzngFzc4gEQzKHvncZunMskWm/LZbfb/IkIApJI8GQHOc9bwB4QF2PpzQ2ln0q2sp+kisBKqNIMCTax3ZD1xbw227YfVWWSFB55D/mA0OtWP+VmH57eW/hI0HlEX2WL4zxfcDnd0EZIkHlkXW0/drSrwj4bbNsd+RJgA9JI8Go3f8XS1/z+B3nSJ9/RgZQzyASdImO7bsd12rW94F2j9/zeRCgcpYBAJ2sDAnupvB1t0wEPObGp3N9jYEUPvvLEAk+AnAIQJPhp4nFEMHtFATcoo9hlv9UBEQhaSRoEtrE6f+IOT9ixv8+kYxSMIU+OwdDhPIQkEUkKKUvMI/vtKb7LF47k4KALvqY7dhjRhQhEuxiu9nhTxdGD6cg4Dv6WOm41lyESPCoJ4AR2cJrWz3H2wr6aeRv13G5mT6+dFxrK0IkuJPtTQ5/P3hC4VOcQTZEd9oTCv/k8L8pLQE+JIkE11C3z9FPn1Eav0fddaN+2MrU+KLx95lJ3FfE9g6ToQarXK5F+owFlWMkuIj3HfesYb0R/sj2erbnWxvmgDGuDdR979gAXbWGxASoDEUfda71K7LNODXuc73LGz3rWHZ/8NoYFkRaHLUEU7rrTcBDAC9R9McMHRHKTDIxBMBe/l4U2Hc+Ynsv7zExn761bT/7rjumWMTIdHdBn9vfBkjdY9na0EtJi/Rdd3xsDUraIZwMECCpcwiLLXu9B9UVa4wB/cl1HEJvYAlI2BxCA/tQ1ilUV+w0BrQ2hv3DAAGy+UVhXdYVo7Q4ysHcZBE0CvcCBMjZH4WRRlxwBAVAFwezO6b97wECfo3pY7eVi5QK2wMEZPYtoMiYYJTJNBSXhnxZfiGwy0FApt8Di47hXO966p9NUuB4XvA2M8a+NPW+smOWkTFWqFChAtLifxs7r7dtKg7lAAAAAElFTkSuQmCC"/>{car.year}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cars;
