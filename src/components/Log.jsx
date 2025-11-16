import { useState } from "react";

export default function Log({ log }) {
  return (
    <ol id="log">

      {log.map((item) => (
        <li key={`${item.square.row}${item.square.col}`}>
          {item.player} selected ({item.square.row},{item.square.col})
        </li>
      ))}

    </ol>
  );
}
