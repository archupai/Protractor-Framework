
let homepage=require('../Pages/HOmepage')

describe('demo calculator tests',function(){
    it('addition test',function(){
      
       homepage.get('http://juliemr.github.io/protractor-demo/');
       browser.sleep(3000);
      
        homepage.enterFirstNumber('4');

        homepage.entersecondNumber('3');
        
     
        homepage.clickgo();
    
        homepage.verifyResult('7');

        browser.sleep(5000);

    });

    it('subtraction test',function(){
      
        homepage.get('http://juliemr.github.io/protractor-demo/');
       
         homepage.enterFirstNumber('4');
 
         homepage.entersecondNumber('3');
         
      
         homepage.clickgo();
     
         homepage.verifyResult('7');
 
         browser.sleep(2000);
 
     });

     
let homepage=require('../Pages/HOmepage')

describe('demo calculator tests',function(){
    it('addition test',function(){
      
       homepage.get('http://juliemr.github.io/protractor-demo/');
      
        homepage.enterFirstNumber('4');

        homepage.entersecondNumber('3');
        
     
        homepage.clickgo();
    
        homepage.verifyResult('7');

        browser.sleep(2000);

    });

    it('subtraction test',function(){
      
        homepage.get('http://juliemr.github.io/protractor-demo/');
       
         homepage.enterFirstNumber('4');
 
         homepage.entersecondNumber('3');
         
      
         homepage.clickgo1();
     
         homepage.verifyResult('7');
 
         browser.sleep(2000);
 
     });
});
});