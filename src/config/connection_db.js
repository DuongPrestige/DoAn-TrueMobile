const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('truemobile', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false //bo log thong tin thua
});
// comment tesst
//abc
const connectionDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

connectionDB()