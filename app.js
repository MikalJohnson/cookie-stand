'use strict';

// Set our hours array
// 14 hours from 6 a.m to 8 p.m
let hours = ['6 a.m', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 p.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 p.m', '7 p.m']


// CREATE STORE OBJECT
// create separate JS object literals for each shop location.
// Each object will generating sales data and output on sales html.
let seattle = {
  name: 'seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  salesArray: [],
  
  // Use a method of that object to generate a random number of customers per hour. Objects/Math/random
  randomNumOfCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  // Use a method of that object to generate a random number of customers per hour. Objects/Math/random
  cookiesPerHour: function() {
    for (let i = 0; i < hours.length; i++) {
      let customers = this.randomNumOfCustomers();
      let cookiesSoldThisHour = Math.ceil(customers * this.avg);
      this.salesArray.push(cookiesSoldThisHour)
      console.log(this.salesArray);
    }
  }
}

console.log(seattle.cookiesPerHour())