const FooterComponent = () => {
  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <footer class="footer_area section_padding_130_0">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="single-footer-widget section_padding_0_130">
                <div class="footer-logo mb-3"></div>

                <div class="copywrite-text mb-5">
                  <p class="mb-0">
                    Made with love by
                    <a
                      class="ml-1"
                      href="https://github.com/ozankocali"
                    >
                      Ozan Koçali
                    </a>
                  </p>
                </div>

                <div class="footer_social_area">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Facebook"
                  >
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Pinterest"
                  >
                    <i class="fa fa-pinterest"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Skype"
                  >
                    <i class="fa fa-skype"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Twitter"
                  >
                    <i class="fa fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
