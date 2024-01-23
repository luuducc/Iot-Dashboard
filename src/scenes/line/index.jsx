import { Box, useTheme } from "@mui/material"
import { tokens } from '../../theme'

import Header  from  "../../components/Header"
import LineChart from "../../components/LineChart"

const Line = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

 return (
  <Box m="20px">
    <Header title="Line Chart" subtitle="Simple Line Chart" />

    <Box 
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="140px"
      gap="20px"
    >
      {/* Temp chart */}
      <Box 
        gridColumn="span 12"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
      >
        <LineChart type="temp"/>
      </Box>

      {/* Humid chart */}
      <Box 
        gridColumn="span 12"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
      >
        <LineChart type="humid"/>
      </Box>
    </Box>
  </Box>
 )
}

export default Line