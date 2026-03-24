function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h3>Airline Quests house</h3>
          <p>
            A unique aviation-inspired hostel offering cozy rooms and unbeatable
            hospitality for travelers.
          </p>
        </div>
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#rooms">Rooms</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Contact</h3>
          <p>Email: hello@airlinehostel.com</p>
          <p>Phone: +1 555 123 456</p>
          <p>Address: 123 Runway Ave, City, Country</p>
        </div>
      </div>
      <div className="socials">
        <a href="#" className="social-link">
          Facebook
        </a>
        <a href="#" className="social-link">
          Twitter
        </a>
        <a href="#" className="social-link">
          Instagram
        </a>
      </div>
      <p>&copy; 2026 Airline Quests house. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
