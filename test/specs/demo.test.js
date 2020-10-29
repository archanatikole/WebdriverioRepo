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
        //browser.maximizeWindow();
        demoHomePage.successfulPayment('4811111111111114', '02/25','123','112233');
        console.log("payment successful");
        
    });
    it('should save some screenshots', () => {
        // Save a screen
        browser.saveScreen('examplePaged', { /* some options */ });
   
        // Save an element
        //browser.saveElement($('#element-id'), 'firstButtonElement', { /* some options */ });
   
        // Save a full page screenshot
       // browser.saveFullPageScreen('fullPage', { /* some options */ });
   
        // Save a full page screenshot with all tab executions
        //browser.saveTabbablePage('save-tabbable', { /* some options, use the same options as for saveFullPageScreen */ });
    });
   
    it('should compare successful with a baseline', () => {
        // Check a screen
       expect(browser.checkScreen('examplePaged', {blockOut: [ {
        height: 10, 
        width: 5, 
        x: 40, 
        y: 65
      },{
        height: 250, 
        width: 500,
        x: 0,
        y: 35
      },
    ],
    ignoreAlpha: true,
    blockOutStatusBar: true, })).toEqual(0);
   
        // Check an element
      //  expect(browser.checkElement($('#element-id'), 'firstButtonElement', { /* some options */ })).toEqual(0);
   
        // Check a full page screenshot
       // expect(browser.checkFullPageScreen('fullPage', { /* some options */ })).toEqual(0);
   
        // Check a full page screenshot with all tab executions
      //  expect(browser.checkTabbablePage('check-tabbable', { /* some options, use the same options as for checkFullPageScreen */ })).toEqual(0);
    });
  });

			
