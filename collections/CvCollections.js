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
        type: String,
        optional: true,
    },
    job: {
        label: "Job",
        type: String,
        optional: true,
    },
    ammount: {
        label: "Durata",
        type: String,
        optional: true,
    }
});

Languages = new SimpleSchema({
    language: {
        label: "Limba",
        type: String,
        optional: true,
    },
    level: {
        label: "Nivel",
        type: String,
        optional: true,
    }
});

CvSchema = new SimpleSchema({
    name:{
        type: String,
        label: "Nume",
    },
    email:{
        type: String,
        label: "Email"
    },
    files: {
        type: [String],
        optional: true,
        autoform: {
            type: 'ufs',
            collection: 'files',
            store: 'FileStore',
            publication: 'files',
            //thumbnails: 'thumbnails'
        }
    },
    age: {
        type: Number,
        min: 18,
        label: "Varsta",
        optional: true,
    },
    sex: {
        type: String,
        label: "Sex",
        optional: true,
        allowedValues: [
            "M", "F"
        ]
    },
    experiences:{
        label: "Experienta",
        type: [Experience],
        optional: true,
    },
    languages:{
        label: "Limbi Vorbite",
        type: [Languages],
        optional: true,
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
        // autoValue: function(){
        //     return new Date()
        // },
        // autoform: {
        //     afFieldInput: {
        //         type: "bootstrap-datetimepicker"
        //     }
        // }
    }
});

Cvs.attachSchema(CvSchema);