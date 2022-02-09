const {
    NODE_ENV,
    MYSQL_DEV_HOST,
    MYSQL_DEV_USER,
    MYSQL_DEV_PASSWORD,
    MYSQL_DEV_DATABASE,
    MYSQL_TEST_HOST,
    MYSQL_TEST_USER,
    MYSQL_TEST_PASSWORD,
    MYSQL_TEST_DATABASE,
    MYSQL_PRO_HOST,
    MYSQL_PRO_USER,
    MYSQL_PRO_PASSWORD,
    MYSQL_PRO_DATABASE
} = process.env

const Host     = NODE_ENV === 'pro' ? MYSQL_PRO_HOST  :
                NODE_ENV === 'test' ? MYSQL_TEST_HOST :
                MYSQL_DEV_HOST

const User     = NODE_ENV === 'pro' ? MYSQL_PRO_USER  :
                NODE_ENV === 'test' ? MYSQL_TEST_USER :
                MYSQL_DEV_USER

const Password = NODE_ENV === 'pro' ? MYSQL_PRO_PASSWORD  :
                NODE_ENV === 'test' ? MYSQL_TEST_PASSWORD :
                MYSQL_DEV_PASSWORD

const Database = NODE_ENV === 'pro' ? MYSQL_PRO_DATABASE  :
                NODE_ENV === 'test' ? MYSQL_TEST_DATABASE :
                MYSQL_DEV_DATABASE

module.exports = {
    database: {
        host: Host,
        user: User,
        password: Password,
        database: Database
    }
};