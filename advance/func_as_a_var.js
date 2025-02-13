var userrole = function (user, role) {
    switch(role){
        case 'principal':
            console.log(`Full access to ${user}`);
            break;
        case 'teacher':
            console.log(`Half access to ${user}`);
            break;
        case 'student':
            console.log(`No access to ${user}`);
            break;
        default:
            console.log(`Trial user ${user}`);
            break;
    }
}

userrole('Himanshu', 'principal');