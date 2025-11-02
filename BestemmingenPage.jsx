import { useEffect, useState } from 'react';
import './BestemmingenPage.css';

function BestemmingenPage() {
  const [bestemmingen, setBestemmingen] = useState([]);

  useEffect(() => {
    fetch('http://localhost/module5.2/wp-json/acf/v3/bestemmingen')
      .then(res => res.json())
      .then(data => {
        setBestemmingen(data.map((item, index) => ({
          id: item.id,
          slug: item.slug,
          title: item.title.rendered,
          acf: item.acf,
          bgClass: index % 2 === 0 ? 'bg-wit' : 'bg-groen'
        })));
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const track = document.querySelector('.slideshow-track');
      const slides = document.querySelectorAll('.slide');
      if (track && slides.length > 0) {
        let index = parseInt(track.dataset.index || '0');
        index = (index + 1) % slides.length;
        track.style.transform = `translateX(-${index * 100}vw)`;
        track.dataset.index = index;
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home">
      <div className="slogan-balk">
        <p>Verre reizen. Voor iedereen uniek.</p>
      </div>

      <div className="slideshow-wrapper">
        <div className="slideshow-track" data-index="0">
          {bestemmingen.flatMap(item => {
            const slides = [];
            if (item.acf.hero_image?.url) {
              slides.push(
                <div className="slide" key={`hero-${item.id}`}>
                  <img src={item.acf.hero_image.url} alt={item.acf.hero_image.alt} />
                </div>
              );
            }
            if (item.acf.extra_foto?.url) {
              slides.push(
                <div className="slide" key={`extra-${item.id}`}>
                  <img src={item.acf.extra_foto.url} alt={item.acf.extra_foto.alt} />
                </div>
              );
            }
            return slides;
          })}
        </div>
      </div>

      <main className="bestemmingen-onepager">
        {bestemmingen.map(item => (
          <section key={item.id} id={item.slug} className={`bestemming-blok ${item.bgClass}`}>
            <h2 className="bestemming-titel">{item.title}</h2>

            {item.acf.hero_image?.url && (
              <div className="hero-image">
                <img src={item.acf.hero_image.url} alt={item.acf.hero_image.alt} />
              </div>
            )}

            <div className="bestemming-content">
              <div className="linkerkant">
                {item.acf.pluspunt_1 && (
                  <div className="weetjes">
                    <h3>Leuke pluspunten om te weten</h3>
                    <ul>
                      {[1, 2, 3, 4, 5].map(i => {
                        const punt = item.acf[`pluspunt_${i}`];
                        return punt ? <li key={i}>{punt}</li> : null;
                      })}
                    </ul>
                  </div>
                )}

                {item.acf.extra_foto?.url && (
                  <div className="extra-foto">
                    <img src={item.acf.extra_foto.url} alt={item.acf.extra_foto.alt} />
                  </div>
                )}
              </div>

              <div className="rechterkant">
                {item.acf.informatie && (
                  <div className="informatie">
                    <h3>Informatie</h3>
                    <p>{item.acf.informatie}</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default BestemmingenPage;
