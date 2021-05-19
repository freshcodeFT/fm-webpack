/*const Component = require('./Component');
const lodash = require('lodash');
require('./styles.css');*/
import lodash from 'lodash';
import useless, * as MyMath from './MyMath';
import Component from './Component';
import testFile from './test';
import './styles.css';

console.log(testFile);
console.log(useless);
console.log(MyMath);

const component = new Component();
component.render();
console.log(lodash.random(0,200));
console.log('test');