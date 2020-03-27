// spec.js
describe('Protractor Demo App', function() {
    it('should have a title', function() {
      browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
  
      element(by.model('Auth.user.name')).sendKeys('angular');
     element(by.model('Auth.user.password')).sendKeys('password');
     element(by.model('model[options.key]')).sendKeys('angular');

     element(by.buttonText('Login')).click();
    

      browser.sleep(3000);

      element(by.linkText('Logout')).click();

    

     
    });
  });