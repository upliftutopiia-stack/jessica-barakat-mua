"use client";

import { useEffect, useState } from "react";

const instagram = "https://www.instagram.com/jessicabarakat_mua/";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={`header ${menuOpen ? "open" : ""}`}>
        <a href="#home" className="logo" onClick={closeMenu}>
          JESSICA
          <span>BARAKAT</span>
        </a>

        <nav className="desktop-nav">
          <a href="#artistry">Artistry</a>
          <a href="#bridal">Bridal</a>
          <a href="#occasions">Occasions</a>
          <a href="#lessons">Lessons</a>
          <a href="#contact">Enquiries</a>
        </nav>

        <a
          href={instagram}
          target="_blank"
          rel="noreferrer"
          className="header-cta"
        >
          Enquire <span>↗</span>
        </a>

        <button
          type="button"
          className={`menu ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          <p>JESSICA BARAKAT · SYDNEY MUA</p>

          <nav>
            <a href="#artistry" onClick={closeMenu}>
              <span>01</span> Artistry
            </a>
            <a href="#bridal" onClick={closeMenu}>
              <span>02</span> Bridal
            </a>
            <a href="#occasions" onClick={closeMenu}>
              <span>03</span> Occasions
            </a>
            <a href="#lessons" onClick={closeMenu}>
              <span>04</span> Lessons
            </a>
            <a href="#contact" onClick={closeMenu}>
              <span>05</span> Enquiries
            </a>
          </nav>

          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="mobile-social"
          >
            @JESSICABARAKAT_MUA ↗
          </a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-top">
          <span>SYDNEY / AUSTRALIA</span>
          <span>BRIDAL · OCCASIONS · 1:1 LESSONS</span>
        </div>

        <div className="hero-main">
          <div className="hero-copy">
            <p className="eyebrow">JESSICA BARAKAT · MAKEUP ARTIST</p>

            <h1>
              Beauty,
              <br />
              <em>considered.</em>
            </h1>

            <p className="hero-description">
              Makeup artistry for brides, special occasions and those wanting
              to learn their own approach to makeup.
            </p>

            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="main-link"
            >
              ENQUIRE WITH JESSICA <span>↗</span>
            </a>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="art-meta">
              <span>JB / 01</span>
              <span>MAKEUP ARTISTRY</span>
            </div>

            <div className="portrait">
              <div className="hair" />
              <div className="face">
                <i className="brow left" />
                <i className="brow right" />
                <i className="eye left" />
                <i className="eye right" />
                <i className="nose" />
                <i className="lips" />
              </div>
              <div className="neck" />
              <div className="shoulders" />
            </div>

            <div className="art-line line-one" />
            <div className="art-line line-two" />

            <strong>JB</strong>
          </div>
        </div>

        <div className="hero-footer">
          <div>
            <span>01</span>
            <p>Bridal</p>
          </div>
          <div>
            <span>02</span>
            <p>Special Occasions</p>
          </div>
          <div>
            <span>03</span>
            <p>1:1 Lessons</p>
          </div>
          <div>
            <span>04</span>
            <p>10+ Years Experience</p>
          </div>
        </div>
      </section>

      <section className="statement" id="artistry">
        <div className="section-label">
          <span>01</span>
          <p>THE ARTISTRY</p>
        </div>

        <div className="statement-content">
          <p className="small-label">MAKEUP WITH INTENTION</p>

          <h2>
            Created for the
            <br />
            <em>person wearing it.</em>
          </h2>

          <div className="statement-text">
            <p>
              Jessica&apos;s work spans bridal and special occasion makeup,
              alongside one-to-one lessons.
            </p>

            <p>
              Every appointment begins with the individual, the occasion and
              the way they want to feel when the look comes together.
            </p>
          </div>
        </div>
      </section>

      <section className="bridal" id="bridal">
        <div className="bridal-art" aria-hidden="true">
          <div className="bridal-meta">
            <span>BRIDAL / SYDNEY</span>
            <span>02</span>
          </div>

          <div className="veil veil-one" />
          <div className="veil veil-two" />

          <div className="bridal-face">
            <div className="bridal-eye">
              <span />
            </div>
            <div className="bridal-lip" />
          </div>

          <p>BRIDE</p>
        </div>

        <div className="bridal-copy">
          <span className="section-index">02 / BRIDAL</span>

          <p className="small-label">FOR THE DAY THAT STAYS WITH YOU</p>

          <h2>
            Bridal beauty,
            <br />
            <em>made personal.</em>
          </h2>

          <p className="body-copy">
            Bridal makeup by Jessica is created for the person at the centre of
            the day — with a considered approach to the overall look and
            occasion.
          </p>

          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="main-link"
          >
            BRIDAL ENQUIRIES <span>↗</span>
          </a>
        </div>
      </section>

      <section className="occasions" id="occasions">
        <div className="occasions-heading">
          <div className="section-label">
            <span>03</span>
            <p>SPECIAL OCCASIONS</p>
          </div>

          <h2>
            Whatever you&apos;re
            <br />
            getting ready <em>for.</em>
          </h2>
        </div>

        <div className="occasion-layout">
          <div className="occasion-copy">
            <p className="occasion-lead">
              Makeup for the moments when getting ready deserves its own
              appointment.
            </p>

            <p>
              Jessica offers makeup for special occasions alongside her bridal
              work, giving clients a professional makeup option for the events
              that matter to them.
            </p>

            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="main-link dark-link"
            >
              MAKE AN ENQUIRY <span>↗</span>
            </a>
          </div>

          <div className="occasion-art" aria-hidden="true">
            <div className="occasion-top">
              <span>JESSICA BARAKAT</span>
              <span>SYDNEY</span>
            </div>

            <div className="lip-shape">
              <div className="lip-line" />
            </div>

            <div className="occasion-circle">
              <span>03</span>
            </div>

            <p>OCCASION</p>
          </div>
        </div>
      </section>

      <section className="experience">
        <div className="experience-copy">
          <span>04 / EXPERIENCE</span>

          <h2>
            More than
            <br />
            <strong>10</strong> years
            <br />
            <em>in artistry.</em>
          </h2>
        </div>

        <div className="experience-detail">
          <div className="experience-ring">
            <span>10+</span>
            <p>YEARS</p>
          </div>

          <p>
            Jessica&apos;s public profile notes more than ten years of
            experience as a makeup artist.
          </p>
        </div>
      </section>

      <section className="lessons" id="lessons">
        <div className="lesson-heading">
          <div className="section-label">
            <span>05</span>
            <p>1:1 LESSONS</p>
          </div>

          <p className="small-label">FROM ARTIST TO YOU</p>

          <h2>
            Learn your
            <br />
            own <em>makeup.</em>
          </h2>
        </div>

        <div className="lesson-content">
          <div className="lesson-art" aria-hidden="true">
            <div className="lesson-top">
              <span>ONE</span>
              <span>TO</span>
              <span>ONE</span>
            </div>

            <div className="mirror">
              <div className="mirror-face">
                <span className="mirror-eye" />
                <span className="mirror-nose" />
                <span className="mirror-mouth" />
              </div>
            </div>

            <div className="brush brush-one" />
            <div className="brush brush-two" />

            <p>01 : 01</p>
          </div>

          <div className="lesson-copy">
            <p className="lesson-lead">
              Personal makeup education, one-to-one with Jessica.
            </p>

            <p>
              Jessica also offers 1:1 makeup lessons for clients who want time
              focused specifically on learning and developing their own makeup
              skills.
            </p>

            <div className="lesson-points">
              <div>
                <span>01</span>
                <p>One-to-one format</p>
              </div>
              <div>
                <span>02</span>
                <p>Personal makeup learning</p>
              </div>
              <div>
                <span>03</span>
                <p>Directly with Jessica</p>
              </div>
            </div>

            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="main-link dark-link"
            >
              ASK ABOUT 1:1 LESSONS <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="profile">
        <div className="profile-name">
          <span>THE ARTIST</span>
          <h2>
            Jessica
            <br />
            <em>Barakat.</em>
          </h2>
        </div>

        <div className="profile-copy">
          <p>
            Sydney-based makeup artistry across bridal, special occasions and
            one-to-one makeup lessons.
          </p>

          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="main-link"
          >
            VIEW INSTAGRAM <span>↗</span>
          </a>
        </div>

        <div className="profile-mark" aria-hidden="true">
          <span>J</span>
          <span>B</span>
        </div>
      </section>

      <section className="social">
        <div className="social-head">
          <span>06 / SOCIAL</span>
          <span>@JESSICABARAKAT_MUA</span>
        </div>

        <div className="social-content">
          <p>FOLLOW THE ARTISTRY</p>

          <h2>
            More looks.
            <br />
            More <em>Jessica.</em>
          </h2>

          <a href={instagram} target="_blank" rel="noreferrer">
            <span>@</span>
            jessicabarakat_mua
            <i>↗</i>
          </a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-meta">
          <span>07 / ENQUIRIES</span>
          <span>SYDNEY · NSW</span>
        </div>

        <div className="contact-main">
          <p className="small-label">YOUR NEXT OCCASION STARTS HERE</p>

          <h2>
            Ready when
            <br />
            <em>you are.</em>
          </h2>

          <p className="contact-copy">
            For bridal, special occasion or 1:1 lesson enquiries, connect with
            Jessica through Instagram.
          </p>

          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="contact-button"
          >
            <span>ENQUIRE ON INSTAGRAM</span>
            <i>↗</i>
          </a>
        </div>
      </section>

      <footer>
        <a href="#home" className="footer-logo">
          JESSICA <span>BARAKAT</span>
        </a>

        <p>SYDNEY MAKEUP ARTIST</p>

        <a href={instagram} target="_blank" rel="noreferrer">
          INSTAGRAM ↗
        </a>
      </footer>
    </main>
  );
}