// var _ = require('lodash')
import _ from 'lodash';

const data = [
  {
    username: 'carlos',
    role: 'admin',
  },
  {
    username: 'juan',
    role: 'seller',
  },
  {
    username: 'laura3',
    role: 'customer',
  },
  {
    username: 'laura2',
    role: 'seller',
  },
  {
    username: 'laura4',
    role: 'customer',
  },
  {
    username: 'laura5',
    role: 'admin',
  },
  {
    username: 'juan',
    role: 'client',
  },
];

console.log(data);
const x = _.groupBy(data, (i) =>
  i.role
);
console.log(x);
