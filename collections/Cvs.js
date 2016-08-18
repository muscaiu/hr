Cvs = new Mongo.Collection('cvs');

Cvs.allow({
    insert: function(userId, doc){
        return !!userId;
    },
    update: function(userId, doc){
        return !!userId;
    }
});

//Methods for toggle, delete etc
Meteor.methods({
    toggleMenuItem: function(id, currentState){
        Cvs.update(id,{
            $set:{
                inMenu: !currentState
            }
        });
    },
    deleteCv: function(id){
        Cvs.remove(id);
    }
});

Experience = new SimpleSchema({
    name: {
        type: String
    },
    ammount: {
        type: String
    }
});

CvSchema = new SimpleSchema({
    name:{
        type: String,
        label: "Name"
    },
    email:{
        type: String,
        label: "Email"
    },
    age: {
        type: String,
        label: "Age"
    },
    languageLevel: {
        type: String,
        label: "Language Level"
    },
    sex: {
        type: String,
        label: "Sex"
    },
    experiences:{
        type: [Experience]
    },
    inMenu:{
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform:{
            type:"hidden"
        }
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function(){
            return this.userId
        },
        autoform:{
            type:"hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function(){
            return new Date()
        },
        autoform:{
            type: "hidden"
        }
    }
});

Cvs.attachSchema(CvSchema);