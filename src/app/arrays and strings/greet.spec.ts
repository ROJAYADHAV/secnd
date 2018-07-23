import {greet} from './greet';
describe('greet',()=>{
    it('should contain name',()=>{
        let str=greet('rose');
        expect(str).toContain('rose');
    })
})