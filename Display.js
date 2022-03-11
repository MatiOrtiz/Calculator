class Display{
    constructor(displayBeforeValue, displayNewValue){
        this.displayBeforeValue= displayBeforeValue;
        this.displayNewValue= displayNewValue;
        this.calculator= new Calculator();
        this.operationType= undefined;
        this.beforeValue= '';
        this.newValue= '';
        this.signs={
            add: '+',
            substract: '-',
            multiply: 'X',
            divide: '%',
        }
    }

    delete(){
        this.newValue = this.newValue.toString().slice(0,-1);
        this.printValues();
    }

    deleteAll(){
        this.newValue= '';
        this.beforeValue= '';
        this.operationType= undefined;
        this.printValues();
    }

    compute(type){
        this.operationType !== 'equal' && this.calculate();
        this.operationType= type;
        this.beforeValue= this.newValue || this.beforeValue;
        this.newValue= '';
        this.printValues();
    }

    addNumber(number){
        if (number === '.' && this.newValue.includes('.')){
            return} 
        this.newValue= this.newValue.toString() + number.toString();
        this.printValues();
    }

    printValues(){
        this.displayNewValue.textContent = this.newValue;
        this.displayBeforeValue.textContent = `${this.beforeValue} ${this.signs[this.operationType] || ''}`;
    }

    calculate(){
        const beforeValue= parseFloat(this.beforeValue);
        const newValue= parseFloat(this.newValue);

        if( isNaN(beforeValue) || isNaN(newValue) ){
            return;
        }
        this.newValue= this.calculator[this.operationType](beforeValue, newValue);
    }
}
