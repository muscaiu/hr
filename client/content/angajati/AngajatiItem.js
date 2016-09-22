Template.AngajatiItem.helpers({
    classHelper (department){
        if (department === 'Maran')
            return 'maran-class'
        else if (department === 'MaranBO')
            return 'maranbo-class'
        else if (department === 'Vodafone')
            return 'vodafone-class'
        else if (department === 'Triboo')
            return 'triboo-class'
    }
})
Template.registerHelper('formatDate', function(date, format){
    return moment(new Date(date)).format(format)
})