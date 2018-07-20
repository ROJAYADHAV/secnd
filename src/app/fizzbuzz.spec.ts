import { fizzbuzz } from "./fizzbuzz";



describe('fizzbuzz',()=>{

    it('should return fizzbuzz when number is divisble by both 3 and 5',()=>{

        expect(fizzbuzz(15)).toBe('fizzbuzz');

    })

    it('should return fizz when number is divisble by 5',()=>{

        expect(fizzbuzz(10)).toBe('fizz');

    })

    it('should return buzz when number is divisble by  3 ',()=>{

        expect(fizzbuzz(9)).toBe('buzz');

    })



});