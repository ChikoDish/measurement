import convert from "convert-units";
const converter = (from, fromUnit, toUnit) => {
  return convert(from).from(fromUnit).to(toUnit);
};

export default converter;
