/* eslint-disable react/prop-types */
export const Acordeon = ({data, toggleCollapsed}) => {

return (
  <>
    <div className="container-name-acordeon" onClick={()=> {toggleCollapsed(data._id)}}>
    {data._id=="3a" ? 
      <div className="name"><span>{data.name[0]}</span><span>{data.name[1]}</span><span>{data.name[2]}</span> 
      </div>
      : <>{data.name} </>}
      <img src="images/deplegable.png" alt="deplegable" className={` ${!data.isCollapsed ? "active-arrow" : ""}`}/>

    </div>
      <div className={`description ${data.isCollapsed ? "active" : ""}`} >
        {data._id=="3a" ? 
        <div className="a3">
          <div className="posterdesign-container">
            <img src="images/GREECE-IG-SQUARE.png" alt="poster1" />
            <img src="images/EGYPT-IG-SQUARE.png" alt="poster1" />
            <img src="images/TBILISI-IG-SQUARE.png" alt="poster1" />
          </div>
          <div  className="container-otoñal">
            <div className="container-texto-otoñal">
              <div className="white-line-otoñal"></div>
              <p>Cover Art,</p>
              <p className="italic">indie</p>
              <p className="italic">Argentina, 2020</p>
              <p className="white-line-otoñal"></p>
            </div>
            <img  src="images/otonal.png" alt="otoñal" className="img-otoñal" />
          </div>
          <div className="container-discos">
            <img src="./images/disco1.png" alt="anxiety therapy" />
            <img src="./images/disco2.png" alt="anxiety therapy2" />
          </div>
        </div>
        : <>{data.description} </>}
      </div>
    <div className="white-line"></div>
  </>
)
}

