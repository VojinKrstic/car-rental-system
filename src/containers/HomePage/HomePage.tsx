"use client";

import { HomePageStyled } from "./HomePageStyled";
import Header from "@/components/Header/Header";
import Dropdown from "@/components/Dropdown/Dropdown";

const dropdownOptions = [
  {
    label: "Car type",
    options: [
      { name: "sedan", label: "Sedan" },
      { name: "suv", label: "SUV" },
      { name: "convertible", label: "Convertible" },
      { name: "hatchback", label: "Hatchback" },
    ],
  },
  {
    label: "Place of rental",
    options: [
      { name: "downtown", label: "Downtown" },
      { name: "airport", label: "Airport" },
      { name: "train_station", label: "Train Station" },
      { name: "city_center", label: "City Center" },
    ],
  },
  {
    label: "Place of return",
    options: [
      { name: "downtown", label: "Downtown" },
      { name: "airport", label: "Airport" },
      { name: "train_station", label: "Train Station" },
      { name: "city_center", label: "City Center" },
    ],
  },
];

const HomePage = () => {
  return (
    <HomePageStyled>
      <Header />
      <div>
        <div>
          <h1>Experience the road like never before</h1>
          <p>
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
            tristique et gravida. Quis nunc interdum gravida ullamcorper
          </p>
          <button>View all cars</button>
        </div>
        <div className="booking-container">
          <p>Book your car</p>
          <div>
            {dropdownOptions.map(({ options, label }) => (
              <Dropdown key={label} options={options} label={label} />
            ))}
            <input type="date" />
            <input type="date" />
            <button>Book now</button>
          </div>
        </div>
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
