import { DataTypes } from "sequelize";
import db from '../db/connection';

const record = db.define('record', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.NUMBER
    },
    username: {
        allowNull: false,
        type: DataTypes.STRING
    },
    action: {
        allowNull: false,
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

export default record;