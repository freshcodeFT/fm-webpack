const Component = require('./Component');
const lodash = require('lodash');
require('./styles.css');

const component = new Component();
component.render();
console.log(lodash.random(0,200));