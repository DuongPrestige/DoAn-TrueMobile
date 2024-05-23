"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderDetailSeri extends Model {
    static associate(models) {
      OrderDetailSeri.belongsTo(models.OrderDetail, {
        foreignKey: "orderdetailId",
        targetKey: "id",
        as: "seriOrderData",
      });
    }
  }
  OrderDetailSeri.init(
    {
      orderdetailId: DataTypes.INTEGER,
      seriNumber: DataTypes.STRING,
      review: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "OrderDetailSeri",
    }
  );
  return OrderDetailSeri;
};
