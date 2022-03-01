const Year = ({workHandler}) => {
  const years = [];
  for (let i = 2022; i >= 1930; i--) {
    years.push(i);
  }
  return (
      <select name="Year" id="" className="half" onChange={(e) => workHandler(e)}>
        <option value="">--Select--</option>
        {years.map((year) => {
          return <option value={year} key={year}>{year}</option>;
        })}
      </select>
  );
};

export default Year;
