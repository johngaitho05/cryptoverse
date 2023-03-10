import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'f077ec891amshb7fcba689144a67p1b0c02jsnca2fa92594e9',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url,headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coindId) => createRequest(`/coin/${coindId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
        }),
    })
})

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery

} = cryptoApi;
