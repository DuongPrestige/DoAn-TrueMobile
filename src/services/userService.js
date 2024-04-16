import db from "../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
          image: body.image,
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
        access_token: token ? `Bearer ${token}` : token,
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
      const response = await db.User.findOne({
        where: { email: data.email }, // Thay body.email thành data.email
        raw: true,
      });

      const isChecked =
        response && bcrypt.compareSync(data.password, response.password);
      const token = isChecked
        ? jwt.sign(
            { id: response.id, email: response.email, roleId: response.roleId },
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
      });

      resolve({
        err: token ? 0 : 1,
        mes: token
          ? "Login is successful"
          : response
          ? "Password is wrong"
          : "Email has not been registered",
        user: user,
        access_token: token ? `Bearer ${token}` : token,
      });
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
