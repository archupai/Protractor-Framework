
let homepage1=require('../Pages/Homepage1')

describe('demo next section protractor',function(){
    it('Protractor sample test',function(){
      
       homepage1.get('http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile');
      
        homepage1.enterName('Archana');

        homepage1.enterEmail('archupai@Gmail.com');
        
     
        homepage1.clickgo();
    
        browser.sleep(3000);

    });

    it('Selecting Radio button',function(){
        homepage1.selectRadiobutton1('I like XBOX');

        homepage1.clickgo1();
        browser.sleep(3000);

    });

    it('Clicking on Submit button',function(){   
        homepage1.clickgo2();
        browser.sleep(3000);

    });

});