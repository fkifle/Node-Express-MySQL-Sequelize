const Employee = require('../models').Employee;
const Company = require('../models').Company;
module.exports = {
    create(req, res) {
        return Employee.create({
            name: req.body.name,
            designation: req.body.designation,
            salary: req.body.salary,
            companyId: req.body.companyId
        })
        .then(employee => res.status(201).send(employee))
        .catch(error => res.status(400).send(error));
    },
    getById(req, res) {
        const id = parseInt(req.query.id);
        return Employee.findOne({where: {id}})
        .then(employee => res.status(201).send(employee))
        .catch(error => res.status(400).send(error));
    },
    get(req, res) {
        return Employee.findAll({include: [{model: Company}]}).then(employees => res.status(201).send(employees));
    }
};