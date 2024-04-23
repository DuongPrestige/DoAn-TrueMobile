import db from "../models";
const { Op } = require("sequelize");

export const createNewBanner = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.image || !data.description || !data.name) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter !",
        });
      } else {
        await db.Banner.create({
          name: data.name,
          description: data.description,
          image: data.image,
          statusId: "S1",
        });
        resolve({
          errCode: 0,
          errMessage: "Create banner succeed !",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const getDetailBanner = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter !",
        });
      } else {
        let res = await db.Banner.findOne({
          where: { id: id },
        });

        //loi anh buffer PayloadTooLargeError: request entity too large
        if (res && res.image) {
          res.image = new Buffer(res.image, "base64").toString("binary");
          console.log(res.image);
        }
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

//phan trang
export const getAllBanner = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let objectFilter = {
        where: { statusId: "S1" },
      };
      if (data.limit && data.offset) {
        objectFilter.limit = +data.limit;
        objectFilter.offset = +data.offset;
      }
      if (data.keyword !== "")
        objectFilter.where = {
          ...objectFilter.where,
          name: { [Op.substring]: data.keyword },
        };
      let res = await db.Banner.findAndCountAll(objectFilter);
      if (res.rows && res.rows.length > 0) {
        res.rows.map(
          (item) =>
            (item.image = new Buffer(item.image, "base64").toString("binary"))
        );
      }
      resolve({
        errCode: 0,
        data: res.rows,
        count: res.count,
      });
    } catch (error) {
      reject(error);
    }
  });
};

export const updateBanner = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id || !data.image || !data.description || !data.name) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter !",
        });
      } else {
        let banner = await db.Banner.findOne({
          where: { id: data.id },
          raw: false,
        });
        if (banner) {
          banner.name = data.name;
          banner.description = data.description;
          banner.image = data.image;

          await banner.save();
          resolve({
            errCode: 0,
            errMessage: "Update banner succeed !",
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};
export const deleteBanner = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter !",
        });
      } else {
        let banner = await db.Banner.findOne({
          where: { id: data.id },
        });
        if (banner) {
          await db.Banner.destroy({
            where: { id: data.id },
          });
          resolve({
            errCode: 0,
            errMessage: "Delete banner succeed !",
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};
