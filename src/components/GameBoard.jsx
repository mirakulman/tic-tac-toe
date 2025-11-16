
export default function GameBoard({ onSelectSquare, board }) {

  //   const [gameB, setGB] = useState(initialGB);

  //     function handleGameClick(rowIndex, colIndex) {
  //     setGB( (prevGB) => {
  //       const newGB = [...prevGB.map((innerArray) => [...innerArray])];
  //       newGB[rowIndex][colIndex] = activePlayerSymbol;
  //       return newGB;
  //     });

  //     onSelectSquare();
  //   }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                {" "}
                {/* Prevent overwriting an already selected square */}
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol!=null}>
                  {playerSymbol}
                </button>{" "}
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
