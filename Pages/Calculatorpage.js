let calc=function(){
    
   let firstNum= element(by.model('first'));
   let secondNum= element(by.model('second'));
   let calcbutton1 = element(by.css('[ng-click="doAddition()"]'));

  /* let selectRadiobutton1=element(by.model('formData.type'));
   let NextSection1 = element(by.linkText('Next Section'));
   let Submit1 = element(by.buttonText('Submit'));*/

   this.get=function(url){
    browser.get(url);
   }

   this.enterfirstNo=function(firstNo){
    firstNum.sendKeys(firstNo);
   };

   this.entersecondNo=function(secondNo){
    secondNum.sendKeys(secondNo);
    };
    
    this.clickgo=function(){
        calcbutton1.click();
        
    }

  /*  this.selectRadiobutton1=function(selectvalue1){
        selectRadiobutton1.sendKeys(selectvalue1);
        };

        this.clickgo1=function(){
            NextSection1.click();
            
        }
        this.clickgo2=function(){
            Submit1.click();
            
        }*/

        this .verifyResult=function(Result){
            let output= element(by.cssContainingText('.ng-binding',Result));
            expect(output.getText()).toEqual(Result);
        }
    
    
};

module.exports= new calc();
