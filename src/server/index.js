import Koa from 'koa'
import path from 'path'
import KoaStatic from 'koa-static'
import ReactDOMServer from 'react-dom/server'
import React from 'react'
import render from 'koa-ejs'
import Router from '@koa/router'
import App from './App'

const app = new Koa();
const router = new Router();
router.get('/', async (ctx, next) => {
  const html = ReactDOMServer.renderToString(<App path={ctx.request.path} />)
  await ctx.render('index', { html });
});

router.get('/title', async ctx => {
  const html = ReactDOMServer.renderToString(<App path={ctx.request.path} />)
  await ctx.render('index', { html });
})
render(app, {
  root: path.resolve(process.cwd(), 'src/server/view'),
  layout: false,
  viewExt: 'ejs',
  cache: false,
  debug: false
});

app.use(KoaStatic(path.join(process.cwd(), 'dist')));
// app.use(async ctx => {
//   const html = ReactDOMServer.renderToString(<App path={ctx.request.path} />)
//   await ctx.render('index', { html });
// });
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000)