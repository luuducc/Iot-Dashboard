import React, { useState, useEffect } from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from 'axios';

export default function MySwitch({ isDashboard = false, gpio }) {
  const [isChecked, setIsChecked] = useState(false);
  
  let deviceIndex 
  switch(gpio) {
    case 12:
      deviceIndex = 0
      break
    case 14:
      deviceIndex = 1
      break
    case 27:
      deviceIndex = 2
      break
    case 26:
      deviceIndex = 3
      break
    default:
      deviceIndex = null
  }

  useEffect(() => {
    // Gọi phương thức GET để kiểm tra trạng thái nếu cần
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Gọi phương thức GET để lấy trạng thái
      const response = await axios.get('https://ducquan.id.vn/iotserver/api.php?type=device');
      setIsChecked((response.data[deviceIndex].isOn == 1) ? true : false); // Giả sử response trả về trạng thái của Switch
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = async () => {
    try {
      // Gửi phương thức POST khi bấm vào Switch
      await axios.post(
        'https://ducquan.id.vn/iotserver/api.php', 
        { 
          type: "device",
          isOn: !isChecked,
          gpio: gpio
        }); // Đảo ngược trạng thái

      setIsChecked(!isChecked); // Cập nhật trạng thái sau khi gửi request thành công
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <FormGroup>
        <FormControlLabel 
          control={
            <Switch 
              checked={isChecked} 
              onChange={handleChange} 
              color="secondary"
              size="large"  />
          } 
          // label={isChecked ? "ON" : "OFF"}
          label={isDashboard ? undefined : (isChecked ? "ON" : "OFF")}
        />
      </FormGroup>
      {/* <Switch 
        checked={isChecked}
        onChange={handleChange}
      /> */}
    </div>
  );
}