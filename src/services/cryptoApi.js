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
            query: () => createRequest('/coins')
        })
    })
})

export const {
    useGetCryptosQuery,

} = cryptoApi;
