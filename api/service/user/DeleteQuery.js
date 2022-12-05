// Delete an user
exports.deleteUser = (email) => {
    let query =
        `DELETE FROM userinformation WHERE email = '${email}';`;
    return query;
}

// Delete all invitations related to user (For delete user)
exports.deleteUser_invitations = (email) => {
    let query =
        `DELETE FROM
            invitation 
        WHERE
            eventid IN ( SELECT eventid FROM event WHERE hostemail = '${email}' );`;
    return query;
}

// Delete all events related to user (For delete user)
exports.deleteUser_events = (email) => {
    let query =
        `DELETE FROM
            event 
        WHERE
            eventid IN ( SELECT eventid FROM event WHERE hostemail = '${email}' );`;
    return query;
}