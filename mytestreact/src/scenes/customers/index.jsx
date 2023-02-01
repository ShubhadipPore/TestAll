import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
//import { mockDataCustomers } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useGetCustomersQuery } from '../../state/api.js';

const Customers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { data, isLoading } = useGetCustomersQuery();

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
      <Header
        title="CUSTOMERS"
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

export default Customers;
