"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SeriNumber extends Model {
    static associate(models) {
      SeriNumber.belongsTo(models.ProductDetailConfig, {
        foreignKey: "productdetaiconfiglId",
        targetKey: "id",
        as: "seriData",
      });
    }
  }
  SeriNumber.init(
    {
      productdetaiconfiglId: DataTypes.INTEGER,
      seriNumber: DataTypes.STRING,
      statusId: DataTypes.STRING,
      checkWarranty: DataTypes.STRING,
      review: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "SeriNumber",
    }
  );
  return SeriNumber;
};
