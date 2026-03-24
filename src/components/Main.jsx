import React from "react";

function Main() {
  return (
    <main className="col">
      <div className="main-hero">
        <div className="hero-image">
          <img src="/images/illustration-intro.png" alt="hero image" />
        </div>
        <section>
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>

          <button>Get Started</button>
        </section>
      </div>

      <div className="main-grid">
        <div className="col">
          <div>
            <img src="/images/icon-access-anywhere.svg" alt="icon-access" />
          </div>
          <section>
            <h2>Access your files, anywhere</h2>
            <p>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </section>
        </div>
        <div className="col">
          <div>
            <img src="/images/icon-security.svg" alt="icon-security" />
          </div>
          <section>
            <h2>Security you can trust</h2>
            <p>
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </section>
        </div>
        <div className="col">
          <div>
            <img
              src="/images/icon-collaboration.svg"
              alt="icon-collaboration"
            />
          </div>
          <section>
            <h2>Real-time collaboration</h2>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </section>
        </div>
        <div className="col">
          <div>
            <img src="/images/icon-any-file.svg" alt="icon-storage" />
          </div>
          <section>
            <h2>Store any type of file</h2>
            <p>
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </section>
        </div>
      </div>

      <div className="main-productive col">
        <div>
          <img src="/images/illustration-stay-productive.png" alt="image people as a team" />
        </div>
        <section>
          <h2>Stay productive, wherever you are</h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a className="row" href="#">
            See how Fylo works <img src="/images/icon-arrow.svg" />
          </a>
        </section>
      </div>

      <div className="main-articles col">
        <img className="quotes" src="/images/bg-quotes.png" alt="quotes" />
        <article>
          <p className="testimonial">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="user row">
            <img src="/images/profile-1.jpg" alt="profile-image" />
            <div className="user-details">
              <h3>Satish Patel</h3>
              <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </article>
        <article>
          <p className="testimonial">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="user row">
            <img src="/images/profile-2.jpg" alt="profile-image" />
            <div className="user-details">
              <h3>Bruce McKenzie</h3>
              <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </article>
        <article>
          <p className="testimonial">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="user row">
            <img src="/images/profile-3.jpg" alt="profile-image" />
            <div className="user-details">
              <h3>Iva Boyd</h3>
              <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

export default Main;
