
import {log} from './helpers'; 

@log
class Pet {
    constructor(name: string, age: number) { }
}

new Pet("Azor", 12);
//Arguments: Azor, 12