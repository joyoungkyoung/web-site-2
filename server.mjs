import express from 'express';
import http from 'http';
import next from 'next';

const dev = process.env.APP_ENV !== 'production';
const hostname = 'localhost';
const port = 2008;

// 서버를 nextjs 애플리케이션과 연결
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    const httpServer = http.createServer(server);

    server.get('*', (req, res) => handle(req, res));

    httpServer.listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
