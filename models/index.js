const importModels = (db) => {
    db.import('./users.js');
    db.import('./positions.js');
    db.import('./other_certs.js');
    db.import('./night_crews.js');
    db.import('./fuel_log.js');
    db.import('./events.js');
    db.import('./equipment.js');
    db.import('./ems_certs.js');
    db.import('./drivers_licenses.js');
    db.import('./default_schedule.js');
    db.import('./credentials.js');
    db.import('./audit_log.js');
    db.import('./users_positions.js');
    db.import('./users_other_certs.js');
    db.import('./users_ems_certs.js');
    db.import('./users_credentials.js');
    db.import('./radio_locations.js');
    db.import('./radio_distribution.js');
    db.import('./promo_requests.js');
    db.import('./individual_checklist_items.js');
    db.import('./event_logs.js');
    db.import('./eval_items.js');
    db.import('./checklist_items.js');
    db.import('./attendees.js');
    db.import('./users_eval_items.js');
    db.import('./users_checklist_items.js');
    db.import('./promo_request_votes.js');
    db.import('./permissions.js')
    db.import('./users_permissions.js')
};

module.exports = { importModels };
