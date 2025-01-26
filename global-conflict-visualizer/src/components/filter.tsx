import * as React from "react";
import { Slider, Box, Typography, MenuItem, Select, InputLabel, FormControl, OutlinedInput, Chip, Button } from "@mui/material";

interface FilterProps {
  yearRange: [number, number];
  setYearRange: React.Dispatch<React.SetStateAction<[number, number]>>;
  selectedCountries: string[];
  setSelectedCountries: React.Dispatch<React.SetStateAction<string[]>>;
  selectedType: string;
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
}

const countryOptions = [
  "United States", "Russia", "Ukraine", "China", "India", "Iraq", "Afghanistan", 
  "Syria", "Israel", "Iran", "Germany", "France", "United Kingdom", "North Korea", 
  "South Korea", "Vietnam", "Yugoslavia", "Bosnia and Herzegovina"
];

const conflictTypeOptions = [
  "Interstate War", "Civil War", "Non-State Conflict", "One-Sided Violence", "Terrorism"
];

const defaultYearRange: [number, number] = [1900, 2025];

const Filter: React.FC<FilterProps> = ({ yearRange, setYearRange, selectedCountries, setSelectedCountries, selectedType, setSelectedType }) => {
  const handleYearChange = (_event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setYearRange([newValue[0], newValue[1]]);
    }
  };

  const handleResetFilters = () => {
    setYearRange(defaultYearRange);
    setSelectedCountries([]);
    setSelectedType("");
  };

  return (
    <Box sx={{ width: 400, mb: 4, p: 2 }} className="border rounded-lg">
      {/* Year Range Slider */}
      <Typography variant="h6">Filter by Year: {yearRange[0]} - {yearRange[1]}</Typography>
      <Slider
        value={yearRange}
        onChange={handleYearChange}
        valueLabelDisplay="auto"
        min={1900}
        max={2025}
        marks
      />

      {/* Country Filter (Multiple Select) */}
      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel>Select Countries</InputLabel>
        <Select
          multiple
          value={selectedCountries}
          onChange={(e) => setSelectedCountries(e.target.value as string[])}
          input={<OutlinedInput label="Select Countries" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {countryOptions.map((country) => (
            <MenuItem key={country} value={country}>
              {country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Conflict Type Filter (Single Select) */}
      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel>Select Conflict Type</InputLabel>
        <Select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value as string)}
          input={<OutlinedInput label="Select Conflict Type" />}
        >
          {conflictTypeOptions.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Reset Filters Button */}
      <Button
        variant="contained"
        color="secondary"
        onClick={handleResetFilters}
        sx={{ mt: 3, width: "100%" }}
      >
        Reset Filters
      </Button>
    </Box>
  );
};

export default Filter;
