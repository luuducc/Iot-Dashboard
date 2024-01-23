import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import thư viện axios để gửi HTTP request

const MyComponent = ({type}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Gửi HTTP request đến URL để lấy dữ liệu
        const response = await axios.get('https://ducquan.id.vn/iotserver/api.php?type=sensor&num=1');
        // Lưu dữ liệu nhận được vào state
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Gọi fetchData ban đầu khi component được render
    fetchData();

    // Thiết lập interval để cập nhật dữ liệu mỗi giây
    const interval = setInterval(fetchData, 1000);

    // Clear interval khi component unmount để tránh leak memory
    return () => clearInterval(interval);
  }, []); // Thêm mảng rỗng để chỉ gọi useEffect khi component mount

  return (
    <div>
      {data && (
        <p
          style={{textAlign: 'center', fontSize: '30px'}}
        >{ (type === "temp") ? data[0].temp : data[0].humid}</p>
      )}
    </div>
  );
};

export default MyComponent;
