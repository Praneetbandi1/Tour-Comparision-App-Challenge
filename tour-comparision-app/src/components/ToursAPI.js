//U46368100git sr
import { useState, useEffect } from 'react';

const ToursAPI = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch('https://www.course-api.com/react-tours-project')
      .then(response => response.json())
      .then(data => setTours(data));
  }, []);
console.log(tours.length);
  return tours;
}

export default ToursAPI;
