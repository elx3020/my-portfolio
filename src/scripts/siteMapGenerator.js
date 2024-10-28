const express = require('express');
const { renderToNodeStream } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const { matchRoutes } = require('react-router-config');
const { SitemapStream, streamToPromise } = require('sitemap');

const app = express();

const routes = [
    { path: '/', exact: true, changefreq: 'monthly', priority: 1.0},
    { path: '/about', changefreq: 'weekly', priority: 0.8},
    { path: '/work', changefreq: 'monthly', priority: 0.8},
    { path: '/contact', changefreq: 'monthly' , priority: 0.8},
    { path: '/blog', changefreq: 'daily',priority: 1.0 },
    // { path: '/blog/post/:postId', changefreq: 'daily',priority: 0.7 },
    // { path: 'projects/:arr_handle/:project_handle', changefreq: 'monthly',priority: 0.6 },

  ];


app.get('/sitemap.xml', (req, res) => {
    const sitemap = new SitemapStream({ hostname: 'https://estebanlasso.com' });

    routes.forEach((route) => {
      sitemap.write({ url: route.path, changefreq: route.changefreq, priority: route.priority });
    });

    // matchRoutes(routes, req.path).map(({ route }) => {
    //     sitemap.write({ url: route.path, changefreq: 'monthly', priority: 0.7 });
    //   });
  
    sitemap.end();
    streamToPromise(sitemap).then((sm) => {
      res.header('Content-Type', 'application/xml');
      res.send(sm);
    });
});

app.listen(3000, () => console.log('Server started on port 3000'));