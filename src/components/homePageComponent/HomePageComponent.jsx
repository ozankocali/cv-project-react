import "./HomePageComponent.css";

const HomePageComponent = () => {
  return (
    <div class="container">
      <div class="main-body">
        <div class="row gutters-sm">
          <div class="col-md-4 mb-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C5603AQFo5lJ-I2jk0Q/profile-displayphoto-shrink_800_800/0/1617624106096?e=1653523200&v=beta&t=3ZHHKg47V-avsn5P1NEAd-EXe5cTMC8gnTIL2_SyCII"
                    alt="Admin"
                    class="rounded-circle"
                    width="150"
                  />
                  <div class="mt-3">
                    <h4>Ozan Koçali</h4>
                    <p class="text-secondary mb-1">Full Stack Developer</p>
                    <p class="text-muted font-size-sm">Edirne,Türkiye</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mt-3">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 class="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      class="feather feather-globe mr-2 icon-inline"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    Website
                  </h6>
                  <span class="text-secondary">www.ozankocali.net</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 class="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      class="feather feather-github mr-2 icon-inline"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Github
                  </h6>
                  <span class="text-secondary">ozankocali</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 class="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      class="feather feather-twitter mr-2 icon-inline text-info"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                    Twitter
                  </h6>
                  <span class="text-secondary">@ozankocali</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 class="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      class="feather feather-instagram mr-2 icon-inline text-danger"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    Instagram
                  </h6>
                  <span class="text-secondary">ozankocali</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 class="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      class="feather feather-facebook mr-2 icon-inline text-primary"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    Facebook
                  </h6>
                  <span class="text-secondary">ozankocali</span>
                </li>
              </ul>
            </div>
            <div class="card mt-3">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h3 class="mb-0">Eğitim</h3>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h5 class="mb-0">Lise</h5>
                  <span class="text-secondary">Mehmet Niyazi Altuğ A.L.</span>
                  <span class="text-secondary">~{"\n"}(2015-2019)</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h5 class="mb-0">Üniversite</h5>
                  <span class="text-secondary">Trakya Üniversitesi</span>
                  <span class="text-secondary">
                    Bilgisayar Mühendisliği Bölümü(2019-2023)
                  </span>
                </li>
              </ul>
            </div>
            <div class="card mt-3">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h3 class="mb-0">İş Tecrübesi</h3>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h5 class="mb-0">Full-Stack Geliştirici</h5>
                  <span class="text-secondary">Somera</span>
                  <span class="text-secondary">Full-Stack Geliştirici (2021-)</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card mb-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Tam Ad</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">Ozan Koçali</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">E-posta</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    ozan.kocali@hotmail.com
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Telefon</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">(111) 111-1111</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Mobil</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">(535) 535-5353</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Adres</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    Edirne/Merkez, Türkiye
                  </div>
                </div>
              </div>
            </div>

            <div class="card mb-3">
              <div class="card-body">
                <h1>Özgeçmiş</h1>
                <h6>
                  2001 yılının mart ayında İstanbul'da doğdum. Lise Eğitimimi
                  Mehmet Niyazi Altuğ Anadolu Lisesi'nde sürdürürken yazılım ile
                  ilgilenmeye başladım. Lise yıllarında c# ve python ile yazılım
                  öğrenme sürecim başladı. 2019 yılında Edirne Trakya
                  Üniversitesi Bilgisayar Mühendisliği bölümünde öğrenim görmeye
                  başladım. İkinci yılıma geldiğimde üzerinde profesyonelleşmem
                  gereken alanların backend ve frontend geliştime olduğu
                  konusunda karar kıldım. Backend ve frontend geliştirmenin
                  yanında veritabanı ve docker becerilerimi de geliştirdim.
                </h6>
              </div>
            </div>

            <div class="row gutters-sm">
              <div class="col-sm-6 mb-3">
                <div class="card h-100">
                  <div class="card-body">
                    <h6 class="d-flex align-items-center mb-3">
                      <i class="material-icons text-info mr-2">Yetenekler</i>
                      Geliştirici Yetenekleri
                    </h6>
                    <small>Java</small>
                    <div class="progress mb-3" style={{ height: "5px" }}>
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>Spring</small>
                    <div class="progress mb-3" style={{ height: "5px" }}>
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>TypeScript</small>
                    <div class="progress mb-3" style={{ height: "5px" }}>
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>Angular</small>
                    <div class="progress mb-3" style={{ height: "5px" }}>
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>HTML/CSS/JS</small>
                    <div class="progress mb-3" style={{ height: "5px" }}>
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "60%" }}
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>SQL</small>
                    <div class="progress mb-3" style={{ height: "5px" }}>
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>Docker</small>
                    <div class="progress mb-3" style={{ height: "5px" }}>
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "40%" }}
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 mb-3">
                <div class="card h-100">
                  <div class="card-body">
                    <h6 class="d-flex align-items-center mb-3">
                      <i class="material-icons text-info mr-2">Yetenekler</i>
                      İletişim Yetenekleri
                    </h6>
                    <small>Üreticilik</small>
                    <div class="progress mb-3" style={{ height: "5px" }}>
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "95%" }}
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>Takım Çalışması</small>
                    <div class="progress mb-3" style={{ height: "5px" }}>
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>Çalışkanlık</small>
                    <div class="progress mb-3" style={{ height: "5px" }}>
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>Analitik Düşünce</small>
                    <div class="progress mb-3" style={{ height: "5px" }}>
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>Sağlıklı İletişim</small>
                    <div class="progress mb-3" style={{ height: "5px" }}>
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "60%" }}
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>Araştırma</small>
                    <div class="progress mb-3" style={{ height: "5px" }}>
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>Yenilikçilik</small>
                    <div class="progress mb-3" style={{ height: "5px" }}>
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "40%" }}
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePageComponent;
