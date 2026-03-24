import { useState } from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import room1 from "./images/christopher-jolly-GqbU78bdJFM-unsplash.jpg";
import room2 from "./images/dulkimso-hakim-santoso-rX7L74Dz_bA-unsplash.jpg";
import room3 from "./images/japazon-fonkwo-Zk3XJ0zztX0-unsplash.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="hero-section">
          <div
            className="hero"
            id="home"
            style={{
              backgroundImage: `url(src/images/loris-boulinguez-S0VYuu8cw80-unsplash.jpg)`,
            }}
          >
            <div className="hero-content">
              <h1>Welcome to Airline Quests house</h1>
              <p>
                Experience the comfort of flying without leaving the ground. Our
                unique hostel offers a cozy atmosphere inspired by the world of
                aviation.
              </p>

              <button className="cta-button">Call Now</button>
            </div>
          </div>
        </section>
        <section className="rooms-section">
          <div className="Our-Rooms">
            <div>
              <h2>Our Rooms</h2>
              <p>
                Each room is designed to resemble the interior of an airplane,
                complete with comfortable beds, ambient lighting, and aviation
                decor. Whether you're a solo traveler or with friends, we have
                the perfect room for you.
              </p>
            </div>
            <div className="room-cards">
              <div className="room-card">
                <img src={room1} alt="Room 1" className="room-image" />
                <div className="sub-container">
                  <h3>Economy Class</h3>
                  <p className="price">$25/night</p>
                </div>
                <p>Shared • 4 beds</p>
                <p>
                  Cozy and affordable, our Economy Class rooms offer a
                  comfortable stay with all the essentials.
                </p>
              </div>
              <div className="room-card">
                <img src={room2} alt="Room 2" className="room-image" />
                <div className="sub-container">
                  <h3>Business Class</h3>
                  <p className="price">$45/night</p>
                </div>
                <p>Private • 2 beds</p>
                <p>
                  Spacious and stylish, our Business Class rooms provide extra
                  comfort and amenities for a relaxing stay.
                </p>
              </div>
              <div className="room-card">
                <img src={room3} alt="Room 3" className="room-image" />
                <div className="sub-container">
                  <h3>First Class</h3>
                  <p className="price">$75/night</p>
                </div>
                <p>Private suite • 1 bed</p>
                <p>
                  Experience luxury at its finest in our First Class rooms, with
                  premium furnishings and exclusive amenities.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="price-section">
          <div className="our-prices">
            <div>
              <h2>Pricing</h2>
            </div>
            <div className="price-cards">
              <div className="price-card">
                <h3>Single Room</h3>
                <p className="price">$500/month</p>
                <div>
                  <button className="cta-button">Whatsapp Now</button>
                </div>
              </div>
              <div className="price-card">
                <h3>Double Room</h3>
                <p className="price">$800/month</p>
                <div>
                  <button className="cta-button">Whatsapp Now</button>
                </div>
              </div>
              <div className="price-card">
                <h3>Shared Room</h3>
                <p className="price">$1200/month</p>
                <div>
                  <button className="cta-button">Whatsapp Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-section">
          <div className="about-container">
            <h2>About Us</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  Welcome to Airline Hostel, where we combine the comfort of
                  modern hospitality with the unique ambiance of aviation. Our
                  passion for travel and hospitality has driven us to create a
                  space where guests from around the world can connect and share
                  unforgettable experiences.
                </p>
                <p>
                  Founded with a vision to offer affordable, comfortable
                  accommodation for travelers and adventurers, Airline Hostel
                  has become a beloved destination for those seeking quality
                  stays in a welcoming community atmosphere. Each detail of our
                  hostel is designed to reflect our commitment to excellence and
                  guest satisfaction.
                </p>
                <p>
                  We take pride in providing exceptional service, comfortable
                  rooms, and genuine hospitality that makes every guest feel at
                  home. Whether you're visiting for business, leisure, or
                  adventure, Airline Hostel is your perfect base for exploring
                  and connecting with fellow travelers from across the globe.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-final-section">
          <div className="cta-final-content">
            <h2>Ready to Experience the Sky?</h2>
            <p>
              Join fellow travelers at Airline Hostel and create unforgettable
              memories in our unique aviation-inspired space.
            </p>
            <div className="cta-buttons">
              <button className="cta-button-primary">Book Your Stay Now</button>
              <button className="cta-button-secondary">Contact Us</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
