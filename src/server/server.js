import express from 'express';
import path from 'path';
import APIRoutes from './api/api-routes';
import ViewRoutes from './view/view-routes';

const app = express();

app.use('/static', express.static(path.join(__dirname, '../../dist')));

app.use('/view', ViewRoutes);
app.use('/services', APIRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('app listening on', port);
});
