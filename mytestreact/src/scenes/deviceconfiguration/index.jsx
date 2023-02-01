import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDevConfigData } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";


const Deviceconfiguration = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "devid", headerName: "Serial Number" },
    {
      field: "battype",
      headerName: "Battery Type",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "cellchem",
      headerName: "Cell Chemistry",
      flex: 1,
    },
    {
      field: "nocellS",
      headerName: "No of Cell(S)",
      flex: 1,
    },
    {
      field: "nocellP",
      headerName: "No of Cell(P)",
      flex: 1,
    },
    {
      field: "gpsstat",
      headerName: "GPS Status",
      flex: 1,
    },
    {
      field: "warrentyperiod",
      headerName: "Warrenty Period",
      flex: 1,
    },
    {
      field: "domrng",
      headerName: "Date of Manufacturing",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Assign Mobile No",
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
      <Header
        title="DEVICE CONFIGURATION"
        subtitle="Configure device with admin permission"
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
          rows={mockDevConfigData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Deviceconfiguration;
