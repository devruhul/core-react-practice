import React, { useEffect, useState } from "react";

export default function Baller() {
  const [baller, setBaller] = useState(0);
  const handleBaller = () => {
    setBaller((prevBaller) => prevBaller + 1);
  };
//   why alert is clicking twice ok thats fixed by using useEffect and adding baller as dependency but after the alert i dont want to increase the baller count so i will reset the baller count to 0 after the alert is shown
useEffect(() => {   
    if (baller === 6) {
        alert('your over is finished')
        setBaller(0)
    }
}, [baller])


  return (
    <div>
      <h1>Ballers: {baller}</h1>
      <button onClick={handleBaller}>Baller</button>
    </div>
  );
}
