describe('Googlesearch', function(){
    it('search for a protractor website',function(){
        Browser.get('www.google.com');
        element(by.model('fakebox-input').sendKeys('Protractor'));
        element(by.css)

    })

})