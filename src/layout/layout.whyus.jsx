import ic_complete from "../assets/icon/ic_complete.svg";
import ic_price from "../assets/icon/ic_price.svg";
import ic_24hrs from "../assets/icon/ic_24hrs.svg";
import ic_professional from "../assets/icon/ic_professional.svg";

const Whyus = () => {
  return (
    <section className="container section-whyus">
      <div className="section-box-whyu-content">
        <h2 className="section-whyus-title">Why Us?</h2>
        <p className="section-whyus-paragraph">
          Mengapa harus pilih Binar Car Rental?
        </p>
        <div className="section-whyus-grid">
          <div className="section-box-whyus">
            <span className="section-whyus-icon">
              <img src={ic_complete} alt="ic-balls" />
            </span>
            <h3 className="section-whyus-title">Mobil Lengkap</h3>
            <p className="section-whyus-paragraph">
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </p>
          </div>
          <div className="section-box-whyus">
            <span className="section-whyus-icon">
              <img src={ic_price} alt="ic-balls" />
            </span>
            <h3 className="section-whyus-title">Harga Murah</h3>
            <p className="section-whyus-paragraph">
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </p>
          </div>
          <div className="section-box-whyus">
            <span className="section-whyus-icon">
              <img src={ic_24hrs} alt="ic-balls" />
            </span>
            <h3 className="section-whyus-title">Layanan 24 Jam</h3>
            <p className="section-whyus-paragraph">
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </p>
          </div>
          <div className="section-box-whyus">
            <span className="section-whyus-icon">
              <img src={ic_professional} alt="ic-balls" />
            </span>
            <h3 className="section-whyus-title">Sopir Profesional</h3>
            <p className="section-whyus-paragraph">
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
