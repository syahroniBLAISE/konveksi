$(document).ready(function () {
  const gambarKonveksi = [
    "celana 01",
    "kemeja 01",
    "kemeja 02",
    "kemeja 03",
    "kemeja 04",
    "kemeja 05",
    "kemeja 06",
    "kemeja 07",
    "kemeja 08",
    "kemeja 09",
    "kemeja 10",
    "rompi 01",
    "wearpack 01",
  ];
  var count = gambarKonveksi.length;
  var jenisKonveksi = "kemeja";
  for (let i = 0; i < count; i++) {
    switch (i) {
      case 0:
        var jenisKonveksi = "celana";
        break;
      case 11:
        var jenisKonveksi = "rompi";
        break;
      case 12:
        var jenisKonveksi = "wearpack";
        break;
    }
    $(".portfolio-items").append(
      `<div class="col-sm-6 col-md-4 ` +
        jenisKonveksi +
        `">
            <div class="portfolio-item">
              <div class="hover-bg"> <a href="img/portfolio/` +
        gambarKonveksi[i] +
        `.jpeg" title="jersey` +
        i +
        `" data-lightbox-gallery="gallery1">
                  <div class="hover-text">
                    <h4>` +
        gambarKonveksi[i] +
        `</h4>
                  </div>
                  <img src="img/portfolio/` +
        gambarKonveksi[i] +
        `.jpeg" class="img-responsive" alt="Coklat">
                </a></div>
            </div>
          </div>`
    );
    var jenisKonveksi = "kemeja";
  }
});
