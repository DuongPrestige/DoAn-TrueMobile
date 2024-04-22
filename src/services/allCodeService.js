import db from "../models";
const { Op } = require("sequelize");

export const handleCreateNewAllCode = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.type || !data.value || !data.code) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameters !",
        });
      } else {
        let res = await db.Allcode.findOne({
          where: { code: data.code },
        });

        if (res) {
          resolve({
            errCode: 2,
            errMessage: "Mã code đã tồn tại XXX",
          });
        } else {
          await db.Allcode.create({
            type: data.type,
            value: data.value,
            code: data.code,
          });
        }

        resolve({
          errCode: 0,
          errMessage: "Mã mới đã được thêm!",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const handleUpdateAllCode = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.value || !data.code || !data.id) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameters!",
        });
      } else {
        let res = await db.Allcode.findOne({
          where: {
            id: data.id,
          },
          raw: false,
        });
        if (res) {
          res.value = data.value;
          res.code = data.code;
          await res.save();
        }
        resolve({
          errCode: 0,
          errMessage: `Đã sửa mã code ${res.type} thành công!`,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const handleDeleteAllCode = (allcodeId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!allcodeId) {
        resolve({
          errCode: 1,
          errMessage: `Missing required parameters !`,
        });
      } else {
        let foundAllCode = await db.Allcode.findOne({
          where: { id: allcodeId },
        });
        if (!foundAllCode) {
          resolve({
            errCode: 2,
            errMessage: `The allCode isn't exist`,
          });
        }
        await db.Allcode.destroy({
          where: { id: allcodeId },
        });
        resolve({
          errCode: 0,
          message: `The allCode is deleted`,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const getAllCodeService = (typeInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!typeInput) {
        resolve({
          errCode: 1,
          errMessage: "Missing required typeInput parameters!",
        });
      } else {
        let allcode = await db.Allcode.findAll({
          where: { type: typeInput },
        });
        resolve({
          errCode: 0,
          data: allcode,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

//phân trang
// export const getListAllCodeService = async (data) => {
//     try {
//         let objectFilter = {
//             where: { type: data.type },
//         };

//         // Apply pagination if limit and offset are provided
//         if (data.limit && data.offset) {
//             objectFilter.limit = +data.limit;
//             objectFilter.offset = +data.offset;
//         }

//         // Apply keyword search if keyword is provided
//         if (data.keyword !== '') {
//             objectFilter.where = {
//                 ...objectFilter.where,
//                 value: { [Op.substring]: data.keyword }
//             };
//         }

//         // Find and count all matching records
//         let allcode = await db.Allcode.findAndCountAll(objectFilter);

//         return {
//             errCode: 0,
//             data: allcode.rows,
//             count: allcode.count
//         };
//     } catch (error) {
//         throw error;
//     }
// }

//phan trang Hip06
// export const getListAllCodeService = ({ page, limit, type, order, ...query }) =>
//      new Promise(async (resolve, reject) => {
//         try {
//             const queries = { raw: true, nest: true };
//             const offset = (!page || +page <= 1) ? 0 : (+page - 1);
//             const flimit = +limit || 4;
//             queries.offset = offset * flimit;
//             queries.limit = flimit;
//             if (order) queries.order = [order];
//             if (type) query.type = { [Op.substring]: type };

//             const response = await db.Allcode.findAndCountAll({
//                 where: query,
//                 ...queries
//             });

//             resolve({
//                 err: response ? 0 : 1,
//                 mes: response ? 'Got all code successfully' : 'Failed to get all code',
//                 allcodeData: response
//             });

//         } catch (error) {
//             reject(error);
//         }
//     })

export const getListAllCodeService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let objectFilter = {
        where: { type: data.type },
      };
      if (data.limit && data.offset) {
        objectFilter.limit = +data.limit;
        objectFilter.offset = +data.offset;
      }
      if (data.keyword !== "")
        objectFilter.where = {
          ...objectFilter.where,
          value: { [Op.substring]: data.keyword },
        };
      let allcode = await db.Allcode.findAndCountAll(objectFilter);
      resolve({
        errCode: 0,
        count: allcode.count,
        data: allcode.rows,
      });
    } catch (error) {
      reject(error);
    }
  });
};

export const getDetailAllCodeById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameters !",
        });
      } else {
        let data = await db.Allcode.findOne({
          where: { id: id },
        });
        resolve({
          errCode: 0,
          data: data,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

//bo sung vao database sau
export const getAllCategoryBlog = (type) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!type) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameters !",
        });
      } else {
        let allcode = await db.Allcode.findAll({
          where: { type: type },
        });
        for (let i = 0; i < allcode.length; i++) {
          let blog = await db.Blog.findAll({
            where: { subjectId: allcode[i].code },
          });
          if (blog) allcode[i].countPost = blog.length;
        }

        resolve({
          errCode: 0,
          data: allcode,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
