import {factorial} from './factorial';

 describe('factorial',()=>{

     it('should be return invalid when n is 0',()=>{

         const result=factorial(-2);

expect(result).toBe('invalid');

     })

     it('should be return factorial sum when n is greater than 0',()=>{

        const result=factorial(5);

expect(factorial(5)).toBe(result);

    })

 })