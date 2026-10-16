"use client";

import { useState } from "react";

const menuItems = [
  {
    number: "01",
    name: "Seared Scallops",
    description: "Cauliflower silk, brown butter, fresh herbs",
    price: "$24",
    image: "photo-1599084993091-1cb5c0721cc6",
    tag: "CHEF'S PICK",
  },
  {
    number: "02",
    name: "Filet Mignon",
    description: "Prime beef, roasted shallots, red wine jus",
    price: "$42",
    image: "photo-1544025162-d76694265947",
    tag: "SIGNATURE",
  },
  {
    number: "03",
    name: "Burrata & Heirloom",
    description: "Seasonal tomatoes, basil oil, sourdough",
    price: "$19",
    image: "photo-1608039829572-78524f79c4c7",
    tag: "SEASONAL",
  },
];

function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="booking-panel">
      <div className="booking-heading">
        <span className="detail-label">PLAN YOUR VISIT</span>
        <h3>Save your <em>seat.</em></h3>
        <p>Tell us a little about your evening.</p>
      </div>

      {submitted ? (
        <div className="booking-success" role="status">
          <span className="success-mark">✓</span>
          <h4>Your request preview is ready.</h4>
          <p>
            This is a website demo. Your details have not been sent or saved,
            and no table has been booked.
          </p>
          <button className="booking-reset" type="button" onClick={() => setSubmitted(false)}>
            MAKE ANOTHER REQUEST ↗
          </button>
        </div>
      ) : (
        <form className="booking-form" onSubmit={handleSubmit}>
          <label>
            YOUR NAME
            <input name="name" autoComplete="name" placeholder="Full name" required maxLength={80} />
          </label>
          <label>
            EMAIL ADDRESS
            <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={120} />
          </label>
          <div className="booking-fields">
            <label>
              DATE
              <input name="date" type="date" min={new Date().toLocaleDateString("en-CA")} required />
            </label>
            <label>
              TIME
              <select name="time" defaultValue="" required>
                <option value="" disabled>Select time</option>
                <option>12:00 PM</option>
                <option>1:00 PM</option>
                <option>5:00 PM</option>
                <option>6:00 PM</option>
                <option>7:00 PM</option>
                <option>8:00 PM</option>
                <option>9:00 PM</option>
              </select>
            </label>
          </div>
          <label>
            PARTY SIZE
            <select name="guests" defaultValue="2">
              <option value="1">1 guest</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
              <option value="5">5 guests</option>
              <option value="6">6 guests</option>
              <option value="7+">7+ guests</option>
            </select>
          </label>
          <label>
            SPECIAL REQUESTS <span className="optional-label">OPTIONAL</span>
            <textarea name="notes" rows="3" placeholder="A special occasion, seating preference..." maxLength={500} />
          </label>
          <button className="button button-gold booking-submit" type="submit">
            PREVIEW RESERVATION REQUEST <span>↗</span>
          </button>
          <p className="booking-disclaimer">
            Demo only — this form does not contact a restaurant or confirm a booking.
          </p>
        </form>
      )}
    </div>
  );
}
function FoodImage({ photo, alt, className = "" }) {
  return (
    <img
      className={className}
      src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=1200&q=85`}
      alt={alt}
      loading="lazy"
    />
  );
}

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <span className="announcement-dot" />
        AN EVENING WORTH REMEMBERING
        <span className="announcement-divider">/</span>
        OPEN TUESDAY – SUNDAY
      </div>

      <header className="site-header">
        <a href="#" className="brand" aria-label="Savor House home">
          <span className="brand-mark">S<span>·</span>H</span>
          <span className="brand-name">SAVOR HOUSE<small>DINING · WINE · MOMENTS</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#story">Our Story</a>
          <a href="#menu">The Menu</a>
          <a href="#experience">The Experience</a>
        </nav>

        <a className="nav-reserve" href="#reserve">
          RESERVE A TABLE <span>↗</span>
        </a>
      </header>

      <section className="hero">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="eyebrow"><span /> A PLACE AT OUR TABLE</div>
          <h1>Good food.<br />Great <em>company.</em></h1>
          <p className="hero-copy">
            Thoughtfully sourced ingredients, inspired cooking, and the kind
            of evenings that stay with you.
          </p>
          <div className="hero-actions">
            <a href="#menu" className="button button-gold">EXPLORE OUR MENU <span>↗</span></a>
            <a href="#story" className="text-link">DISCOVER OUR STORY <span>↓</span></a>
          </div>
          <div className="hero-note">
            <span className="note-line" />
            <span>MADE WITH INTENTION. SERVED WITH HEART.</span>
          </div>
        </div>
        <div className="hero-side-label">A DIFFERENT KIND OF DINING</div>
        <a href="#story" className="scroll-cue"><span /> SCROLL TO DISCOVER</a>
        <div className="hero-index"><span>01</span> / 03</div>
      </section>

      <section className="intro section-pad" id="story">
        <div className="section-kicker"><span>01</span> THE SAVOR HOUSE PHILOSOPHY</div>
        <div className="intro-grid">
          <h2>Not just a meal.<br />A <em>feeling.</em></h2>
          <div className="intro-copy">
            <p>
              We believe the best moments happen when you slow down, pull up
              a chair, and let the evening unfold. Savor House brings seasonal
              ingredients, thoughtful hospitality, and a little unexpected
              magic to the table.
            </p>
            <a href="#experience" className="underlined-link">GET TO KNOW US <span>↗</span></a>
          </div>
        </div>
        <div className="intro-images">
          <div className="intro-image-main">
            <FoodImage photo="photo-1414235077428-338989a2e8c0" alt="Elegant restaurant dining table prepared for dinner" />
            <span className="image-caption">THE ART OF GATHERING</span>
          </div>
          <div className="intro-image-side">
            <FoodImage photo="photo-1517248135467-4c7edcad34c4" alt="Warm, intimate restaurant interior" />
            <div className="image-side-note"><span>EST.</span><strong>20<span>26</span></strong><small>ROOTED IN GOOD TASTE</small></div>
          </div>
        </div>
      </section>

      <section className="menu-section section-pad" id="menu">
        <div className="menu-heading">
          <div>
            <div className="section-kicker"><span>02</span> FROM OUR KITCHEN</div>
            <h2>A little taste<br />of <em>what we do.</em></h2>
          </div>
          <p>Season-led plates. Honest ingredients.<br />Flavours that speak for themselves.</p>
        </div>

        <div className="menu-grid">
          {menuItems.map((item) => (
            <article className="menu-card" key={item.number}>
              <div className="menu-card-image">
                <FoodImage photo={item.image} alt={item.name} />
                <span className="menu-tag">{item.tag}</span>
                <span className="menu-number">{item.number}</span>
              </div>
              <div className="menu-card-info">
                <div><h3>{item.name}</h3><p>{item.description}</p></div>
                <span className="menu-price">{item.price}</span>
              </div>
            </article>
          ))}
        </div>
        <p className="menu-disclaimer">A glimpse of our menu. Dishes and prices are illustrative and may change with the season.</p>
        <div className="menu-bottom"><span>GOOD THINGS TAKE TIME.</span><a href="#reserve" className="underlined-link">COME TASTE FOR YOURSELF <span>↗</span></a></div>
      </section>

      <section className="experience" id="experience">
        <div className="experience-image" />
        <div className="experience-content">
          <div className="section-kicker"><span>03</span> MORE THAN THE MENU</div>
          <h2>Stay for the<br /><em>atmosphere.</em></h2>
          <p>
            The first pour. The candlelight. The conversation that runs a
            little longer than planned. We save a place for all of it.
          </p>
          <a href="#reserve" className="button button-outline">MAKE AN EVENING OF IT <span>↗</span></a>
          <div className="experience-quote">“THE TABLE IS BETTER WHEN WE'RE ALL AT IT.”</div>
        </div>
      </section>

      <section className="reserve-section section-pad" id="reserve">
        <div className="section-kicker"><span>04</span> YOUR TABLE IS WAITING</div>
        <div className="reserve-grid">
          <div>
            <h2>Let's make<br />it an <em>evening.</em></h2>
            <p className="reserve-copy">Date night, a long-overdue catch-up, or simply a reason to treat yourself. We'd love to have you.</p>
            <a className="button button-gold" href="mailto:hello@savorhouse.example?subject=Table%20Reservation%20Enquiry">ENQUIRE ABOUT A TABLE <span>↗</span></a>
          </div>
          <div className="reserve-details">
            <div className="detail-block">
              <span className="detail-label">FIND US</span>
              <p>123 The Dining Quarter<br />Your City, Your Country</p>
            </div>
            <div className="detail-block">
              <span className="detail-label">COME BY</span>
              <p>Tue – Thu <span>5:00 PM – 10:00 PM</span><br />Fri – Sun <span>12:00 PM – 11:00 PM</span><br />Monday <span>Closed</span></p>
            </div>
            <div className="detail-block">
              <span className="detail-label">SAY HELLO</span>
              <p><a href="mailto:hello@savorhouse.example">hello@savorhouse.example</a></p>
            </div>
            <p className="demo-note">Restaurant details are demo placeholders. Update the address, hours, email, menu and prices before presenting this concept to a real client.</p>
          </div>
        </div>
        <ReservationForm />
      </section>

      <footer className="site-footer">
        <a href="#" className="brand footer-brand">
          <span className="brand-mark">S<span>·</span>H</span>
          <span className="brand-name">SAVOR HOUSE<small>DINING · WINE · MOMENTS</small></span>
        </a>
        <p>GOOD FOOD. GREAT COMPANY. ALWAYS.</p>
        <a href="#" className="back-top">BACK TO TOP ↑</a>
        <div className="footer-bottom"><span>© 2026 MaintainCraft Studio · Original demo concept</span><span>MACHpath · DIGITAL BRAND</span></div>
      </footer>
    </main>
  );
}