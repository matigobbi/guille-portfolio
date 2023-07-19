/* eslint-disable react/prop-types */
import "./Acordeon.css"

export const Acordeon = ({data, toggleCollapsed}) => {

return (
  <>
    <div className="acordeon" onClick={()=> {toggleCollapsed(data._id)}}>
      <div>{data.name}</div>
      <img src="deplegable.png" alt="deplegable" className={` ${!data.isCollapsed ? "active-arrow" : ""}`}/>

    </div>
      <div className={`description ${data.isCollapsed ? "active" : ""}`} >
      {data._id=="3a" ? 
        <div className="posterdesign-container a3">
          <img src="GREECE-IG-SQUARE.png" alt="poster1" />
          <img src="EGYPT-IG-SQUARE.png" alt="poster1" />
          <img src="TBILISI-IG-SQUARE.png" alt="poster1" />
        </div>
      : <></>}
      </div>
    <div className="white-line"></div>
  </>
)
}

