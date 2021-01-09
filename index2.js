const express = require("express");
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('6c436fd1e2fd491ba6508f208cc56b47');

const app = express();

newsapi.v2.topHeadlines({
  q: 'trump',
  category: 'politics',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});
 
// To query everything
// You must include at least one q, source, or domain
newsapi.v2.everything({
  q: 'trump',
  sources: 'bbc-news,the-verge',
  domains: 'bbc.co.uk,techcrunch.com',
  from: '2017-12-01',
  to: '2017-12-12',
  language: 'en',
  sortBy: 'relevancy',
  page: 2
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});
 
// To query sources
// All options are optional
newsapi.v2.sources({
  category: 'technology',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      sources: [...]
    }
  */
});

 app.listen(3000,function()
 {
     console.log("Server is running at port 3000");
 });