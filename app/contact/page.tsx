export default function Contact() {
  return (
    <main>
      <div className="page-container">
        <section className="contact-section">
          <h1 className="contact-title">CONTACT ME</h1>

          <div className="contact-icons">
            <div className="contact-item">
              <img src="/wa.jpeg" alt="WhatsApp" className="contact-icon" />
              <p className="contact-label">WHATSAPP</p>
              <p className="contact-label">0881-0275-58179</p>
            </div>

            <div className="contact-item">
              <img src="/ig.jpeg" alt="Instagram" className="contact-icon" />
              <p className="contact-label">INSTAGRAM</p>
              <p className="contact-label">@lvarnda09</p>
            </div>

            <div className="contact-item">
              <img src="/tiktok.jpeg" alt="TikTok" className="contact-icon" />
              <p className="contact-label">TIKTOK</p>
              <p className="contact-label">@liviaarinda09</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}