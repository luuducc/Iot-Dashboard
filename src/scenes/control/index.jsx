import { Box, Typography, useTheme } from "@mui/material"
import { tokens } from '../../theme'
import Header from "../../components/Header"
import MySwitch from "../../components/MySwitch"

const Control = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (

    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Devices" subtitle="Controls your devices here"/>
      </Box>

      {/* GRID */}
      <Box 
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px" 
        m="20px"
      >
        {/* Device 1 */}
        <Box 
            gridColumn="span 3"
            gridRow="span 1"
            backgroundColor={colors.primary[400]}
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
          <Typography
            variant="h4"
            fontWeight="600"
            textAlign={"center"}
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Device 1: GPIO 12
          </Typography>
          <Box sx={{ transform: "scale(1.5)", mt: "10px"}} >
            <MySwitch gpio={12} />
          </Box>
        </Box>

        {/* Device 2*/}
        <Box 
            gridColumn="span 3"
            gridRow="span 1"
            backgroundColor={colors.primary[400]}
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
          <Typography
            variant="h4"
            fontWeight="600"
            textAlign={"center"}
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Device 2: GPIO 14
          </Typography>
          <Box sx={{ transform: "scale(1.5)", mt: "10px"}} >
            <MySwitch gpio={14} />
          </Box>
        </Box>

        {/* Device 3 */}
        <Box 
            gridColumn="span 3"
            gridRow="span 1"
            backgroundColor={colors.primary[400]}
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
          <Typography
            variant="h4"
            fontWeight="600"
            textAlign={"center"}
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Device 3: GPIO 27
          </Typography>
          <Box sx={{ transform: "scale(1.5)", mt: "10px"}} >
            <MySwitch gpio={27} />
          </Box>
        </Box>

        {/* Device 4 */}
        <Box 
            gridColumn="span 3"
            gridRow="span 1"
            backgroundColor={colors.primary[400]}
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
          <Typography
            variant="h4"
            fontWeight="600"
            textAlign={"center"}
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Device 4: GPIO 26
          </Typography>
          <Box sx={{ transform: "scale(1.5)", mt: "10px"}} >
            <MySwitch gpio={26} />
          </Box>
        </Box>
      </Box>
    </Box>
    
  
  )
}

export default Control