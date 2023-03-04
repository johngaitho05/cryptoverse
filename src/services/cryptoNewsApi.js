import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const cryptoApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'f077ec891amshb7fcba689144a67p1b0c02jsnca2fa92594e9',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({url,headers:cryptoApiHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&count=${count}`)
        })
    })
})

export const {
    useGetCryptoNewsQuery,

} = cryptoNewsApi;
