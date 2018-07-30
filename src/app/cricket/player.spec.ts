import { Player } from './player';
describe('Testing whether the Player class is exists',()=>{
    it('Should says that the player class exists',()=>{
        const player=new Player('Sundar');
        expect(player).toBeDefined();
    });
    it('Should return the Player name',()=>{
        const player=new Player('Sundar');
        expect(player.playerName).toEqual('Sundar');
    });
})
