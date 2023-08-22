import "./Branding.css";

export const Branding = () => {
  return (
    <div className='branding'>
      <div className='branding-title'>Branding</div>
      <div className='white-line'></div>
      <div className='container-movementhub'>
        <img src='images/movementhub-background.png' alt='' />
        <div className='themovementhub'>The movement hub</div>
      </div>
      <div className='container-texto-movementhub'>
        <p className='movementhub-2018'>2018</p>
        <div className='two-text-hub-container'>
          <p>
            Client <br />
            Movemente Hub
          </p>
          <p>
            Services <br />
            Brand Identity <br />
            Web Design
          </p>
          <img src='images/movementhub-logo1.png' alt='' />
        </div>
        <div className='text-container-hub'>
          <p>
            <b>The Movement Hub</b> is a platform that aims to strengthen social
            movements that work towards a climate-just future.{" "}
          </p>
          <p>
            They support groups and initiatives that educate and engage the
            public about ways to address the causes and effects of the climate
            crisis.
          </p>
        </div>
      </div>
    </div>
  );
};
