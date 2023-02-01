import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
// import { mockDevConfigData } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useGetDeviceInfoQuery } from '../../state/api.js';

const Analytics = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data, isLoading } = useGetDeviceInfoQuery();

  const columns = [
    { field: "DevId", headerName: "Device Id" },
    {
      field: "Time",
      headerName: "Time",
    },
    {
      field: "PackVoltage",
      headerName: "Pack Voltage",

    },
    {
      field: "PortVoltage",
      headerName: "Port Voltage",

    },
    {
      field: "PackTemprature",
      headerName: "Pack Temprature",

    },
    {
      field: "PcbTemprature",
      headerName: "PCB Temprature",

    },
    {
      field: "LoadCurrent",
      headerName: "Load Current",
    },
    {
      field: "ChargeCurrent",
      headerName: "Charging Current",
    },
    {
      field: "Cell_1Volt",
      headerName: "Cell_1 Voltage",
    },
    {
      field: "Cell_2Volt",
      headerName: "Cell_2 Voltage",
    },
    {
      field: "Cell_3Volt",
      headerName: "Cell_3 Voltage",
    },
    {
      field: "Cell_4Volt",
      headerName: "Cell_4 Voltage",
    },
    {
      field: "Cell_5Volt",
      headerName: "Cell_5 Voltage",
    },
    {
      field: "Cell_6Volt",
      headerName: "Cell_6 Voltage",
    },
    {
      field: "Cell_7Volt",
      headerName: "Cell_7 Voltage",
    },
    {
      field: "Cell_8Volt",
      headerName: "Cell_8 Voltage",
    },
    {
      field: "Cell_9Volt",
      headerName: "Cell_9 Voltage",
    },
    {
      field: "Cell_10Volt",
      headerName: "Cell_10 Voltage",
    },
    {
      field: "Cell_11Volt",
      headerName: "Cell_11 Voltage",
    },
    {
      field: "Cell_12Volt",
      headerName: "Cell_12 Voltage",
    },
    {
      field: "Cell_13Volt",
      headerName: "Cell_13 Voltage",
    },
    {
      field: "Cell_14Volt",
      headerName: "Cell_14 Voltage",
    },
    {
      field: "Ball_1Status",
      headerName: "Ballancer_1 Status",
    },
    {
      field: "Ball_2Status",
      headerName: "Ballancer_2 Status",
    },
    {
      field: "Ball_3Status",
      headerName: "Ballancer_3 Status",
    },
    {
      field: "Ball_4Status",
      headerName: "Ballancer_4 Status",
    },
    {
      field: "Ball_5Status",
      headerName: "Ballancer_5 Status",
    },
    {
      field: "Ball_6Status",
      headerName: "Ballancer_6 Status",
    },
    {
      field: "Ball_7Status",
      headerName: "Ballancer_7 Status",
    },
    {
      field: "Ball_8Status",
      headerName: "Ballancer_8 Status",
    },
    {
      field: "Ball_9Status",
      headerName: "Ballancer_9 Status",
    },
    {
      field: "Ball_10Status",
      headerName: "Ballancer_10 Status",
    },
    {
      field: "Ball_11Status",
      headerName: "Ballancer_11 Status",
    },
    {
      field: "Ball_12Status",
      headerName: "Ballancer_12 Status",
    },
    {
      field: "Ball_13Status",
      headerName: "Ballancer_13 Status",
    },
    {
      field: "Ball_14Status",
      headerName: "Ballancer_14 Status",
    },
    {
      field: "SysStatus",
      headerName: "System Status",
    },
    {
      field: "RtcFault",
      headerName: "RTC Fault",
    },
    {
      field: "MemoryFault",
      headerName: "Memory Fault",
    },
    {
      field: "GsmFault",
      headerName: "GSM Fault",
    },
    {
      field: "SimFault",
      headerName: "SIM Fault",
    },
    {
      field: "NetworkFault",
      headerName: "Network Fault",
    },
    {
      field: "TempPcbFault",
      headerName: "PCB Temp Fault",
    },
    {
      field: "TempPackFault",
      headerName: "Pack Temp Fault",
    },
    {
      field: "OverLoadFault",
      headerName: "Over Load Fault",
    },
    {
      field: "OverVolatgeFault",
      headerName: "Over Voltage Fault",
    },
    {
      field: "UnderVoltageFault",
      headerName: "Under Voltage Fault",
    },
    {
      field: "AFEFault",
      headerName: "AFE Fault",
    },
    {
      field: "ShortCircuitFault",
      headerName: "Short Circuit Fault",
    },
    {
      field: "CellOVFault",
      headerName: "Cell OV Fault",
    },
    {
      field: "CellUVFault",
      headerName: "Cell UV Fault",
    },
    {
      field: "I2CComfault",
      headerName: "I2C Communication Fault",
    },
    {
      field: "FanStatus",
      headerName: "Fan Status",
    },  
    {
      field: "DisChargeMOSStatus",
      headerName: "Discharge MOSFET Status",
    },  
    {
      field: "ChargeMOSStatus",
      headerName: "Charge MOSFET Status",
    },  
    {
      field: "NetworkStrenth",
      headerName: "Network Strength",
    },  
    {
      field: "GPSStatus",
      headerName: "GPS Status",
    },   
  ];

  return (
    <Box m="20px">
      <Header
        title="ANALYTICS"
        subtitle="View Your Device..."
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Analytics;
