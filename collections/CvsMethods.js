//Methods for toggle, delete etc
Meteor.methods({
    toggleMenuItem: function (id, currentState) {
        Cvs.update(id, {
            $set: {
                inMenu: !currentState
            }
        })
    },
    deleteCv: function (id) {
        Cvs.remove(id)
    }
})

Cvs.allow({
    insert: function (userId, doc) {
        return !!userId
    },
    update: function (userId, doc) {
        return !!userId
    }
})