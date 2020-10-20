// const app = require('./app');
import app from './app';

const PORT = 9000;

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.listen(PORT, '', () => {
  return console.log(`server is listening on ${PORT}`);
});