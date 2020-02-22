import Sequelize from 'sequelize';
import mongoose from 'mongoose';
import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';
import databaseConfig from '../config/database';

const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => { return model.init(this.connection); })
      .map((model) => { return model.associate && model.associate(this.connection.models); });
  }

  mongo() {
    const url = 'mongodb://localhost:27017/gobarber';
    this.mongoConnection = mongoose.connect(url,
      { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true });
  }
}

export default new Database();
