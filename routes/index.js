const companyController = require('../controllers').company;
const employeeController = require('../controllers').employee;
module.exports = (app) => {
    app.get('/api/company', companyController.get);
    app.get('/api/company/id', companyController.getById);
    app.post('/api/company', companyController.create);
    app.post('/api/employee', employeeController.create);
    app.get('/api/employee', employeeController.get);
    app.get('/api/employee/id', employeeController.getById);
};