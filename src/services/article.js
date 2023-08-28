import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const rapidKey = process.env.REACT_APP_API_KEY;

export const articleApi= createApi({
    reducerPath:"articleApi",
    baseQuery:fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders:(headers)=>{
            headers.set( 'X-RapidAPI-Key', 'f9f4214f0emsh996c546c6fc6e48p1bcddbjsn1650d3b05b69',);
            headers.set( 'X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com',);
            return headers;
        }


    }),
    endpoints:(builder)=>({
        getSummary:builder.query({

            query:(params)=>`/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })


})

export const {useLazyGetSummaryQuery} =articleApi;
