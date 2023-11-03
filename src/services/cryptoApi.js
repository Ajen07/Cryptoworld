import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiHeaders = {
  "X-RapidAPI-Key": "2ff98fc43cmsh020ada84808a2d6p19e9f9jsn3ec2c5897ca1",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "2ff98fc43cmsh020ada84808a2d6p19e9f9jsn3ec2c5897ca1"
      );
      headers.set("X-RapidAPI-Host", "coinranking1.p.rapidapi.com");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => `/coin/${coinId}`,
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => `coin/${coinId}/history?timePeriod=${timeperiod}`,
    }),
    getExchanges: builder.query({
      query: () => '/exchanges',
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery
} = cryptoApi;
