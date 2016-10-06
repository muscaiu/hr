CvsIndex = new EasySearch.Index({
    collection: Cvs,
    fields: ['name'],
    
    engine: new EasySearch.Minimongo()

    // defaultSearchOptions: {
    //     sortBy: 'createdAt'
    // },

    // engine: new EasySearch.ElasticSearch({
    //     body: () => {

    //     }
    // })


    // engine: new EasySearch.MongoDB({
        
        //sort: () => {createdAt: -1}
        //sort: function (searchObject, options) {
            //const sortBy = options.search.props.sortBy

            // if ('asc' === sortBy) {
            //     return {
            //         createdAt: 1
            //     }
            // } else if ('desc' === sortBy) {
            //     return {
            //         createdAt: -1
            //     }
            // } else {
            //     throw new Meteor.Error('Invalid sort')
            // }
        //}
})
// })