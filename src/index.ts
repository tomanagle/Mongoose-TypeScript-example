import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import connect from './connect';
const app: Application = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req: Request, res: Response) =>
  res.send('Welcome to the Mongoose & TypeScript example')
);

app.listen(port, () =>
  console.log(`Application started successfully on port ${port}.`)
);
connect();
routes({ app });
