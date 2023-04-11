import { useEffect, useState, useRef } from 'react';
import './App.css';
import Binary from './Binary';

const App = () => {

  const binaryTime = () => {
    const r = new Date()
    
    let h = r.getHours()
    let m = r.getMinutes()
    let s = r.getSeconds()

    const divide = x => [
      (Math.floor(x/10)).toString(2).padStart(4,'0'),
      (x%10).toString(2).padStart(4,'0')
    ]

    return [
      ...divide(h),
      ...divide(m),
      ...divide(s),
    ]

  }

  const interval = useRef();
  const [time,setTime] = useState(binaryTime())

  useEffect(() => {
    function handleTimer() {
      interval.current = 
        setInterval(() => setTime(binaryTime()) , 1000);
    }

    handleTimer()
    return () => clearInterval(interval.current);
  }, [time]);


  return (
    <div className="App">
        {time.map ((x,i) => <Binary key={i} value={x} />)}
    </div>
  );
}

export default App;
