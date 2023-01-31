'use strict';

const seattleStore = {
  city: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCust: 6.3,

  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);  
  }
}

console.log(seattleStore.randomCustomers(seattleStore.maxCust));

const tokyoStore = {
  city: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCust: 1.2,

  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);  
  }
}

const dubaiStore = {
  city: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCust: 3.7,

  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);  
  }
}

const parisStore = {
  city: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCust: 2.3,

  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);  
  }
}

const limaStore = {
  city: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCust: 4.6,

  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);  
  }
}