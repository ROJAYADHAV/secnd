import {VoteComponent} from './vote.component';
describe('VoteComponent',()=>{
    let component: VoteComponent;
    beforeEach(()=>{
     component=new VoteComponent;
    });

    it('should increment vote when upvotes',()=>{
       
        component.upvotes();
        expect(component.tv).toBe(1);
    });
    it('should dec vote when downvotes',()=>{
        component.downvotes();
        expect(component.tv).toBe(-1);
    });
    
    
});