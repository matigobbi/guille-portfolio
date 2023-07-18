import { useState } from "react";
import "./Work.css"
import { Acordeon } from "./Acordeon";
import initialData from "../data.json"

export const Work = () => {


const [data, setData] = useState(initialData);

  
const toggleCollapsed = (id) => {
  const dataCopy = [...data];

  dataCopy.forEach((data) => {
   // para que se abra solo uno

    
    if (data._id === id) {
      data.isCollapsed = data.isCollapsed ? false : true;      
    } else {
      data.isCollapsed = true
    }
    setData(dataCopy);
  }); 
}


  return (
  <div>
  {
    data.map((singledata => <Acordeon key={singledata._id} data={singledata} toggleCollapsed={toggleCollapsed} />))
  }

  </div>);
};
