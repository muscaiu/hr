
var Highcharts = require('highcharts/highstock');

Meteor.subscribe("cvs");

Template.Statistici.helpers({
    createChart: function () {
        // Gather data: 
        totalInterviuri = Cvs.find().count()
        //totalAngajati = Cvs.find({ inMenu: true}).count()
        //totalAngajati = Cvs.find({ inMenu: true, createdAt: { $gte: '2016-09-15T00:00:00Z', $lte: '2016-09-15T23:59:59Z' }}).count()
        totalAngajati = Cvs.find({ inMenu: true, createdAt: { $gte: new Date('2016-09-15'), $lt: new Date('2016-09-16') }}).count()
        
        const startDate = new Date('2016-09-15')
        const endDate = moment(startDate).add(1, 'days').toDate()
       // totalAngajati =  Cvs.find({ createdAt: { $gte: startDate, $lt: endDate}})

        // S1 = [
        //     {
        //         y: totalAngajati,
        //         name: "Angajati"
        //     },

        // S2 = [
        //     {
        //         y: 7,
        //         name: "seven"
        //     }
        // ]

        // Use Meteor.defer() to craete chart after DOM is ready:
        Meteor.defer(function () {
            // Create standard Highcharts chart with options:
            Highcharts.chart('chart', {
                title: {
                    text: 'Statistici'
                },
                series: [{
                    name: 'Angajati',
                    type: 'line',
                    //data: S1,
                    data: [{
                        y: totalAngajati,
                        name: "Angajati",
                        color: '#344357',
                    },
                        {
                            y: 3
                        },
                        {
                            y: 2
                        },
                        {
                            y: 4
                        }
                    ],
                    //lineWidth: 10,
                    //color: 'red',
                    allowPointSelect: true,
                    dataLabels: {
                        enabled: true
                    },
                    // zones: [{
                    //     value: 0,
                    //     color: 'purple'
                    // },
                    //     {
                    //         value: 5,
                    //         color: 'green'
                    //     },
                    //     {
                    //         color: 'orange'
                    //     }
                    // ]
                    //animation: false
                }, {
                        name: "Interviuri",
                        type: 'line',
                        data: [{
                            y: totalInterviuri,
                            name: "Interviuri",
                            color: '#FB9F00'
                        },
                            {
                                y: 6
                            },
                            {
                                y: 7
                            },
                            {
                                y: 5
                            },
                        ],
                        allowPointSelect: true,
                        dataLabels: {
                            enabled: true
                        },
                    }],
                tooltip: {
                    backgroundColor: {
                        linearGradient: [0, 0, 0, 60],
                        stops: [
                            [0, '#FFFFFF'],
                            [1, '#E0E0E0']
                        ]
                    },
                    borderWidth: 1,
                    borderColor: 'red',
                    // formatter: function () {
                    //     //return 'The value for <b>' + this.x + '</b> is <b>' + this.y + '</b>, in series ' + this.series.name;
                    //     return 'Value: ' + '</b> is <b>' + this.y + '</b>, in series ' + this.series.name;
                    // }
                },
                rangeSelector: {
                    allButtonsEnabled: true,
                    selected: 2

                },
                credits: {
                    enabled: false
                },
                // yAxis: {
                //     title: {
                //         text: 'Total'
                //     },
                //     type: 'linear',
                //     // labels: {
                //     //     formatter: function () {
                //     //         return this.value + ' %';
                //     //     }
                //     // },
                // },
                // xAxis: {
                //     title: {
                //         text: 'Perioada'
                //     },
                //     gridLineWidth: 1,
                //     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                // },

            });

        });

    }
})

