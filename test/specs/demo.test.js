const demoHomePage = require('../pageobjects/demo.home.page');


describe('My Demo application', () => {
    it('should pay with valid card', () => {
        browser.setTimeout({
            'implicit':10000,
            'pageLoad': 10000,
            'script': 60000
        });
        browser.url('/');
        ActualPageTitle= browser.getTitle();
        console.log(ActualPageTitle);
        //expect(ActualPageTitle).toHaveTextContaining('Sample Store');
        browser.maximizeWindow();
        demoHomePage.successfulPayment('4811111111111114', '02/25','123','112233');
        console.log("payment successful");
        
    });
});

			
