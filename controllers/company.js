const Company = require('../models').Company;
const Employee = require('../models').Employee;
module.exports = {
    create(req, res) {
        return Company.create({
            name: req.body.name,
        })
        .then(company => res.status(201).send(company))
        .catch(error => res.status(400).send(error));
    },
    getById(req, res) {
        const id = parseInt(req.query.id);
        return Company.findOne({where: {id}})
        .then(company => res.status(201).send(company))
        .catch(error => res.status(400).send(error));
    },
    get(req, res) {
        return Company.findAll({include: [{model: Employee}]}).then(companies => res.status(201).send(companies));
    }
};