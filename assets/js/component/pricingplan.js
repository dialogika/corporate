class Plan extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <section id="in-price" class="in-price-section">
      <div class="container">
        <div
          class="in-section-title-2 in-title-wrap text-center headline pera-content"
        >
          <div class="sub-title text-uppercase">Pricing Plan</div>
          <h2>Start Mulai Harga</h2>
          <p>
            Idealnya kelas berjalan secara bulanan untuk memantau hasil yang optimal dan perkembangan peserta secara berkala.
          </p>
        </div>
        <div class="in-price-content">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6">
              <div class="in-price-inner-items text-center">
                <div class="pricing-title-price-area headline">
                  <h2>STARTER</h2>
                  <h3><sup>RP.</sup>7.975.000</h3>
                  <span>Per Month / PAX</span>
                </div>
                <div class="pricing-list-btn position-relative">
                  <div class="pricing-list ul-li-block">
                    <ul>
                      <li>4x Pertemuan (MAX)</li>
                      <li>2 Material (MAX)</li>
                      <li>Offline / Online</li>
                      <li>Exclude Transport</li>
                      <li>Free Practice Class 1 Month</li>
                    </ul>
                  </div>
                  <div class="price-btn">
                    <div class="in-btn-1">
                      <a href="#">Choose Plan</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="in-price-inner-items text-center">
                <div class="pricing-title-price-area headline">
                  <h2>PREMIUM</h2>
                  <h3><sup>RP.</sup>4.798.000</h3>
                  <span>Per Month / PAX</span>
                </div>
                <div class="pricing-list-btn position-relative">
                  <div class="pricing-list ul-li-block">
                    <ul>
                      <li>8x Pertemuan (MAX)</li>
                      <li>4 Material (MAX)</li>
                      <li>Offline / Online</li>
                      <li>Exclude Transport</li>
                      <li>Free Practice Class 2 Month</li>
                    </ul>
                  </div>
                  <div class="price-btn">
                    <div class="in-btn-1">
                      <a href="#">Choose Plan</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="in-price-inner-items text-center">
                <div class="pricing-title-price-area headline">
                  <h2>ULTRA</h2>
                  <h3><sup>RP.</sup>3.589.000</h3>
                  <span>Per Month / PAX</span>
                </div>
                <div class="pricing-list-btn position-relative">
                  <div class="pricing-list ul-li-block">
                    <ul>
                      <li>12x Pertemuan (MAX)</li>
                      <li>4 Material (MAX)</li>
                      <li>Offline / Online</li>
                      <li>Exclude Transport</li>
                      <li>Free Practice Class 3 Month</li>
                    </ul>
                  </div>
                  <div class="price-btn">
                    <div class="in-btn-1">
                      <a href="#">Choose Plan</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("pricing-plan", Plan);
