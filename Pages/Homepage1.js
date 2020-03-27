let homepage1=function(){
    
   let Name= element(by.model('formData.name'));
   let email= element(by.model('formData.email'));
   let NextSection = element(by.linkText('Next Section'));

   let selectRadiobutton1=element(by.model('formData.type'));
   let NextSection1 = element(by.linkText('Next Section'));
   let Submit1 = element(by.buttonText('Submit'));

   this.get=function(url){
    browser.get(url);
   }

   this.enterName=function(Name1){
   Name.sendKeys(Name1);
   };

   this.enterEmail=function(email1){
    email.sendKeys(email1);
    };
    
    this.clickgo=function(){
        NextSection.click();
        
    }

    this.selectRadiobutton1=function(selectvalue1){
        selectRadiobutton1.sendKeys(selectvalue1);
        };

        this.clickgo1=function(){
            NextSection1.click();
            
        }
        this.clickgo2=function(){
            Submit1.click();
            
        }
    
    
};

module.exports= new homepage1();
