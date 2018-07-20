import {compute} from './compute';

describe('compute',()=>{

    it('should return -1 when number is less than zero',()=>{

        const result=compute(-1);

        expect(result).toBe(-1);



    })

    it('should return 1 when number is greater than zero',()=>{

        const result=compute(11);

        expect(result).toBe(1);



    })

})