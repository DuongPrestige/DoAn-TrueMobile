import db from "../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8));

const salt = bcrypt.genSaltSync(10);
const hashUserPasswordFromBcrypt = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (error) {
      reject(error);
    }
  });
};

// export const register = (body) => new Promise(async (resolve, reject) => {
//     try {
//         // console.log(data.password)

//         // console.log(firstName)

//         // console.log('------')
//         // console.log(password)
//         const response = await db.User.findOrCreate({
//             where: {email: body.email},
//             defaults:{
//                 email,
//                 password: hashPassword(body.password),
//                 firstName: body.firstName
//             }
//         })

//         const token = response[1] ? jwt.sign({id: response[0].id, email: response[0].email, roleId: response[0].roleId}, process.env.JWT_SECRET,{expiresIn:'5d'}) : null
//         resolve({
//             err: response[1] ? 0 : 1,
//             mes: response[1] ? 'Register is successfully' : 'Email is used',
//             'access_token': token ? `Bearer ${token}` : token
//         })

//     } catch (error) {
//         reject(error)
//     }
// })

export const register = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOrCreate({
        where: { email: body.email },
        defaults: {
          email: body.email,
          password: hashPassword(body.password),
          firstName: body.firstName,
          lastName: body.lastName,
          address: body.address,
          genderId: body.genderId,
          phonenumber: body.phonenumber,
          image:
            "data:image/png;base64,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",
          dob: body.dob,
          isActiveEmail: 0,
          statusId: "S1",
          usertoken: "",
        },
      });

      const token = response[1]
        ? jwt.sign(
            {
              id: response[0].id,
              email: response[0].email,
              roleId: response[0].roleId,
            },
            process.env.JWT_SECRET,
            { expiresIn: "5d" }
          )
        : null;
      resolve({
        err: response[1] ? 0 : 1,
        mes: response[1] ? "Register is successful" : "Email is used",
        access_token: token,
      });
    } catch (error) {
      reject(error);
    }
  });

// export const login = ({email, password}) => new Promise(async (resolve, reject) => {
//     try {

//         const response = await db.User.findOne({
//             where: {email},
//             raw: true
//         })

//         const isChecked = response && bcrypt.compareSync(password,response.password)
//         const token = isChecked ? jwt.sign({id: response.id, email: response.email, roleId: response.roleId}, process.env.JWT_SECRET,{expiresIn:'5d'}) : null

//         resolve({
//             err: token ? 0 : 1,
//             mes: token ? 'Login is successfully' : response ? 'Password is wrong' : 'Email has not been registered',
//             'access_token': token ? `Bearer ${token}` : token
//         })

//     } catch (error) {
//         reject(error)
//     }
// })

export const login = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      if (!data.email || !data.password) {
        resolve({
          errCode: 4,
          errMessage: "Missing required parameters!",
        });
      } else {
        const response = await db.User.findOne({
          where: { email: data.email }, // Thay body.email thành data.email
          raw: true,
        });
        let userData = {};

        const isChecked =
          response && bcrypt.compareSync(data.password, response.password);
        const token = isChecked
          ? jwt.sign(
              {
                id: response.id,
                email: response.email,
                roleId: response.roleId,
              },
              process.env.JWT_SECRET,
              { expiresIn: "5d" }
            )
          : null;

        let user = await db.User.findOne({
          attributes: [
            "email",
            "roleId",
            "password",
            "firstName",
            "lastName",
            "id",
          ],
          where: { email: data.email, statusId: "S1" },
          raw: true,
          nest: true,
        });
        if (user) {
          if (isChecked) {
            userData.errCode = 0;
            userData.errMessage = "Logged in successfully";

            delete user.password;

            userData.user = user;
            userData.accessToken = token;
          } else {
            userData.errCode = 3;

            userData.errMessage = "Wrong password";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = "User not found!";
        }
        resolve(userData);
      }
    } catch (error) {
      reject(error);
    }
  });

//get one user function
export const getOne = (usersId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { id: usersId },
        //ko lay thuoc tinh
        attributes: {
          exclude: ["password"],
        },
      });

      resolve({
        err: response ? 0 : 1,
        mes: response ? "Got one user information" : "User not found",
        userData: response,
      });
    } catch (error) {
      reject(error);
    }
  });

// export const getAllUsers = () =>
//   new Promise(async (resolve, reject) => {
//     try {
//       const response = await db.User.findAll();
//       resolve(response);
//     } catch (error) {
//       reject(error);
//     }
//   });

export const getAllUsers = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let objectFilter = {
        where: { statusId: "S1" },
        attributes: {
          exclude: ["password", "image"],
        },
        order: [["createdAt", "DESC"]],
        include: [
          { model: db.Allcode, as: "roleData", attributes: ["value", "code"] },
          {
            model: db.Allcode,
            as: "genderData",
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
      if (data.keyword !== "")
        objectFilter.where = {
          ...objectFilter.where,
          phonenumber: { [Op.substring]: data.keyword },
        };
      let res = await db.User.findAndCountAll(objectFilter);
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

// export const getUserById = (userId) =>
//   new Promise(async (resolve, reject) => {
//     try {
//       const response = await db.User.findOne({
//         where: { id: userId },
//         raw: true,
//         attributes: {
//           exclude: [
//             "password",
//             "firstName",
//             "lastName",
//             "address",
//             "genderId",
//             "phonenumber",
//             "dob",
//             "isActiveEmail",
//             "statusId",
//             "usertoken",
//             "createdAt",
//             "updatedAt",
//           ],
//         },
//       });

//       // if(response){
//       //     resolve(response)
//       // }
//       // else{
//       //     resolve([])
//       // }

//       resolve({
//         err: response ? 0 : 1,
//         mes: response ? "Got one user information" : "User not found",
//         userData: response,
//       });

//       // resolve({
//       //     err: response ? 0 : 1,
//       //     mes: response ? 'Found a user' : response ? 'Password is wrong' : 'Email has not been registered',
//       //     'access_token': token ? `Bearer ${token}` : token
//       // })
//     } catch (error) {
//       reject(error);
//     }
//   });

export const getDetailUserById = (userid) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!userid) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameters!",
        });
      } else {
        let res = await db.User.findOne({
          where: { id: userid, statusId: "S1" },
          attributes: {
            exclude: ["password"],
          },
          include: [
            {
              model: db.Allcode,
              as: "roleData",
              attributes: ["value", "code"],
            },
            {
              model: db.Allcode,
              as: "genderData",
              attributes: ["value", "code"],
            },
          ],
          raw: true,
          nest: true,
        });
        if (res.image) {
          res.image = new Buffer(res.image, "base64").toString("binary");
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

export const deleteUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { id: userId },
      });

      resolve(
        response
          ? (await response.destroy(),
            { err: 1, mes: "Delete the user succeed" })
          : { err: -1, mes: "UserId not found!" }
      );
    } catch (error) {
      reject(error);
    }
  });
};

// export const deleteUserByEmail = (emailId) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const response = await db.User.findOne({
//                 where: {email: emailId}
//             })

//             if(response){
//                 await response.destroy();
//             }

//             resolve()

//             // resolve({
//             //     err: response ? 1 : 0,
//             //     mes: `${response} deleted`
//             // })

//         } catch (error) {
//             reject(error)
//         }
//     })
// }

// export const deleteUserbyCopilot = (identifier) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let response;
//             if (typeof identifier === 'number') {
//                 response = await db.User.findOne({
//                     where: { id: identifier }
//                 });
//             } else if (typeof identifier === 'string') {
//                 response = await db.User.findOne({
//                     where: { email: identifier }
//                 });
//             } else {
//                 resolve({
//                     err: -1,
//                     mes: 'Invalid identifier type'
//                 });
//             }

//             if (response) {
//                 await response.destroy();
//                 resolve({
//                     err: 1,
//                     mes: 'Delete the user succeed'
//                 });
//             } else {
//                 resolve({
//                     err: -1,
//                     mes: 'User not found!'
//                 });
//             }
//         } catch (error) {
//             reject(error);
//         }
//     });
// }

export const updateUserData = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // if (!data.id || !data.genderId) {
      //     resolve({
      //         errCode: 2,
      //         errMessage: `Missing required parameters`
      //     })
      // } else {
      let user = await db.User.findOne({
        where: { id: data.id },
        raw: false,
      });
      if (user) {
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.address = data.address;
        user.roleId = data.roleId;
        user.genderId = data.genderId;
        user.phonenumber = data.phonenumber;
        user.dob = data.dob;
        if (data.image) {
          user.image = data.image;
        }
        await user.save();
        resolve({
          errCode: 0,
          errMessage: "Update the user succeeds!",
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: "User not found!",
        });
      }
      // }
    } catch (error) {
      reject(error);
    }
  });
};

export const handleChangePassword = (data, idUser) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.password || !data.oldpassword) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter!",
        });
      } else {
        let user = await db.User.findOne({
          where: { id: idUser },
          raw: false,
        });
        if (await bcrypt.compareSync(data.oldpassword, user.password)) {
          if (user) {
            user.password = await hashUserPasswordFromBcrypt(data.password);
            await user.save();
          }
          resolve({
            errCode: 0,
            errMessage: "Đã thay đổi mật khẩu thành công!",
          });
        } else {
          resolve({
            errCode: 2,
            errMessage: "Mật khẩu cũ không chính xác XXX",
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const handleForgotPassword = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id || !data.token || !data.password) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter!",
        });
      } else {
        let user = await db.User.findOne({
          where: {
            id: data.id,
            usertoken: data.token,
          },
          attributes: {
            exclude: ["password"],
          },
          raw: false,
        });

        if (user) {
          user.password = await hashUserPasswordFromBcrypt(data.password);
          user.usertoken = "";

          await user.save();
        }
        resolve({
          errCode: 0,
          errMessage: "ok",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
