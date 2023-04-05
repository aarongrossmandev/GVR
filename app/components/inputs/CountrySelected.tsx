// "use client";
// import { Country, State, City } from "country-state-city";
// import { ICountry, IState, ICity } from "country-state-city";
// import Select from "react-select";
// import { useEffect, useState } from "react";

// export default function CountrySelected({ value, onChange }: any) {
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedState, setSelectedState] = useState(null);
//   const [selectedCity, setSelectedCity] = useState(null);
//   useEffect(() => {
//     console.log(selectedCountry);
//     console.log(selectedCountry?.isoCode);
//     console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
//   }, [selectedCountry]);
//   return (
//     <div className="App">
//       <Select
//         options={Country.getAllCountries()}
//         getOptionLabel={(options: any) => {
//           return options["name"];
//         }}
//         getOptionValue={(options: any) => {
//           return options["name"];
//         }}
//         value={selectedCountry}
//         onChange={(item: any) => {
//           setSelectedCountry(item);
//         }}
//       />
//       <Select
//         options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
//         getOptionLabel={(options): any => {
//           return options["name"];
//         }}
//         getOptionValue={(options: any) => {
//           return options["name"];
//         }}
//         value={selectedState}
//         onChange={(item): any => {
//           setSelectedState(item);
//         }}
//       />
//       <Select
//         options={City.getCitiesOfState(
//           selectedState?.countryCode,
//           selectedState?.isoCode
//         )}
//         getOptionLabel={(options: any) => {
//           return options["name"];
//         }}
//         getOptionValue={(options: any) => {
//           return options["name"];
//         }}
//         value={selectedCity}
//         onChange={(item: any) => {
//           setSelectedCity(item);
//         }}
//       />
//     </div>
//   );
// }
