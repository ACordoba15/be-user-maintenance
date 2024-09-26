import { DataTypes, Sequelize } from 'sequelize';

const db = new Sequelize("tdusers", "sa", "Prueba001.", {
  host: 'localhost',
  dialect: 'mssql',
  port: 1433,
  // logging: false
  define: {
    freezeTableName: true
  }
});

export default db;