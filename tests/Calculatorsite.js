
let calc=require('../Pages/Calculatorpage');

describe('demo calculator protractor',function(){

    it('calculatortest',function(){
      
       calc.get('http://www.way2automation.com/angularjs-protractor/calc/');
      
       calc.enterfirstNo('12');

       calc.entersecondNo('13');
       browser.sleep(3000);   
     
       calc.clickgo();

       calc.verifyResult('25');

       browser.sleep(3000);

          
      

    });

   /* it('Selecting Radio button',function(){
        homepage1.selectRadiobutton1('I like XBOX');

        homepage1.clickgo1();
        browser.sleep(3000);

    });

    it('Clicking on Submit button',function(){   
        homepage1.clickgo2();
        browser.sleep(3000);

    });*/

});