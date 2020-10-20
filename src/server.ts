import app from './app';

const PORT = 9000;

app.listen(PORT, '', () => {
  return console.log(`server is listening on ${PORT}`);
});