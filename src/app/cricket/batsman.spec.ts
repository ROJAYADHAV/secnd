import { Batsman } from './batsman';
describe('Batsman c',()=>{
    it('Testing whether the batsman class exists',()=>{
        const batsman=new Batsman('Rahul Dravid');
        expect(batsman).toBeDefined();
    });
    it('Should return number of runs scord by the batsman',()=>{
        const batsman=new Batsman('Sachin');
        expect(batsman.numberOfRuns).toEqual(0);
    });
    it('Should return number of balls batted the batsman',()=>{
        const batsman=new Batsman('Sachin');
        expect(batsman.numberOfBallsBatted).toEqual(0);
    });
    it('Should return number of runs scord by the batsman',()=>{
        const batsman=new Batsman('Sachin');
        batsman.addRuns(50);
        expect(batsman.numberOfRuns).toEqual(50);
    });


});
