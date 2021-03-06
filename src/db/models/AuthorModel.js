import sequelize from "../config/index.js";
import s from 'sequelize'

const { DataTypes } = s

const Author = sequelize.define('author', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    avatar:{
        type: DataTypes.STRING,
        allowNull: false,
    },
})

export default Author