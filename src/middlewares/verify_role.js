import {notAuth} from "./handle_error"

export const isAdmin = (req, res, next) => {
    const {roleId} = req.user
    if(roleId !== 'R1') return notAuth ('Require role Admin', res)
    next()
}

export const isSaler = (req, res, next) => {
    const {roleId} = req.user
    if(roleId !== 'R4') return notAuth ('Require role Saler', res)
    next()
}

