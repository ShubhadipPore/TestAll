import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "Customer",
  ],
  endpoints: (build) => ({
    getCustomers: build.query({
      query: () => "customers",
      providesTags: ["Customer"],
    }),
    getDeviceInfo: build.query({
      query: () => "analytics",     /**Server Router Path to Fetch Data */
      providesTags: ["DeviceInfo"],
    }),
  }),
});

export const {
//   useGetUserQuery,
  useGetDeviceInfoQuery,
  useGetCustomersQuery,
//   useGetTransactionsQuery,
//   useGetGeographyQuery,
//   useGetSalesQuery,
//   useGetAdminsQuery,
//   useGetUserPerformanceQuery,
  useGetDashboardQuery,
} = api;
