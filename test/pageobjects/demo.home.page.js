const Page = require('./page');

class demoHomePage extends Page {

    /**
     * define selectors using getter methods
     */
    get btnBuy () { return $('//a[@class="btn buy"]') }
    get btnCheckout () { return $('//div[@class="cart-checkout"]') }
    get btnContinue () { return $('//*[@id="application"]/div[1]/a') }
    get optionCreditCard () { return $('//*[@id="payment-list"]/div[1]/a/div[2]/div[1]') }
    get txtCardNumber () { return $('[name = "cardnumber"]') }
    get txtExpDate () { return $('//input[@placeholder="MM / YY"]') }
    get txtCvv () { return $('//input[@placeholder="123"]') }
    get btnPayNow () { return $('//a[@class="button-main-content"]') }
    get promoError () { return $('//*[@id="application"]/div[2]/div/a/span') }
    get popUp () { return $('//div[@class="pop-wrapper has-close danger show"]/div/a')}
    get midtransCheckbox () { return $('[name="promo"]')}
    get frame2 () { return $('//div[@class="page-container"]//iframe')}
	get passCode () { return $('//input[@id="PaRes"]')}
    get btnOK () { return $('//button[@name="ok"]')}
    get invalidCardMsg () { return $('//div[@class="content"]/span[contains(text(),"Invalid card number")]')}
    //selector for invalid card 

    successfulPayment(creditCardNumber,expDate,cvvNo,passCode) {
        browser.pause(3000)
        this.btnBuy.click();
        browser.pause(3000)
        this.btnCheckout.click();
        browser.pause(3000)
        browser.switchToFrame(0);
        console.log('Switched Frame');
        this.btnContinue.click();
        this.optionCreditCard.click();
        browser.pause(3000)
        this.txtCardNumber.setValue(creditCardNumber);
        browser.pause(1000)
          
        this.txtExpDate.setValue(expDate);
        browser.pause(1000)
        this.txtCvv.setValue(cvvNo);
        browser.pause(3000)
        this.btnPayNow.click();
        console.log("Clicked Pay now")
        browser.pause(3000)
        browser.switchToFrame(0);
        console.log('Switched Frame2');
        browser.pause(2000)
        this.passCode.setValue(passCode);
        this.btnOK.click();
    }
    
    unsuccessfulPayment(creditCardNumber,expDate,cvvNo) {
            browser.pause(3000)
            this.btnBuy.click();
            browser.pause(3000)
            this.btnCheckout.click();
            browser.pause(3000)
            browser.switchToFrame(0);
            console.log('Switched Frame');
            this.btnContinue.click();
            this.optionCreditCard.click();
            browser.pause(3000)
            this.txtCardNumber.setValue(creditCardNumber);
            browser.pause(1000)
              
            this.txtExpDate.setValue(expDate);
            browser.pause(1000)
            this.txtCvv.setValue(cvvNo);
            browser.pause(3000)
            this.btnPayNow.click();
    }

     
}

module.exports = new demoHomePage();
