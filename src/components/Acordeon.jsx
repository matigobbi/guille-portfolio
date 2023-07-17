/* eslint-disable react/prop-types */

export const Acordeon = ({data, toggleCollapsed}) => {
return (
  <>
    <div className="acordeon" onClick={()=> {toggleCollapsed(data._id)}}>
      <div>{data.name}</div>
      <img src="deplegable.png" alt="deplegable" className={` ${!data.isCollapsed ? "active-arrow" : ""}`}/>
      
    </div>
      <div className={`description ${data.isCollapsed ? "active" : ""}`} >{data.description} </div>
    <div className="white-line"></div>
  </>
)
}

