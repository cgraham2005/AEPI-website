import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="site-header" aria-label="Primary navigation">
    <a class="brand" href="/" aria-label="AEPI home">
      <span class="brand-mark" aria-hidden="true">AEPi</span>
      <span>AEPI</span>
    </a>
    <nav class="nav-links" aria-label="Main navigation">
      <a href="#about">About</a>
      <a href="#events">Events</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Chapter website starter</p>
        <h1>AEPI</h1>
        <p>
          A clean Vite foundation for chapter news, recruitment,
          philanthropy, and upcoming events.
        </p>
        <div class="hero-actions" aria-label="Primary page actions">
          <a class="button button-primary" href="#events">View Events</a>
          <a class="button button-secondary" href="#contact">Get in Touch</a>
        </div>
      </div>
    </section>

    <section class="content-band" id="about" aria-labelledby="about-heading">
      <div class="section-heading">
        <p class="eyebrow">About</p>
        <h2 id="about-heading">Built for the chapter calendar.</h2>
      </div>
      <div class="feature-grid">
        <article class="feature-card">
          <h3>Recruitment</h3>
          <p>Share rush dates, interest forms, and chapter contact details.</p>
        </article>
        <article class="feature-card">
          <h3>Philanthropy</h3>
          <p>Highlight community work, fundraising goals, and recent impact.</p>
        </article>
        <article class="feature-card">
          <h3>Brotherhood</h3>
          <p>Publish updates, photos, and the moments that define the year.</p>
        </article>
      </div>
    </section>

    <section class="events-band" id="events" aria-labelledby="events-heading">
      <div class="section-heading">
        <p class="eyebrow">Events</p>
        <h2 id="events-heading">Upcoming chapter moments.</h2>
      </div>
      <div class="event-list">
        <article class="event-item">
          <time datetime="2026-05-03">May 3</time>
          <div>
            <h3>Spring Open House</h3>
            <p>Meet brothers, tour the house, and learn about the chapter.</p>
          </div>
        </article>
        <article class="event-item">
          <time datetime="2026-05-12">May 12</time>
          <div>
            <h3>Philanthropy Night</h3>
            <p>An evening fundraiser supporting the chapter's local cause.</p>
          </div>
        </article>
      </div>
    </section>
  </main>

  <footer class="site-footer" id="contact">
    <p>Ready for real content, photos, and chapter details.</p>
    <a href="mailto:hello@example.com">hello@example.com</a>
  </footer>
`
