import "./Artdirect.css";
export const Artdirect = () => {
  return (
    <div className="artdirect">
      <div className="artdirect-title">
        Art Direct
      </div>
      <div className='white-line'></div>
      <div className="container-borderless">
        <img src="images/artdirect-fondo.jpeg" alt="" />
        <div className="borderless">Borderless</div>
      </div>
      <div className="container-texto-borderless">
        <p className="borderless-2022">2022</p>
          <div className="two-text-container">
            <p>
              Client <br/>
              AVA Nightclub <br/>
              /Borderless
            </p>
            <p>
              Services <br/>
              Art Direction <br/>
              Poster design
            </p>
          </div>
        <div className="text-container">
          <p>
           BORDERLESS is an innovative concept connecting underground electronic music scenes worldwide, virtually bringing musicians and crowds together across borders through streaming events and workshops.
          </p>
          <p>
            It aims to keep the flow of creativity and inspiration alive, especially during the pandemic, with support from the German administration for media and culture and association with Berlin's AVA Club.
          </p>
        </div>
      </div>
      <div className="images-container">
        <div><img src="images/artdirect-1.png" alt="" /></div>
        <div><img src="images/artdirect-2.png" alt="" /></div>
        <div><img src="images/artdirect-3.png" alt="" /></div>
        <div><img src="images/artdirect-4.png" alt="" /></div>
        <div><img src="images/artdirect-5.png" alt="" /></div>
        <div><img src="images/artdirect-6.png" alt="" /></div>
        <div><img src="images/artdirect-7.png" alt="" /></div>
        <div><img src="images/artdirect-8.png" alt="" /></div>
        <div><img src="images/artdirect-9.png" alt="" /></div>
        <div><img src="images/artdirect-10.png" alt="" /></div>
        <div><img src="images/artdirect-11.png" alt="" /></div>
      </div>
    </div>
  )
}