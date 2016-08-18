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
        label: "Angajator",
        type: String
    },
    job: {
        label: "Job",
        type: String
    },
    ammount: {
        label: "Durata",
        type: String
    }
});

Languages = new SimpleSchema({
    language: {
        label: "Limba",
        type: String
    },
    level: {
        label: "Nivel",
        type: String
    }
});

CvSchema = new SimpleSchema({
    name:{
        type: String,
        label: "Nume"
    },
    email:{
        type: String,
        label: "Email"
    },
    age: {
        type: String,
        label: "Varsta"
    },
    sex: {
        type: String,
        label: "Sex"
    },
    experiences:{
        label: "Experienta",
        type: [Experience]
    },
    languages:{
        label: "Adauga Limba",
        type: [Languages]
    }
    ,
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
        label: "Data Interviu",
        autoValue: function(){
            return new Date()
        }
    }
});

Cvs.attachSchema(CvSchema);