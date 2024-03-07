import React, { useEffect, useState } from "react";

export default function Main(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    fetchData()
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []); 

  const fetchData = async () => {
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(["", "", ""]); 
      }, 1000);
    });
  };

  return (
    <div>
      <h1>Main Component</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
