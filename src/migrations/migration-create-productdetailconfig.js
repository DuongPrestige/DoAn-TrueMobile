'use strict';

const { sequelize } = require("../models");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('ProductDetailConfigs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            productdetailId: {
                type: Sequelize.INTEGER
            },
            colorId: {
                type: Sequelize.STRING
            },
            romId: {
                type: Sequelize.STRING
            },
            screen: {
                type: Sequelize.TEXT('long')
            },
            os: {
                type: Sequelize.TEXT('long')
            },
            backcam: {
                type: Sequelize.TEXT('long')
            },
            frontcam: {
                type: Sequelize.TEXT('long')
            },
            cpu: {
                type: Sequelize.TEXT('long')
            },
            ram: {
                type: Sequelize.TEXT('long')
            },
            sim: {
                type: Sequelize.TEXT('long')
            },
            battery: {
                type: Sequelize.TEXT('long')
            },
            design: {
                type: Sequelize.TEXT('long')
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('ProductDetailConfigs');
    }
};