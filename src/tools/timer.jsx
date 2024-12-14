import React, { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(30);
  const Ref = useRef(null);

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 1;
      });
    }, 1000);
  }, []);

  return (
    <div className="App">
      <p>
        Time left: {`${Math.floor(time / 60)}`.padStart(2, 0)}:
        {`${time % 60}`.padStart(2, 0)}
      </p>
    </div>
  );
}