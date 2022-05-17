package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DesktopsPage extends Utility {

    private static final Logger log = LogManager.getLogger(DesktopsPage.class.getName());

    public DesktopsPage(){
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[normalize-space()='Desktops']")
    WebElement desktopText;

    @CacheLookup
    @FindBy(xpath = "//div[@class='picture']")
    WebElement selectProductFromDesktopPage;

    public String verifyDesktopText(){
        log.info("Getting text from: " + desktopText.toString());
        return getTextFromElement(desktopText);
    }

    public void selectProductFromDesktopPage(String product) {
        clickOnElement(selectProductFromDesktopPage);
        log.info("Selecting product from Desktop page: " + product + selectProductFromDesktopPage.toString());
    }

}
