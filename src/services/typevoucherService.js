import db from "../models";
const { Op } = require("sequelize");

//==================TYPE VOUCHER====================//
export const createNewTypeVoucher = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data.typeVoucher ||
        !data.value ||
        !data.maxValue ||
        !data.minValue
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter !",
        });
      } else {
        await db.TypeVoucher.create({
          typeVoucher: data.typeVoucher,
          value: data.value,
          maxValue: data.maxValue,
          minValue: data.minValue,
        });
        resolve({
          errCode: 0,
          errMessage: "Create new type voucher successfully !",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
export const getDetailTypeVoucherById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter !",
        });
      } else {
        let res = await db.TypeVoucher.findOne({
          where: { id: id },
          include: [
            {
              model: db.Allcode,
              as: "typeVoucherData",
              attributes: ["value", "code"],
            },
          ],
          raw: true,
          nest: true,
        });
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
export const getAllTypeVoucher = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let objectFilter = {
        include: [
          {
            model: db.Allcode,
            as: "typeVoucherData",
            attributes: ["value", "code"],
          },
        ],
        raw: true,
        nest: true,
      };
      if (data.limit && data.offset) {
        objectFilter.limit = +data.limit;
        objectFilter.offset = +data.offset;
      }
      let res = await db.TypeVoucher.findAndCountAll(objectFilter);

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
export const updateTypeVoucher = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data.id ||
        !data.typeVoucher ||
        !data.value ||
        !data.maxValue ||
        !data.minValue
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter !",
        });
      } else {
        let typevoucher = await db.TypeVoucher.findOne({
          where: { id: data.id },
          raw: false,
        });
        if (typevoucher) {
          typevoucher.typeVoucher = data.typeVoucher;
          typevoucher.value = data.value;
          typevoucher.maxValue = data.maxValue;
          typevoucher.minValue = data.minValue;
          await typevoucher.save();
          resolve({
            errCode: 0,
            errMessage: "Update type voucher successfully !",
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};
export const deleteTypeVoucher = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter !",
        });
      } else {
        let typevoucher = await db.TypeVoucher.findOne({
          where: { id: data.id },
        });
        if (typevoucher) {
          await db.TypeVoucher.destroy({
            where: { id: data.id },
          });
          resolve({
            errCode: 0,
            errMessage: "Delete type voucher successfully !",
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};
export const getSelectTypeVoucher = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await db.TypeVoucher.findAll({
        include: [
          {
            model: db.Allcode,
            as: "typeVoucherData",
            attributes: ["value", "code"],
          },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: res,
      });
    } catch (error) {
      reject(error);
    }
  });
};
//=======================VOUCHER===================
export const createNewVoucher = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data.fromDate ||
        !data.toDate ||
        !data.typeVoucherId ||
        !data.amount ||
        !data.codeVoucher
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter !",
        });
      } else {
        await db.Voucher.create({
          fromDate: data.fromDate,
          toDate: data.toDate,
          typeVoucherId: data.typeVoucherId,
          amount: data.amount,
          codeVoucher: data.codeVoucher,
        });
        resolve({
          errCode: 0,
          errMessage: "Create new voucher successfully !",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
export const getDetailVoucherById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter !",
        });
      } else {
        let res = await db.Voucher.findOne({
          where: { id: id },
        });
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
export const getAllVoucher = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let objectFilter = {
        include: [
          {
            model: db.TypeVoucher,
            as: "typeVoucherOfVoucherData",
            include: [
              {
                model: db.Allcode,
                as: "typeVoucherData",
                attributes: ["value", "code"],
              },
            ],
          },
        ],
        raw: true,
        nest: true,
      };
      if (data.limit && data.offset) {
        objectFilter.limit = +data.limit;
        objectFilter.offset = +data.offset;
      }
      let res = await db.Voucher.findAndCountAll(objectFilter);
      if (res) {
        for (let i = 0; i < res.rows.length; i++) {
          let voucherUsed = await db.VoucherUsed.findAll({
            where: {
              voucherId: res.rows[i].id,
              status: 1,
            },
          });
          res.rows[i].usedAmount = voucherUsed.length;
        }
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
export const updateVoucher = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data.id ||
        !data.fromDate ||
        !data.toDate ||
        !data.typeVoucherId ||
        !data.amount ||
        !data.codeVoucher
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter !",
        });
      } else {
        let voucher = await db.Voucher.findOne({
          where: { id: data.id },
          raw: false,
        });
        if (!voucher) {
          resolve({
            errCode: 2,
            errMessage: "Voucher not found !",
          });
        } else {
          voucher.fromDate = data.fromDate;
          voucher.toDate = data.toDate;
          voucher.typeVoucherId = data.typeVoucherId;
          voucher.amount = data.amount;
          voucher.codeVoucher = data.codeVoucher;
          await voucher.save();
          resolve({
            errCode: 0,
            errMessage: "Update voucher successfully !",
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};
export const deleteVoucher = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter !",
        });
      } else {
        let voucher = await db.Voucher.findOne({
          where: { id: data.id },
        });
        if (!voucher) {
          resolve({
            errCode: 2,
            errMessage: "Voucher not found !",
          });
        } else {
          await db.Voucher.destroy({
            where: { id: data.id },
          });
          resolve({
            errCode: 0,
            errMessage: "Delete voucher successfully !",
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};
export const saveUserVoucher = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.voucherId || !data.userId) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter !",
        });
      } else {
        let voucherused = await db.VoucherUsed.findOne({
          where: { voucherId: data.voucherId, userId: data.userId },
          raw: false,
        });
        if (voucherused) {
          resolve({
            errCode: 2,
            errMessage: "Voucher has been saved !",
          });
        } else {
          await db.VoucherUsed.create({
            voucherId: data.voucherId,
            userId: data.userId,
          });

          // let voucher = await db.Voucher.findOne({ where: { id: data.voucherId }, raw: false })

          // await voucher.save()
          resolve({
            errCode: 0,
            errMessage: "Save voucher successfully !",
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};
export const getAllVoucherByUserId = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter !",
        });
      } else {
        let objectFilter = {
          where: { userId: data.id, status: 0 },
        };
        if (data.limit && data.offset) {
          objectFilter.limit = +data.limit;
          objectFilter.offset = +data.offset;
        }

        let res = await db.VoucherUsed.findAndCountAll({
          objectFilter,
          raw: true,
          nest: true,
        });
        for (let i = 0; i < res.rows.length; i++) {
          res.rows[i].voucherData = await db.Voucher.findOne({
            where: { id: res.rows[i].voucherId },
            include: [
              {
                model: db.TypeVoucher,
                as: "typeVoucherOfVoucherData",
                include: [
                  {
                    model: db.Allcode,
                    as: "typeVoucherData",
                    attributes: ["value", "code"],
                  },
                ],
              },
            ],
            raw: true,
            nest: true,
          });

          let voucherUsedCount = await db.VoucherUsed.findAll({
            where: {
              voucherId: res.rows[i].voucherData.id,
              status: 1,
            },
          });
          res.rows[i].voucherData.usedAmount = voucherUsedCount.length;
        }
        resolve({
          errCode: 0,
          count: res.count,
          data: res.rows,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
