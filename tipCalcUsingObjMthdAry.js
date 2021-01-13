// Tip calculator using object,methods and arrays.
let bills = {
    firstName: 'Saransh',
    lastName: 'Lakra',
    bill: [124,48,268,180,42],
    tip: [],
    totalBill: [],
    calcBill: function(){
        for(i=0; i<= this.bill.length; i++){
            if(this.bill[i] < 50){
                this.tip[i] = this.bill[i]/5;
            }
            else if( this.bill[i]>50 && this.bill[i] < 200){
            this.tip[i] = 3*this.bill[i]/20;
            }
            else if(this.bill[i]>200){
            this.tip[i] = this.bill[i]/10;
            }
        }
        this.finalBill();
    },
    finalBill: function(){
       for(i=0; i<this.bill.length; i++) {
            this.totalBill[i] = this.tip[i] + this.bill[i];
        }
    }
    }
    bills.calcBill();
    console.log(bills);
    console.log(bills.tip);
    console.log(bills.totalBill);