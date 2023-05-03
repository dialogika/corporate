// Header
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    
    `;
  }
}

//Footer
class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <!-- ======= Footer ======= -->
    <footer id="footer">
  
      <div class="footer-top">
        <div class="container">
          <div class="row justify-content-between">
  
            <div class="col-lg-3 col-md-6 footer-contact text-start">
              <h3><img src="assets/img/white-logo.png" class="footer-logo" alt="Kelas Public Speaking Jogja" /></h3>
              <p class="text-start" >
                Wadah pengembangan diri membangun aura positif sekaligus meningkatkan kualitas skill, karir hingga level
                kehidupan Anda.
              </p><br>
              <p class="text-start">Kami memberikan pelatihan Kelas Public Speaking karena dengan menguasai Public Speaking, mental,perilaku, penampilan hingga sikap Anda terbentuk.</p><br>
              <h4 class="d-flex justify-content-between">Contact Us<i class='bx bx-chevron-down d-md-none'></i></h4>
              <div class="social-link d-flex mt-3">
                <a href="https://link.dialogika.co/wasap-2597-dialogika-co"
                  class="d-flex align-items-center justify-content-center"><i class="bx bxl-whatsapp"></i></a>
                <a href="mailto:hello@dialogika.co" class="d-flex align-items-center justify-content-center">
                  <i class='bx bxs-envelope'></i></a>
              </div>
              <hr />
              <p>Punya pertanyaan mengenai Dialogika?</p>
              <br>
              <p>
                <strong>Phone:</strong> +62 851-6299-2597<br>
                <strong>Email:</strong> hello@dialogika.co<br>
              </p>
              <br><br>
              <h4 class="d-flex justify-content-between">Follow Us<i class='bx bx-chevron-down d-md-none'></i></h4>
              <div class="social-link d-flex mt-3">
                <a href="https://link.dialogika.co/twitter" class="d-flex align-items-center justify-content-center"><i
                    class="bx bxl-twitter"></i></a>
                <a href="https://link.dialogika.co/facebook" class="d-flex align-items-center justify-content-center"><i
                    class="bx bxl-facebook-circle"></i></a>
                <a href="https://link.dialogika.co/instagram" class="d-flex align-items-center justify-content-center"><i
                    class="bx bxl-instagram-alt"></i></a>
                <a href="https://link.dialogika.co/linkedin" class="d-flex align-items-center justify-content-center"><i
                    class="bx bxl-linkedin-square"></i></a>
              </div>
            </div>
  
            <div class="col-lg-2 col-md-6 footer-links accordion">
              <a href="#footer-best-program" class="d-flex justify-content-between" data-bs-toggle="collapse"
                id="footer-accordion">
                <h4>Best Program</h4><i class='bx bx-chevron-down d-md-none'></i>
              </a>
              <ul class="accordion-collapse collapse show" id="footer-best-program" data-bs-parent=".footer-links">
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../program/basic-plus.html">Online Class</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../program/first-class.html">Offline Class</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../program/kids-class.html">Kids Class</a>
                </li>
              </ul><br>
              <a href="#footer-corporate-program" class="d-flex justify-content-between" data-bs-toggle="collapse"
                id="footer-accordion">
                <h4>Corporate Program</h4><i class='bx bx-chevron-down d-md-none'></i>
              </a>
              <ul class="accordion-collapse collapse show" id="footer-corporate-program">
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../corporate/workshop.html">Workshop</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../corporate/webinar.html">Webinar</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../corporate/class.html">Class</a>
                </li>
              </ul><br>
              <a href="#footer-private-program" class="d-flex justify-content-between" data-bs-toggle="collapse"
                id="footer-accordion">
                <h4>Private Program</h4><i class='bx bx-chevron-down d-md-none'></i>
              </a>
              <ul class="accordion-collapse collapse show" id="footer-private-program" data-bs-parent=".footer-links">
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../private/basic-private.html">Online Private</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../private/first-private.html">Offline Private</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../private/kids-private.html">Kids Private</a>
                </li>
              </ul>
              <br>
              <a href="#footer-career-info" class="d-flex justify-content-between" data-bs-toggle="collapse"
                id="footer-accordion">
                <h4>Career Info</h4><i class='bx bx-chevron-down d-md-none'></i>
              </a>
              <ul class="accordion-collapse collapse show" id="footer-career-info" data-bs-parent=".footer-links">
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../about/registration.html">Team</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../mentor/registration.html">Mentor</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../intern/index.html">Internship</a>
                </li>
              </ul>
              <br>
              <a href="#footer-useful-link" class="d-flex justify-content-between" data-bs-toggle="collapse"
                id="footer-accordion">
                <h4>Useful Link</h4><i class='bx bx-chevron-down d-md-none'></i>
              </a>
              <ul class="accordion-collapse collapse show" id="footer-useful-link" data-bs-parent=".footer-links">
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../blog/index.html">Blog Dialogika</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../mentor/index.html">Mentor Dialogika</a>
                </li>
              </ul>
            </div>
  
            <div class="col-lg-3 col-md-6 footer-links">
              <a href="#footer-our-service" class="d-flex justify-content-between" data-bs-toggle="collapse"
                id="footer-accordion">
                <h4>Our Service</h4><i class='bx bx-chevron-down d-md-none'></i>
              </a>
              <ul class="accordion-collapse collapse show" id="footer-our-service" data-bs-parent=".footer-links">
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../service/counseling/">Counseling</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../service/mentoring/">Mentoring</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../service/agency/">Agency</a>
                </li>
              </ul>
              <br>
              <a href="#footer-event-agency" class="d-flex justify-content-between" data-bs-toggle="collapse"
                id="footer-accordion">
                <h4>Event Agency</h4><i class='bx bx-chevron-down d-md-none'></i>
              </a>
              <ul class="accordion-collapse collapse show" id="footer-event-agency" data-bs-parent=".footer-links">
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../service/agency/emcee.html">Master of Ceremony</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../service/agency/host.html">Host</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../service/agency/moderator.html">Moderator</a>
                </li>
              </ul>
              <br>
              <a href="#footer-counseling-program" class="d-flex justify-content-between" data-bs-toggle="collapse"
                id="footer-accordion">
                <h4>Counseling</h4><i class='bx bx-chevron-down d-md-none'></i>
              </a>
              <ul class="accordion-collapse collapse show" id="footer-counseling-program" data-bs-parent=".footer-links">
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../service/counseling/relationship.html">Relationship</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../service/counseling/parenting.html">Parenting</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../service/counseling/kids.html">Children</a>
                </li>
              </ul>
              <br>
              <a href="#footer-about-dialogika" class="d-flex justify-content-between" data-bs-toggle="collapse"
                id="footer-accordion">
                <h4>About Dialogika</h4><i class='bx bx-chevron-down d-md-none'></i>
              </a>
              <ul class="accordion-collapse collapse show" id="footer-about-dialogika" data-bs-parent=".footer-links">
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../about/">About Us</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../about/faq.html">FAQ</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../about/help.html">Help Center</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../about/privacy.html">Privacy Policy</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../about/terms.html">Terms & Agreements</a>
                </li>
              </ul>
            </div>
  
            <div class="col-lg-4 col-md-6 footer-newsletter text-start">
              <h4 class="d-flex justify-content-between">Join Whatsapp Group Community<i
                  class='bx bx-chevron-down d-md-none'></i></h4>
              <p>Secara Berkala Kami Akan Bagi-Bagi Tips & Trik Gratis, Dan Info Promo Lainnya</p>
              <form action="javascript:void" role="form" id="subcriptions" method="post">
                <input type="tel" name="Surel" placeholder="Nomor Whatsapp"><input type="submit" value="Join Now"
                  onclick="Subcription()">
              </form>
              <br><br>
              <h4 class="d-flex justify-content-between">Payment Method<i class='bx bx-chevron-down d-md-none'></i></h4>
              <p><i class="bx bx-chevron-down"></i> Bank Transfer</p>
              <img src="assets/img/bank.png" />
              <br><br>
              <p><i class="bx bx-chevron-down"></i> E-Wallet</p>
              <img src="assets/img/wallet.png" />
  
              <div class="card">
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 text-muted" style="color:#fff;">Telah Terdaftar Oleh</h6>
                  <img src="assets/img/ham.png" class="" /><br>
                  <p>
                    <strong>Nomor:</strong> AHU-0118640.AH.01.11.TAHUN 2022<br>
                    <strong>Registrasi: </strong>4022062334106037<br />
                  </p>
                </div>
              </div>
  
            </div>
  
          </div>
        </div>
      </div>
  
      <div class="container d-md-flex py-4">
  
        <div class="me-md-auto text-center text-md-start">
          <div class="copyright">
            &copy; Copyright <strong><span>Dialogika</span></strong> | PT. Dialogika Persona Indonesia
          </div>
  
        </div>
        <div class="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="https://link.dialogika.co/twitter" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="https://link.dialogika.co/facebook" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="https://link.dialogika.co/instagram" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="https://link.dialogika.co/wasap-2597-dialogika-co" class="google-plus"><i
              class="bx bxl-whatsapp"></i></a>
          <a href="https://link.dialogika.co/linkedin" class="linkedin"><i class="bx bxl-linkedin"></i></i></a>
        </div>
      </div>
    </footer>
    <!-- End Footer -->
    `;
  }
}

customElements.define("main-header", Header);
customElements.define("main-footer", Footer);