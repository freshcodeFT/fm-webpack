import lodash from 'lodash';
import useless, {sum, sub} from './MyMath';
import Component from './Component';
import testFile, * as testData from './test';
import './styles.css';

console.log(testFile);
console.log(testData);
console.log(useless);
console.log(sum);
console.log(sub);

const component = new Component();
component.render();
console.log(lodash.random(0,200));
console.log('test');

/*
  Task
  Сделать простейший рендер карточки пользователя 
  (Имя, Фамилию, Описание)
  Использовать ESModules
*/