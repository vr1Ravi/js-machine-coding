import { useMemo, useState } from "react";
import "./style.css";
const config = [
  [1, 1, 0],
  [0, 1, 1],
  [1, 0, 1],
];

function GridLights() {
  const [map, setMap] = useState(new Map());
  const onesFreq = useMemo(
    () => config.flat().reduce((acc, val) => acc + val, 0),
    [],
  );
  const handleClick = ({ key, value }) => {
    if (value === 0 || map.has(key)) return;
    const newMap = structuredClone(map);
    newMap.set(key, true);

    setMap(newMap);
    if (newMap.size === onesFreq) rollback();
  };

  const rollback = () => {
    let intervalId = setInterval(() => {
      setMap((prevMap) => {
        const firstEntry = Array.from(prevMap.keys()).shift();
        const newMap = structuredClone(prevMap);
        newMap.delete(firstEntry);
        if (newMap.size === 0) clearInterval(intervalId);
        return newMap;
      });
    }, 1000);
  };

  return (
    <div className="grid-light">
      {config.map((row, rowIndex) => (
        <div className="grid-row" key={rowIndex}>
          {row.map((value, colIndex) => {
            let lightClass = "";
            let toggleClass = "";
            if (value === 0) {
              lightClass = "off";
            }
            const key = `${rowIndex} - ${colIndex}`;
            if (map.has(key)) toggleClass = "toggle";
            return (
              <div
                key={colIndex}
                className={`light ${lightClass} ${toggleClass}`}
                onClick={() => {
                  handleClick({ key, value });
                }}
              >
                {value}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default GridLights;
