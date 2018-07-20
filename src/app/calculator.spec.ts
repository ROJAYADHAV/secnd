import { Calculator } from './calculator';



describe('Calcultor Without Inputs (Basic Class)', () => {

    let firstNumber :number = 0;

    let secondNumber :number = 0;

    let result : number = 0;



    let objCaculator : Calculator;



    beforeEach(() => { 

        this.objCaculator = new Calculator();

    });



    afterEach(() => { 

        this.objCaculator=null;

        this.firstNumber=0;

        this.secondNumber=0;

        this.result=0;

    });



    it('check number addition', () => {

        this.firstNumber=10;

        this.secondNumber=20;

        this.result=this.firstNumber + this.secondNumber;

        expect(this.objCaculator.addNumbers())

            .toEqual(this.result);

    });



    it('check number Subtract', () => {

        this.firstNumber=10;

        this.secondNumber=20;

        this.result=this.firstNumber - this.secondNumber;

        expect(this.objCaculator.subtractNumbers())

            .toEqual(this.result);

    });



    it('check number Multiply', () => {

        this.firstNumber=10;

        this.secondNumber=20;

        this.result=this.firstNumber * this.secondNumber;

        expect(this.objCaculator.multiplyNumbers())

            .toEqual(this.result);

    });

});