// const { nombreModelo, modeloSchema } = require("./person.model");
const { User, UserSchema } = require("./User.model");
const { Administrative, AdministrativeSchema } = require("./Administrative.model");
const { Student, StudentSchema } = require("./Student.model");
const { Horario, HorarioSchema } = require("./Horario.model");

function setupModels(sequelize) {
  //   nombreModelo.init(modeloSchema, nombreModelo.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  Administrative.init(AdministrativeSchema, Administrative.config(sequelize));
  Student.init(StudentSchema, Student.config(sequelize));
  Horario.init(HorarioSchema, Horario.config(sequelize));
}

module.exports = setupModels;
