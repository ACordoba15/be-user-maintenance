import express, { Application} from 'express';
import userRoutes from '../routes/user';
import recordRoutes from '../routes/record';
import cors from 'cors';
import db from '../db/connection';

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    userRoutes: '/api/user',
    recordRoutes: '/api/record'
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';
    
    // Metodos iniciales
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("DB Online");
    }
    catch (error:any) {
      throw new Error(error);
    }
  }


  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura del body
    this.app.use( express.json());

    // Carpeta pública
    this.app.use( express.static('public'));
  }

  routes() {
    this.app.use(this.apiPaths.userRoutes, userRoutes)
    this.app.use(this.apiPaths.recordRoutes, recordRoutes)
  }

  listen() {
    this.app.listen( this.port, () => {
      console.log(`Servidor corriendo en http://localhost:${this.port}`);
    });
  }
}

export default Server;