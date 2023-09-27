import { subDays, format } from 'date-fns';

const date = new Date(1998, 4, 27);
const newDate = subDays(date ,30)

console.log(date)
console.log(format(newDate, "yyyy-MM-dd"))
