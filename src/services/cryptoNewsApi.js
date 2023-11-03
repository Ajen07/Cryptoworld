import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseUrl = "https://bing-news-search1.p.rapidapi.com";

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "2ff98fc43cmsh020ada84808a2d6p19e9f9jsn3ec2c5897ca1"
      );
      headers.set("X-RapidAPI-Host", "bing-news-search1.p.rapidapi.com");
      headers.set("X-BingApis-SDK", "true");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        `/news/search?q=${newsCategory}&textFormat=Raw&freshness=Day&safeSearch=Off&count=${count}`,
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
