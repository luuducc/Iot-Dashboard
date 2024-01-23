import { Box, Button, IconButton, Typography, useTheme } from "@mui/material"
import { tokens } from '../../theme'
import Header from "../../components/Header"
// import { mockTransactions } from "../../data/mockData"
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import EmailIcon from "@mui/icons-material/Email";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
// import BarChart from "../../components/BarChart";
// import StatBox from "../../components/StatBox";
// import ProgressCircle from "../../components/ProgressCircle";
// import PieChart from "../../components/PieChart";
import MyComponent from "../../components/MyComponent";
import MySwitch from "../../components/MySwitch"
import axios from 'axios'; 

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleDownload = () => {
    // Thực hiện GET request để lấy dữ liệu
    axios.get('https://ducquan.id.vn/iotserver/api.php?type=sensor&num=30')
      .then(response => {
        // Xử lý dữ liệu trả về từ response.data (giả sử là một chuỗi)
        const data = response.data;

        let txtContent = ''

        data.forEach((item, index) => {
          txtContent += `${index+1}.  Time: ${item.time}, Temp: ${item.temp}, Humid: ${item.humid}\n`;
        })

        // Tạo một đối tượng Blob từ dữ liệu
        const blob = new Blob([txtContent], { type: 'text/plain' });

        // Tạo URL cho Blob
        const url = window.URL.createObjectURL(blob);

        // Tạo một thẻ <a> để tải xuống
        const link = document.createElement('a');
        link.href = url;
        link.download = 'records.txt';

        // Thêm thẻ <a> vào DOM và nhấn tự động
        document.body.appendChild(link);
        link.click();

        // Xóa URL sau khi tải xuống
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to your dashboard"/>
        
        <Box>
          <Button
            sx={{ 
              backgroundColor: colors.blueAccent[700], 
              color: colors.grey[100], 
              fontSize: "14px", 
              fontWeight: "bold", 
              padding: "10px 20x"}}
            onClick={handleDownload}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID AND CHART */}
      <Box 
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* SINGLE ITEM */}

        {/* Temp */}
        <Box 
          gridColumn="span 2"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            textAlign={"center"}
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Temperature
          </Typography>
          <Box height="250px" mt="-20px" >
            <MyComponent type="temp"/>
          </Box>
        </Box>
        {/* Humid */}
        <Box 
          gridColumn="span 2"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            textAlign={"center"}
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Humid
          </Typography>
          <Box height="250px" mt="-20px">
            <MyComponent type="humid"/>
          </Box>
        </Box>

        {/* Device 1 */}
        <Box 
          gridColumn="span 2"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            textAlign={"center"}
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Device 1
          </Typography>
          <Box sx={{ transform: "scale(1.5)", mt: "10px", ml: "37px"}}>
            <MySwitch isDashboard={true} gpio={12} />
          </Box>
        </Box>

        {/* Device 2 */}
        <Box 
          gridColumn="span 2"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            textAlign={"center"}
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Device 2
          </Typography>
          <Box sx={{ transform: "scale(1.5)", mt: "10px", ml: "37px"}}>
            <MySwitch isDashboard={true} gpio={14} />
          </Box>
        </Box>        
            
        {/* Device 3 */}
        <Box 
          gridColumn="span 2"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            textAlign={"center"}
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Device 3
          </Typography>
          <Box sx={{ transform: "scale(1.5)", mt: "10px", ml: "37px"}}>
            <MySwitch isDashboard={true} gpio={27} />
          </Box>
        </Box> 

        {/* Device 4 */}
        <Box 
          gridColumn="span 2"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            textAlign={"center"}
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Device 4
          </Typography>
          <Box sx={{ transform: "scale(1.5)", mt: "10px", ml: "37px"}}>
            <MySwitch isDashboard={true} gpio={26} />
          </Box>
        </Box> 
        {/* Temp chart */}
        <Box 
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Temperature
          </Typography>
          <Box height="250px" mt="-20px">
            <LineChart isDashboard={true} type="temp"/>
          </Box>
        </Box>

        {/* Humid chart */}
        <Box 
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Humidity
          </Typography>
          <Box height="250px" mt="-20px">
            <LineChart isDashboard={true} type="humid"/>
          </Box>
        </Box>
        

      </Box>

    </Box>)
}

export default Dashboard