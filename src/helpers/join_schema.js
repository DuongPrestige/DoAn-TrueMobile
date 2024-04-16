import joi from "joi";

//using for validate

// export const email = joi.string().email({minDomainSegments: 2, tlds:{allow: ['com']}}).required()
// export const email = joi.string().email({minDomainSegments: 2, tlds:{allow: ['com']}}).required()

// export const password = joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required()
// export const firstName = joi.string()
// export const lastName = joi.string()
// export const address = joi.string()
// export const roleId = joi.string()

// export const lastName = joi.string()

const userSchema = joi.object({
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com"] } })
    .required(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,30}$")).required(),
  firstName: joi.string(),
  lastName: joi.string(),
  address: joi.string(),
  genderId: joi.string(),
  phonenumber: joi.string(),
  image: joi.string(),
  dob: joi.string(),
  isActiveEmail: joi.string(),
  statusId: joi.string(),
  usertoken: joi.string(),
});

export { userSchema }; // Export userSchema đúng cách
