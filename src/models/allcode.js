"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Allcode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Allcode.hasMany(models.User, {
        foreignKey: "genderId",
        as: "genderData",
      });
      Allcode.hasMany(models.User, { foreignKey: "roleId", as: "roleData" });
      Allcode.hasMany(models.Product, {
        foreignKey: "categoryId",
        as: "categoryData",
      });
      Allcode.hasMany(models.Product, {
        foreignKey: "brandId",
        as: "brandData",
      });
      Allcode.hasMany(models.Product, {
        foreignKey: "statusId",
        as: "statusData",
      });
      Allcode.hasMany(models.Blog, {
        foreignKey: "subjectId",
        as: "subjectData",
      });
      Allcode.hasMany(models.TypeVoucher, {
        foreignKey: "typeVoucher",
        as: "typeVoucherData",
      });
      //sua size thanh rom va color
      Allcode.hasMany(models.ProductDetailConfig, {
        foreignKey: "colorId",
        as: "colorData",
      });
      Allcode.hasMany(models.ProductDetailConfig, {
        foreignKey: "romId",
        as: "romData",
      });
      Allcode.hasMany(models.OrderProduct, {
        foreignKey: "statusId",
        as: "statusOrderData",
      });
      //warranty
      Allcode.hasMany(models.ProductDetailConfig, {
        foreignKey: "warrantyId",
        as: "warrantyData",
      });
    }
  }
  Allcode.init(
    {
      type: DataTypes.STRING,
      value: DataTypes.STRING,
      code: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Allcode",
    }
  );
  return Allcode;
};
