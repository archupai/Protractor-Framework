let homepage=function(){
    
   let firstNum_input= element(by.model('first'));
   let secondnumber_input= element(by.model('second'));
   let goBUtton= element(by.css('[ng-click="doAddition()"]'));

   this.get=function(url){
    browser.get(url);
   }

   this.enterFirstNumber=function(firstNo){
   firstNum_input.sendKeys(firstNo);
   };

   this.entersecondNumber=function(secondNo){
    secondnumber_input.sendKeys(secondNo);
    };
    
    this.clickgo=function(){
        goBUtton.click();

    }

    this .verifyResult=function(Result){
        let output= element(by.cssContainingText('.ng-binding',Result));
        expect(output.getText()).toEqual(Result);
    }
};

module.exports= new homepage();
