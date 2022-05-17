package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BuildYourOwnComputerPage extends Utility {

    private static final Logger log = LogManager.getLogger(BuildYourOwnComputerPage.class.getName());

    public BuildYourOwnComputerPage() {
        PageFactory.initElements(driver, this);
    }


    @CacheLookup
    @FindBy(xpath = "//select[@id='product_attribute_1']")
    WebElement selectProcessor;

    @CacheLookup
    @FindBy(xpath = "//select[@id='product_attribute_2']")
    WebElement selectRam;

    @CacheLookup
    @FindBy(xpath = "//input[@name='product_attribute_3']")
    WebElement selectHdd;

    @CacheLookup
    @FindBy(xpath = "//input[@name= 'product_attribute_4']")
    WebElement selectOperatingSystem;

    @CacheLookup
    @FindBy(xpath = "//input[@name= 'product_attribute_5']")
    WebElement selectSoftwareCheckBoxes;

    @CacheLookup
    @FindBy(xpath = "//button[@id='add-to-cart-button-1']")
    WebElement addToCartButton;

    @CacheLookup
    @FindBy(xpath = "//p[contains(.,'The product has been added to your shopping cart')]")
    WebElement productAddedToCartText;


    public void selectProcessorFromDropDown(String processor) {
        selectByVisibleTextFromDropDown(selectProcessor, processor);
        log.info("Select Processor: " + processor + selectProcessor.toString());
    }

    public void selectRAMFromDropDown(String ram) {
        selectByVisibleTextFromDropDown(selectRam, ram);
        log.info("Select RAM: " + ram + selectRam.toString());
    }

    public void selectHDDRadioButton(String hdd) {
        clickOnElement(selectHdd);
        log.info("Clicking on Harddisk radio button  : " + hdd + selectHdd.toString());
    }

    public void selectOSRadioButton(String os) {
        clickOnElement(selectOperatingSystem);
        log.info("Clicking on Operating system radio button: " + os + selectOperatingSystem.toString());
    }

    public void selectSoftwareCheckBox(String software) {
        clickOnElement(selectSoftwareCheckBoxes);
        log.info("Select Software: " + software + selectSoftwareCheckBoxes.toString());
    }

    public void clickOnAddToCartButton(){
        clickOnElement(addToCartButton);
        log.info("Clicking on  Add to cart button: " + addToCartButton.toString());
    }

    public String verifyProductAddedToCartText() {
        log.info("Getting text from: " + productAddedToCartText.toString());
        return getTextFromElement(productAddedToCartText);
    }

}
