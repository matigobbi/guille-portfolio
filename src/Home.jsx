/* eslint-disable react/no-unescaped-entities */

import "./App.css";

function Home() {
  return (
    <div className='home'>
      <section>
        <div className='text-home moving-name-container'>
          <h1 className='moving-name'>
            GuilleжNavarré-Lopez GuilleжNavarré-Lopez GuilleжNavarré-Lopez
            GuilleжNavarré-Lopez GuilleжNavarré-Lopez GuilleжNavarré-Lopez
          </h1>
        </div>
        <div className='white-line'></div>
        <div className='description-container'>
          <p>
            Guille Navarre Lopez is a graphic designer and illustrator based in
            Berlin. His works are focused on art direction, branding, UI,
            editorial design and motion graphics. Guille's designs combine the
            audacity and rebelliousness of a young visual creator with the
            astuteness and effectiveness of an experienced communicator.
          </p>
          <div> </div>
        </div>
        <div className='posterdesign-container'>
          <img src='images/GREECE-IG-SQUARE.png' alt='poster1' />
          <img src='images/EGYPT-IG-SQUARE.png' alt='poster1' />
          <img src='images/TBILISI-IG-SQUARE.png' alt='poster1' />
          <div className=''> Poster Design</div>
        </div>
        <div className='posterdesign-text'> Poster Design</div>
      </section>
    </div>
  );
}

export default Home;
