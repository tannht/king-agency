import InfoButton from "../../../components/InfoButton";
import SubMenu from "../../../components/sub_components/SubMenu";
import "./Info.scss";
import ScrollAnimation from 'react-animate-on-scroll';

const Info = () => (
  <ScrollAnimation animateIn='fadeIn'
  delay={500}
  >
  <div className="Info container">
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info-bg-1"></div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info">
        <h4>Về chúng tôi</h4>
        <h3>
          Kagency là một trong những công ty con trực thuộc hệ sinh thái của tập
          đoàn Kingdom Việt Nam. Cùng sánh vai với các công ty thuộc hệ thống:
        </h3>
        <p>
          <strong>DEENET</strong>hệ thống phòng net.
        </p>
        <p>
          <strong>One-K</strong> công ty cung cấp phần mềm quản lý phòng máy
        </p>
        <p>
          <strong>K-Menet</strong> nơi tập trung đào tạo, quản lý, phát triển
          Streamer, tuyển thủ Esport, KOLs chuyên nghiệp.
        </p>
        <p>
          <strong>K-Store</strong> công ty cung cấp các sản phẩm về công nghệ
          phòng game.
        </p>
        <p>
          <strong>Kagency</strong> được thành lập khi thấu hiểu nhu cầu của công
          việc truyền thông là đưa đến chiến lược, giải pháp giúp doanh nghiệp
          mang lại giá trị tài chính trong hoạt động và phát triển kinh doanh
          của mình.
        </p>
        <p>
          Mục tiêu phát triển tương lai của Kagency, khi khách hàng nhắc đến
          Kagency sẽ là một công ty cung cấp , giải pháp thực thi một cách toàn
          diện và không giới hạn trong lĩnh vực truyền thông.
        </p>
        <InfoButton label="View More" link="/about-us" />
      </div>
    </div>
    <div className="padding"></div>
    <div className="row info-rows">
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info">
        <h4>Our Work</h4>
        <h3>
          <strong>Kagency</strong> "phù thuỷ" đưa thương hiệu bạn lên tầm cao
          mới.
        </h3>
        <div className="submenu"><SubMenu /></div>

        <InfoButton label={"All"} horizontalPadding={true} />
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info-bg-2"></div>
    </div>
  </div>
  </ScrollAnimation>
);

export default Info;
