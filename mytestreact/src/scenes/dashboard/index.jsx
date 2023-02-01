import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import EmailIcon from "@mui/icons-material/Email";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";


import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataCustomers, mockDevices } from "../../data/mockData";


import ErrorOutlineSharpIcon from '@mui/icons-material/ErrorOutlineSharp';    // Error Icon
import ExposureIcon from '@mui/icons-material/Exposure';                      // Activated Divice Icon
import PausePresentationIcon from '@mui/icons-material/PausePresentation';    // De Activated Icon
import Battery1BarSharpIcon from '@mui/icons-material/Battery1BarSharp';      // Total Battery Icon

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "dop", headerName: "Date of Purchase", flex: 0.5 },
    {
      field: "name",
      headerName: "Customer Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone / Email",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "distributercode",
      headerName: "Distributer Code",
      flex: 1,
    },
    {
      field: "devid",
      headerName: "Device",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        {/* Statbox 1*/}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1356"                          // Total Device
            subtitle="Total Device"
            progress="0.75"
            increase="+14%"
            icon={
              <Battery1BarSharpIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* Statbox 2*/}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1135"
            subtitle="Activated Device"           // Activated Device
            progress="0.50"
            increase="+21%"
            icon={
              <ExposureIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* Statbox 3*/}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="93"
            subtitle="Non Activated Device"             // Non Activated Device
            progress="0.30"
            increase="+5%"
            icon={
              <PausePresentationIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* Statbox 4*/}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="28"
            subtitle="Error Devices"
            progress="0.80"
            increase="+43%"
            icon={
              <ErrorOutlineSharpIcon
                sx={{ color: colors.redAccent[300], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Device Locations
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            //borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Devices
            </Typography>
          </Box>

          {/* Mapping Data */}
          {mockDevices.map((devices, i) => (
            <Box
              key={`${devices.usetype}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              //borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                {devices.usetype}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {devices.noofdev}
                </Typography>
              </Box>
              {/* <Box color={colors.grey[100]}>{transaction.date}</Box> */}
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {/* ${transaction.cost} */}
              </Box>
            </Box>
         ))}
        </Box>

        {/* ROW 3 */}
        <Box           
          gridColumn="span 12"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          padding="30px">
          <Header
            title="List of last 10 dvices"
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
              rows={mockDataCustomers}
              columns={columns}
              components={{ Toolbar: GridToolbar }}
            />
          </Box>
        </Box>

        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Dashboard;
