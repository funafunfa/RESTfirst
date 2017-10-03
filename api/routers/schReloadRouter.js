'use strict';
module.exports = function(app) {
    var schReload = require('../controllers/schReloadController.js');

    // todoList Routes
    app.route('/day')
        .get(schReload.list_all_days_api)
        .post(schReload.create_a_day);


    app.route('/group')
        .get(schReload.list_all_groups)
        .post(schReload.create_a_group);




    app.route('/test')
        .get(schReload.find_a_group_api_1401)
        .post(schReload.find_a_group_api_1401)
        .put(schReload.update_a_day)
        .delete(schReload.delete_a_day);



    app.route('/day/:dayId')
        .get(schReload.find_a_day)
        .put(schReload.update_a_day)
        .delete(schReload.delete_a_day);

    app.route('/api/day/:dayId')
        .get(schReload.find_a_day_api)
        .put(schReload.update_a_day)
        .delete(schReload.delete_a_day);

    app.route('/group/:groupName')
        .get(schReload.find_a_group)
        .put(schReload.update_a_day)
        .delete(schReload.delete_a_day);

    app.route('/api/group/:groupName')
        .get(schReload.find_a_group_api)
        .post(schReload.find_a_group_api)
        .put(schReload.update_a_day)
        .delete(schReload.delete_a_day);


};
