import db from "../models";
require("dotenv").config();
const { Op } = require("sequelize");

export const createNewReceipt = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data.userId ||
        !data.supplierId ||
        !data.productdetailconfigId ||
        !data.quantity ||
        !data.price
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter !",
        });
      } else {
        let receipt = await db.Receipt.create({
          userId: data.userId,
          supplierId: data.supplierId,
        });
        if (receipt) {
          await db.ReceiptDetail.create({
            receiptId: receipt.id,
            productdetailconfigId: data.productdetailconfigId,
            quantity: data.quantity,
            price: data.price,
          });
        }
        resolve({
          errCode: 0,
          errMessage: "Create new receipt success !",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
export const createNewReceiptDetail = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data.receiptId ||
        !data.productdetailconfigId ||
        !data.quantity ||
        !data.price
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter !",
        });
      } else {
        await db.ReceiptDetail.create({
          receiptId: data.receiptId,
          productdetailconfigId: data.productdetailconfigId,
          quantity: data.quantity,
          price: data.price,
        });

        resolve({
          errCode: 0,
          errMessage: "Create new detail receipt success !",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
export const getDetailReceiptById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter !",
        });
      } else {
        let res = await db.Receipt.findOne({
          where: { id: id },
          raw: true,
          nest: true,
        });
        res.receiptDetail = await db.ReceiptDetail.findAll({
          where: { receiptId: id },
          raw: true,
          nest: true,
        });
        if (res.receiptDetail && res.receiptDetail.length > 0) {
          for (let i = 0; i < res.receiptDetail.length; i++) {
            let productDetailSize = await db.ProductDetailConfig.findOne({
              where: { id: res.receiptDetail[i].productdetailconfigId },
              include: [
                {
                  model: db.Allcode,
                  as: "romData",
                  attributes: ["value", "code"],
                },
              ],
              raw: true,
              nest: true,
            });
            res.receiptDetail[i].productDetailSizeData = productDetailSize;
            res.receiptDetail[i].productDetailData =
              await db.ProductDetail.findOne({
                where: { id: productDetailSize.productdetailId },
                raw: true,
                nest: true,
              });
            res.receiptDetail[i].productData = await db.Product.findOne({
              where: { id: res.receiptDetail[i].productDetailData.productId },
              raw: true,
              nest: true,
            });
          }
        }
        console.log("acs", res);

        resolve({
          errCode: 0,
          data: res,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const getAllReceipt = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let objectFilter = {
        order: [["createdAt", "DESC"]],
        raw: true,
        nest: true,
      };
      if (data.limit && data.offset) {
        objectFilter.limit = +data.limit;
        objectFilter.offset = +data.offset;
      }

      //  if(data.keyword !=='') objectFilter.where = {...objectFilter.where, name: {[Op.substring]: data.keyword  } }
      let res = await db.Receipt.findAndCountAll(objectFilter);
      console.log("ress1:", res);
      //   let resall = await db.Receipt.findAll();
      //   console.log("resall:", resall);

      for (let i = 0; i < res.rows.length; i++) {
        res.rows[i].userData = await db.User.findOne({
          where: { id: res.rows[i].userId },
          raw: true,
          nest: true,
        });
        res.rows[i].supplierData = await db.Supplier.findOne({
          where: { id: res.rows[i].supplierId },
          raw: true,
          nest: true,
        });
      }
      resolve({
        errCode: 0,
        count: res.count,
        data: res.rows,
      });
    } catch (error) {
      reject(error);
    }
  });
};
export const updateReceipt = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id || !data.supplierId) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter !",
        });
      } else {
        let receipt = await db.Receipt.findOne({
          where: { id: data.id },
          raw: true,
          nest: true,
        });
        if (!receipt) {
          resolve({
            errCode: 2,
            errMessage: "Receipt not found !",
          });
        } else {
          receipt.supplierId = data.supplierId;
          await receipt.save();
          resolve({
            errCode: 0,
            errMessage: "Update success !",
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};
export const deleteReceipt = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter !",
        });
      } else {
        let receipt = await db.Receipt.findOne({
          where: { id: data.id },
        });
        if (!receipt) {
          resolve({
            errCode: 2,
            errMessage: "Receipt not found !",
          });
        } else {
          await db.Receipt.destroy({
            where: { id: data.id },
          });
          resolve({
            errCode: 0,
            errMessage: "Delete success !",
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};
