import "./style.css";
const config = [
    [1, 1, 0],
    [0, 1, 1],
    [1, 0, 1],

]

function GridLights() {

  return (
    <div className="grid-ligt">
        {
            config.map((row, rowIndex) => (
                <div className="grid-row" key={rowIndex}>
                    {
                        row.map((value, colIndex) => (
                            <div key={colIndex} className="light">{value}</div>
                        ))
                    }
                </div>
            ))
        }
    </div>
  )
}

export default GridLights