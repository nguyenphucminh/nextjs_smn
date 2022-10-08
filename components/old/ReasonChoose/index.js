import styles from "./reason.module.css";

const data = [
  [
    {
      img: "reason1.png",
      title: "Bác sĩ giỏi, giàu kinh nghiệm",
      background: "rgb(109, 176, 61)",
      detail: [
        "• Đội ngũ Giáo sư, bác sỹ giàu kinh nghiệm đã và đang công tác tại các Bệnh viện lớn.",
        "• Tư vấn trước và sau khi khám tùy theo nhu cầu của đơn vị.",
      ],
    },
    {
      img: "reason2.png",
      title: "Chống nhiễm khuẩn tốt",
      background: "rgb(13, 121, 148)",
      detail: [
        "• Quy trình phòng chống nhiễm khuẩn được áp dụng nghiệm ngặt, phòng chống lây nhiễm chéo.",
        "• Toàn bộ các thiết bị dụng cụ được khử khuẩn, đóng gói hút chân không đảm bảo vô khuẩn.",
      ],
    },
  ],
  [
    {
      img: "reason3.png",
      title: "Chi phí hợp lý",
      background: "rgb(245, 166, 28)",
      detail: [
        "• Cung cấp nhiều gói khám khác nhau phù hợp với đặc thù và nhu cầu tổ chức, doanh nghiệp.",
        "• Dịch vụ chất lượng cao nhưng với chi phí hợp lý.",
        "• Người nhà của CBNV được hỗ trợ giá như CBNV của đơn vị.",
        "• Nhiều ưu đãi cho các dịch vụ phát sinh ngoài gói khám.",
      ],
    },
    {
      img: "reason4.png",
      title: "Cơ sở vật chất hiện đại",
      background: "rgb(13, 121, 148)",
      detail: [
        "• Cơ sở vật chất, các thiết bị máy móc mới toàn bộ và được bảo dưỡng thường xuyên.",
        "• Máy khám ngoại tuyến hiện đại, cơ động đến mọi nơi.",
      ],
    },
  ],
  [
    {
      img: "reason5.png",
      title: "Quy trình khám nhanh gọn",
      background: "rgb(227, 60, 38)",
      detail: [
        "• Quy trình khám sức khỏe được tin học hóa qua phần mềm, đảm bảo rõ ràng, hợp lý, khoa học, thời gian khám ngắn nhất.",
      ],
    },
    {
      img: "reason6.png",
      title: "Môi trường thân thiện văn minh",
      background: "rgb(245, 166, 28)",
      detail: [
        "• Không gian và môi trường khám chữa bệnh thân thiện, sạch sẽ, lịch sự.",
      ],
    },
  ],
  [
    {
      img: "reason7.png",
      title: "Kết quả chính xác",
      background: "rgb(107, 83, 162)",
      detail: [
        "• Đảm bảo trả kết quả trong thời gian sớm nhất với hệ thống phân loại chính xác và đầy đủ.",
        "• Kết quả được lưu giữ cả bản cứng và trên phần mềm hệ thống, tiện lợi cho việc theo dõi khi khách hàng đến khám những lần tiếp theo.",
        "• Đối với các đơn vị khám đoàn, báo cáo kết quả được phân loại theo phòng, ban, theo tên để dễ dàng tra cứu.",
      ],
    },
    {
      img: "reason8.png",
      title: "Vị trí thuận tiện",
      background: "rgb(109, 176, 61)",
      detail: [
        "• Nằm ngay trung tâm Hà Nội với hầm đỗ ô tô và xe máy miễn phí.",
        "• Khám tại đơn vị theo nhu cầu giúp tiết kiệm thời gian, chi phí đi lại cho khách hàng.",
      ],
    },
  ],
];

const ReasonChoose = () => {
  return (
    <section className="container-fluid mb-5" style={{ padding: 0 }}>
      <div className={styles.title_reason}>
        <h2>LÍ DO BẠN NÊN CHỌN CHÚNG TÔI</h2>
      </div>
      <div className="container">
        <div className="row">
          {data.map((item, index) => (
            <div className="col-lg-3 colg-md-3 col-sm-3 col-xs-12" key={index}>
              <ul>
                {item.map((child, index) => (
                  <li className={styles.detail} key={index}>
                    <figure className={styles.item_collection}>
                      <img
                        src={`/news/${child.img}`}
                        style={{ width: "100px", height: "100px" }}
                      />
                      <h3>{child.title}</h3>
                      <figcaption className={styles.description} style={{ background: `${child.background}` }}>
                        <h4>{child.title}:</h4>
                        <ul className="text-justify">
                          {child.detail.map((detail, index) => (
                            <li key={index}>{detail}</li>
                          ))}
                        </ul>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonChoose;
