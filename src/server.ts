import app from './app';

const PORT = 9000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  return console.log(`server is listening on ${HOST}:${PORT}`);
});