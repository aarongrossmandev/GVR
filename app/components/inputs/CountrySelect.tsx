"use client";

import Select from "react-select";

import useCountries from "@/app/hooks/useCountries";

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();

  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div
            className="
          flex flex-row items-center gap-3"
          >
            <div className="text-black text-thin">{option.flag}</div>
            <div className="text-black font-semibold">
              {option.label},
              <span className="ml-1 text-neutral-500">{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg hover:bg-emerald-400 transition",
        }}
      />
    </div>
  );
};

export default CountrySelect;
