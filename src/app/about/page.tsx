// about/page.tsx
"use client"

import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Giới thiệu về cửa hàng chúng tôi</h1>
      <p style={styles.paragraph}>
        Chào mừng bạn đến với cửa hàng áo quần của chúng tôi! Chúng tôi tự hào cung cấp những sản phẩm thời trang chất lượng cao, phong cách và đa dạng. Với sự tận tâm và đam mê, chúng tôi luôn nỗ lực mang đến cho khách hàng những trải nghiệm mua sắm tuyệt vời nhất.
      </p>
      <h2 style={styles.subHeader}>Sứ mệnh của chúng tôi</h2>
      <p style={styles.paragraph}>
        Sứ mệnh của chúng tôi là trở thành điểm đến hàng đầu cho các tín đồ thời trang, nơi mà mọi người có thể tìm thấy những bộ trang phục hoàn hảo cho mọi dịp. Chúng tôi cam kết cung cấp sản phẩm với chất lượng tốt nhất, giá cả hợp lý và dịch vụ khách hàng chuyên nghiệp.
      </p>
      <h2 style={styles.subHeader}>Tầm nhìn của chúng tôi</h2>
      <p style={styles.paragraph}>
        Chúng tôi mong muốn trở thành thương hiệu thời trang được yêu thích và tin tưởng nhất, không chỉ tại thị trường trong nước mà còn trên thị trường quốc tế. Với sự sáng tạo và không ngừng đổi mới, chúng tôi hy vọng sẽ mang lại giá trị bền vững cho cộng đồng và xã hội.
      </p>
      <h2 style={styles.subHeader}>Liên hệ với chúng tôi</h2>
      <p style={styles.paragraph}>
        Nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ, xin đừng ngần ngại liên hệ với chúng tôi qua email: royalrevolt24680@gmail.com hoặc số điện thoại: +84 123 4 567 890. Chúng tôi rất vui lòng được phục vụ bạn!
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
  },
  header: {
    fontSize: '2.5em',
    marginBottom: '20px',
  },
  subHeader: {
    fontSize: '2em',
    marginTop: '20px',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '1.2em',
    marginBottom: '10px',
  },
};

export default AboutPage;
