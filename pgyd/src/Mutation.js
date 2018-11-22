const Mutation = {
    createUser: (parent , args, context, info) => {
        return context.db.mutation.createUser({
            data : {
                ...args
            }
        } , info);
    }
}

module.exports = Mutation;