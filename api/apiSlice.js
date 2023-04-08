import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api", //default path after domain (optional)
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  tagTypes: ["TagData"],
  endpoints: (builder) => ({
    getDatas: builder.query({
      query: () => "/fetch-data",
      providesTags: ["TagData"], // it's like define the name for this method
    }),
    addData: builder.mutation({
      query: (data) => ({
        url: "/add-data",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["TagData"], // invalidates the TagData (refresh data)
    }),
    updateData: builder.mutation({
      query: (data) => ({
        url: "/update-data/" + data.id,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["TagData"],
    }),
    deleteData: builder.mutation({
      query: ({ id }) => ({
        url: "/delete-data/" + id,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["TagData"],
    }),
  }),
});

export const {
  useGetData,
  useAddDataMutation,
  useUpdateDataMutation,
  useDeleteDataMutation,
} = apiSlice;
