Cvs = new Mongo.Collection('cvs'),

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
})

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
})

CvSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Nume",
    },
    email: {
        type: String,
        // regEx: SimpleSchema.RegEx.Email,
        label: "E-mail"
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
        autoform: {
            type: "select",
            options: function () {
                return [
                    { label: "F", value: "F" },
                    { label: "M", value: "M" },
                ]
            }
        }
    },
    department: {
        type: String,
        label: "Departament",
        optional: true,
        autoform: {
            type: "select",
            options: function () {
                return [
                    { label: "Maran", value: "Maran" },
                    { label: "Maran BackOffice", value: "MaranBO" },
                    { label: "Vodafone", value: "Vodafone" },
                    { label: "Triboo", value: "Triboo" },
                ]
            }
        }
    },
    experiences: {
        label: "Experienta",
        type: [Experience],
        optional: true,
    },
    languages: {
        label: "Limbi Vorbite",
        type: [Languages],
        optional: true,
    },
    inMenu: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: "hidden"
        }
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function () {
            return this.userId
        },
        autoform: {
            type: "hidden"
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
})

Cvs.attachSchema(CvSchema)