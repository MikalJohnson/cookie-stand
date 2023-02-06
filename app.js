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
  dailyTotal: 0,
  
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

      this.dailyTotal += cookiesSoldThisHour;
    }
    console.log(this.salesArray);

  },
  render: function() {
    this.cookiesPerHour();
    // Window into the DOM
    let salesContainer = document.getElementById('seattle-sales');

    // Created ul element
    let ulElement = document.createElement('ul');
    salesContainer.appendChild(ulElement);

    // Created for loop for li elements
    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li')
      liElement.textContent = `${hours[i]}: ${this.salesArray[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    
    //Daily total
    let totalLiElement = document.createElement('li');
    totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
    ulElement.appendChild(totalLiElement);

  }
}
let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  salesArray: [],
  dailyTotal: 0,
  
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

      this.dailyTotal += cookiesSoldThisHour;
    }
    console.log(this.salesArray);

  },
  render: function() {
    this.cookiesPerHour();
    // Window into the DOM
    let salesContainer = document.getElementById('tokyo-sales');

    // Created ul element
    let ulElement = document.createElement('ul');
    salesContainer.appendChild(ulElement);

    // Created for loop for li elements
    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li')
      liElement.textContent = `${hours[i]}: ${this.salesArray[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    
    //Daily total
    let totalLiElement = document.createElement('li');
    totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
    ulElement.appendChild(totalLiElement);

  }
}
let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  salesArray: [],
  dailyTotal: 0,
  
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

      this.dailyTotal += cookiesSoldThisHour;
    }
    console.log(this.salesArray);

  },
  render: function() {
    this.cookiesPerHour();
    // Window into the DOM
    let salesContainer = document.getElementById('dubai-sales');

    // Created ul element
    let ulElement = document.createElement('ul');
    salesContainer.appendChild(ulElement);

    // Created for loop for li elements
    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li')
      liElement.textContent = `${hours[i]}: ${this.salesArray[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    
    //Daily total
    let totalLiElement = document.createElement('li');
    totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
    ulElement.appendChild(totalLiElement);

  }
}
let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  salesArray: [],
  dailyTotal: 0,
  
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

      this.dailyTotal += cookiesSoldThisHour;
    }
    console.log(this.salesArray);

  },
  render: function() {
    this.cookiesPerHour();
    // Window into the DOM
    let salesContainer = document.getElementById('paris-sales');

    // Created ul element
    let ulElement = document.createElement('ul');
    salesContainer.appendChild(ulElement);

    // Created for loop for li elements
    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li')
      liElement.textContent = `${hours[i]}: ${this.salesArray[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    
    //Daily total
    let totalLiElement = document.createElement('li');
    totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
    ulElement.appendChild(totalLiElement);

  }
}
let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  salesArray: [],
  dailyTotal: 0,
  
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

      this.dailyTotal += cookiesSoldThisHour;
    }
    console.log(this.salesArray);

  },
  render: function() {
    this.cookiesPerHour();
    // Window into the DOM
    let salesContainer = document.getElementById('lima-sales');

    // Created ul element
    let ulElement = document.createElement('ul');
    salesContainer.appendChild(ulElement);

    // Created for loop for li elements
    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li')
      liElement.textContent = `${hours[i]}: ${this.salesArray[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    
    //Daily total
    let totalLiElement = document.createElement('li');
    totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
    ulElement.appendChild(totalLiElement);

  }
}



seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
console.log(seattle.cookiesPerHour())

