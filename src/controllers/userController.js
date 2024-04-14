import * as services from "../services/"
import {internalServer, badRequest} from '../middlewares/handle_error'
import { userSchema } from '../helpers/join_schema';
// export const register = async (req,res) => {
//     try {
//         //validate email && password 
//          console.log(123,req.body.email)
//         const {error} = user.validate(req.body.email, req.body.password )

//         // const {error} = joi.object({email, password}).validate(req.body)
//         console.log("----------------------")
//         console.log(error)
//         // console.log(567)
//         if(error) return badRequest(error.details[0]?.message,res)
//         // if(error) return res.status(200).json(error)

//         const response = await services.register(req.body)
//         return res.status(200).json(response)
        
//     } catch (error) {
//         console.log('bat nhe',error)
  

//         return internalServer(res)
//     }
// }

export const register = async (req,res) => {
    try {
        //ham check regex
        const { error } = userSchema.validate({
            email: req.body.email,
            password: req.body.password
        });

        if (error) return badRequest(error.details[0]?.message, res);
    
        const response = await services.register(req.body);
        return res.status(200).json(response);
        
    } catch (error) {    
        console.error("Error in register:", error);
        return internalServer(res);
    }
}


// export const login = async (req,res) => {
//     try {

//         const {error} = joi.object({email,password}).validate(req.body)
//         if(error) return badRequest(error.details[0]?.message,res)

//         const response = await services.login(req.body)
//         return res.status(200).json(response)
        
//     } catch (error) {
//         return internalServer(res)
//     }
// }

export const login = async (req,res) => {
    try {

        const { error } = userSchema.validate({
            email: req.body.email,
            password: req.body.password
        });

        if (error) return badRequest(error.details[0]?.message, res);

        const response = await services.login(req.body)
        return res.status(200).json(response)
        
    } catch (error) {
        console.error("Error in login:", error);

        return internalServer(res)
    }
}

//get user by token who logging in
export const getCurrentUser = async (req,res) => {
    try {

        const {id} = req.user


        const response = await services.getOne(id)
        return res.status(200).json(response)
        
    } catch (error) {
        return internalServer(res)
    }
}

export const getAllUers = async (req, res) => {
    try {

        const response = await services.getAllUsers()
        return res.status(200).json(response)
        
    } catch (error) {
        return internalServer(res)
    }
}


export const getUserById = async (req, res) => {
    try {
        const userId = req.body.id;
        if(userId) {
            const response = await services.getUserById(userId)
            return res.status(200).json(response)
        }

       
        
    } catch (error) {
        return internalServer(res)
    }
}


export const handleDeleteUser = async (req,res) => {
    try {

        // const {error} = joi.object({email}).validate(req.body)
        // if(error) return badRequest(error.details[0]?.message,res)

        // const {id} = req.user
        // const userId = req.body.id
        // services.deleteUser(userId)

        const userId = req.body.id;
        if(userId) {
            const response = await services.deleteUser(userId)
            return res.status(200).json(response)
        }

             
    } catch (error) {
        return internalServer(res)
    }
}


export const handleDeleteUserByEmail = async (req,res) => {
    try {

        // const {error} = joi.object({email}).validate(req.body)
        // if(error) return badRequest(error.details[0]?.message,res)

        // const {id} = req.user
        const emailId = req.body.email

        services.deleteUser(emailId)
        // return res.status(200).json(response)

        return res.send('Delete the user succeed')
        
    } catch (error) {
        return internalServer(res)
    }
}

export const handleUpdateUser = async (req, res) => {
    try {
        const data = await services.updateUserData(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in UpdateUser:", error);
        return internalServer(res);
    }
}


export const handleChangePassword = async (req, res) => {
    try {
        const {id} = req.user
        // console.log("1. req.user ", id)
        // console.log("-------------")

        // const userId = req.user.id;
        // console.log("2. req.body.id", userId)

        const data = await services.handleChangePassword(req.body, id);
        return res.status(200).json(data);
    } catch (error) {
        console.log("Error in Change Password:", error)
        return internalServer(res);
    }
}



export const handleForgotPassword = async (req, res) => {
    try {
        let data = await services.handleForgotPassword(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log("Error in Forgot Password :", error)
        return internalServer(res);
    }
}

