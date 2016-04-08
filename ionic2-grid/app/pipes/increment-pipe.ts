import {Pipe} from 'angular2/core';

@Pipe({
    name:'increment'
})
export class IncrementPipe {
    transform(value,[step]) {
      console.log("value " + value + ", step " + step);
      return value % step == 0;
    }
}
