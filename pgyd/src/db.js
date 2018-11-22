const { Prisma } = require('prisma-binding');

const db = new Prisma({
    typeDefs : '../src/generated/prisma.graphql',
    endpoint : 'https://eu1.prisma.sh/alameer-ashraf-hassan-52fb06/pgyd/dev',
    secret : '',
    debug : false
});

module.exports = db;