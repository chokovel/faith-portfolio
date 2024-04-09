import React from 'react'
import '../footer/footer.css'

function Footer() {
  return (
    <>
      <section>
        <footer className="bg-body-tertiar text-center text-lg-start">
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © {new Date().getFullYear()} Copyright: 
            <a className="footer-body" href="https://devfaith.com/">
               devfaith.com
            </a>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer
