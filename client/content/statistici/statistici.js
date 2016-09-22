import Chart from 'chart'

//onCreated
Template.Statistici.onCreated(function () {
  this.subscribe('cvs')
})

// //////////////////////////////////////polarArea ///////////////////
//onRendered
Template.Statistici.onRendered(function () {
  const CHART = document.getElementById('polarArea')
  //Chart.defaults.scale.ticks.beginAtZero = true
  Chart.defaults.global.animation.duration = 2000
  const polarArea = new Chart(CHART, {
    type: 'polarArea',
    data: {
      labels: ["Angajati", "Interviuri", "Maran", "Maran BO",  "Triboo", "Vodafone"],
      datasets: [
        {
          backgroundColor: ["#9EEC00", "#999875", "#A1048C", "#FD7300", "#0067AC", "#E4000F"],
          //borderColor: "rgba(75,192,192,1)",
          //hoverBackgroundColor: ["#F90737", "#045891"],
          data: [0, 0, 0, 0, 0,0],
        }
      ],
    }
  })
  Tracker.autorun(() => {
    polarArea.data.datasets[0].data[0] = getAngajati()
    polarArea.data.datasets[0].data[1] = getInterviuri()
    polarArea.data.datasets[0].data[2] = getMaran()
    polarArea.data.datasets[0].data[3] = getMaranBO()
    polarArea.data.datasets[0].data[4] = getVodafone()
    polarArea.data.datasets[0].data[5] = getTriboo()

    polarArea.update()
  })
})

function getInterviuri() {
  return Cvs.find().count()
}
function getAngajati() {
  return Cvs.find({ inMenu: true }).count()
}
function getMaran() {
  return Cvs.find({inMenu: true, department: 'Maran' }).count()
}
function getMaranBO() {
  return Cvs.find({ inMenu: true, department: 'MaranBO' }).count()
}
function getVodafone() {
  return Cvs.find({ inMenu: true, department: 'Vodafone' }).count()
}
function getTriboo() {
  return Cvs.find({ inMenu: true, department: 'Triboo' }).count()
}
////////////////////// polarArea ///////////////////>





// // //////////////////////////////////////DOUGHNOT ///////////////////
// //onRendered
// Template.Statistici.onRendered(function () {
//   const CHART = document.getElementById('doughnutChart')
//   Chart.defaults.scale.ticks.beginAtZero = true
//   //console.log(Chart.defaults)
//   // Chart.defaults.global.responsive = true
//   // Chart.defaults.global.title.fontColor = "red"
//   // Chart.defaults.global.title.text = "Chart Title"
//   //Chart.defaults.global.animation.duration = 500
//   // Chart.defaults.global.legend.onClick = function(event,legendItem){
//   //     return console.log("legend clicked")
//   //   }
//   // Chart.defaults.global.animation.onComplete = () => {
//   //   console.log("chart loaded")
//   // }

//   const doughnutChart = new Chart(CHART, {
//     type: 'doughnut',
//     label: "Dog",
//     data: {
//       labels: ["Interviuri", "Angajati"],
//       datasets: [
//         {
//           fill: false,
//           //lineTension: 0.1,
//           backgroundColor: ["#FF6384", "#36A2EB"],
//           borderColor: "rgba(75,192,192,1)",
//           borderCapStyle: 'butt',
//           borderDash: [],
//           borderDashOffset: 0.0,
//           borderJoinStyle: 'miter',
//           hoverBackgroundColor: ["#F90737", "#045891"],
//           pointBorderColor: "rgba(75,192,192,1)",
//           pointBackgroundColor: "#fff",
//           pointBorderWidth: 1,
//           pointHoverRadius: 5,
//           pointHoverBackgroundColor: "rgba(75,192,192,1)",
//           pointHoverBorderColor: "rgba(220,220,220,1)",
//           pointHoverBorderWidth: 2,
//           pointRadius: 1,
//           pointHitRadius: 10,
//           data: [],
//           spanGaps: false,
//         }
//       ],
//     }
//   })
//   Tracker.autorun(() => {
//     console.log(getInterviuri())
//     //doughnutChart.data.datasets[0].data[1] = Cvs.find().count()
//     doughnutChart.data.datasets[0].data[0] = getInterviuri()
//     doughnutChart.data.datasets[0].data[1] = getAngajati()
//     doughnutChart.update()
//   })
// })

// //helpers
// // Template.Statistici.helpers({
// //   totalInterviuri: () => {
// //     return getInterviuri()
// //   },
// //   totalAngajati: () => {
// //     return Cvs.find({ inMenu: true }).count()
// //   },

// //totalAngajati = Cvs.find({ inMenu: true, createdAt: { $gte: '2016-09-15T00:00:00Z', $lte: '2016-09-15T23:59:59Z' }}).count()
// //totalAngajati = Cvs.find({ inMenu: true, createdAt: { $gte: new Date('2016-09-15'), $lt: new Date('2016-09-16') }}).count()

// // const startDate = new Date('2016-09-15');
// // const endDate = moment(startDate).add(1, 'days').toDate();
// // totalAngajati = Cvs.find({ createdAt: { $gte: startDate, $lt: endDate } })
// //})

// function getInterviuri() {
//   return Cvs.find().count()
// }
// function getAngajati() {
//   //return Cvs.find({ inMenu: true, createdAt: { $gte: new Date('2016-09-15'), $lt: new Date('2016-09-16') } }).count()
//   return Cvs.find({ inMenu: true }).count()
// }

// // //////////////////////////////////////DOUGHNOT ////////////////////>