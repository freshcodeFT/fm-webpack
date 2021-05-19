/*
  const someName = require('./Component');
  import someName from './Component'
*/

/*
  module.exports.someValue = 5;
  module.exports.testValue = 'test';
  export const someValue = 5;
  export const testValue = 'test';
*/

/*
  const testFunction = () => {};
  module.exports = testFunction;
  export default testFunction;
*/

/*
  //> someValue, testValue не экспортируются
  module.exports.someValue = 5;
  module.exports.testValue = 'test';
  const testFunction = () => {};
  module.exports = testFunction;
  //<

  // Все значения экспортируются
  export const someValue = 5;
  export const testValue = 'test';
  export default testFunction;
*/

export default 5;