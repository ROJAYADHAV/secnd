import {VoteComponent} from './vote.component';
describe('VoteComponent',()=>{
    it('should increment vote when upvotes',()=>{
        let component=new VoteComponent;
        component.upvotes();
        expect(component.tv).toBe(1);
    });
    it('should dec vote when downvotes',()=>{
        let component=new VoteComponent;
        component.downvotes();
        expect(component.tv).toBe(-1);
    });
    
    
});