import "./About.css";

export const About = () => {
  return (
    <div className='container-about'>
      <div className='section-about'>
        <h2 className='sectionTitle-about'>About me</h2>
        <hr className='sectionSeparator' />
        <div className='content-about'>
          <div className='yearOfBirth'>1989</div>
          <div className='imageContainer-about'>
            <div className='imageText-about'>picture of me</div>
          </div>
          <div className='text-about'>
            <p className='description-about'>
              I'm Guille, a restless visual maker born in Zárate, Argentina and
              currently based in Berlin. Since childhood, I have been fascinated
              by visualising impressions and ideas. I grew up in a riverside
              town surrounded by nature. Birds inspired my curiosity, as I
              always wondered how the world is viewed from different
              perspectives.
            </p>
            <p className='description-about'>
              After having spent kilos of paper and pencils, and avoiding hours
              of boring subjects in school drawing over almost any surface I
              could find, I noticed this fascination could become a profession.
              Therefore I decided to enrol in the public university of Buenos
              Aires and pursue my passion.
            </p>
            <p className='description-about'>
              I studied graphic design in the School of Architecture, Design and
              Urbanism at the University of Buenos Aires and finished my studies
              in December 2016 with a focus on Branding Design. During my
              typography course I discovered a great passion for this
              discipline. Due to my strong interest and good work, I was given
              the opportunity to participate as a professor's assistant in 2015.
            </p>
            <p className='description-about'>
              For me, design is defined by the creative process, which means
              identifying a concept (what), choosing a tool (how), and setting
              support (where). I believe in visual communication as a bridge to
              link people with aware and responsible messages, generating a
              positive impact on society.
            </p>
            <p className='description-about'>
              As always, I have been interested in living new experiences and
              felt attracted by cultural diversity, arts, languages, the film
              world, technology, advertising, photography, and anything that can
              widen my cultural spectrum and provide me with more tools for my
              profession. For these reasons, I decided to apply for a work visa
              for Germany, where I have been living since June 2018.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
