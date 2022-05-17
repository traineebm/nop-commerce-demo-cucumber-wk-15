package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterPage extends Utility {

    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[normalize-space()='Register']")
    WebElement registerPageText;

    @CacheLookup
    @FindBy(xpath = "//div[@id='gender']")
    WebElement genderRadioButton;

    @CacheLookup
    @FindBy(xpath = "//input[@id='FirstName']")
    WebElement firstNameBox;

    @CacheLookup
    @FindBy(xpath = "//input[@id='LastName']")
    WebElement lastNameBox;

    @CacheLookup
    @FindBy(xpath = "//input[@id='ConfirmPassword']")
    WebElement confirmPasswordBox;

    @CacheLookup
    @FindBy(xpath = "//button[@id='register-button']")
    WebElement registerButton;

    @CacheLookup
    @FindBy(xpath = "//div[contains(text(),'Your registration completed')]")
    WebElement registrationCompletedText;

    @CacheLookup
    @FindBy(xpath = "//span[@id='FirstName-error']")
    WebElement firstNameRequiredErrorText;

    @CacheLookup
    @FindBy(xpath = "//span[@id='LastName-error']")
    WebElement lastNameRequiredErrorText;

    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthDay']")
    WebElement dateOfBirthDay;

    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthMonth']")
    WebElement monthOfBirthMonth;

    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthYear']")
    WebElement yearOfBirthYear;

    @CacheLookup
    @FindBy(xpath = "//span[@id='Email-error']")
    WebElement emailRequiredErrorText;

    @CacheLookup
    @FindBy(xpath = "//span[@id='Password-error']")
    WebElement passwordRequiredErrorText;

    public String verifyRegisterPageText() {
        log.info("Getting text from: " + registerPageText.toString());
        return getTextFromElement(registerPageText);
    }

    public void selectGender(String text) {
        clickOnElement(genderRadioButton);
        log.info("Selecting Gender radio button: " + text + genderRadioButton.toString());
    }

    public void enterFirstName(String firstname) {
        sendTextToElement(firstNameBox, firstname);
        log.info("Enter First name: " + firstname + firstNameBox.toString());
    }

    public void enterLastName(String lastname) {
        sendTextToElement(lastNameBox, lastname);
        log.info("Enter Last name: " + lastname + lastNameBox.toString());
    }

    public void selectDateOfBirth(String day, String month, String year) {
        selectByVisibleTextFromDropDown(dateOfBirthDay, day);
        log.info("Enter date of birth details: " + day + dateOfBirthDay.toString());
        selectByVisibleTextFromDropDown(monthOfBirthMonth, month);
        log.info("Enter month of birth details: " + month + monthOfBirthMonth.toString());
        selectByVisibleTextFromDropDown(yearOfBirthYear, year);
        log.info("Enter year of birth details:" + year + yearOfBirthYear.toString());
    }

    public void enterConfirmPassword(String confirmpassword) {
        sendTextToElement(confirmPasswordBox, confirmpassword);
        log.info("Enter confirmed password: " + confirmpassword + confirmPasswordBox.toString());
    }

    public void clickOnRegisterButton() {
        clickOnElement(registerButton);
        log.info("Clicking on Register button: "  + registerButton.toString());
    }

    public String verifyRegistrationCompletedText() {
        log.info("Getting text from: " + registrationCompletedText.toString());
        return getTextFromElement(registrationCompletedText);
    }

    public String verifyFirstNameRequiredErrorMessageText() {
        log.info("Getting text from: " + firstNameRequiredErrorText.toString());
        return getTextFromElement(firstNameRequiredErrorText);
    }

    public String verifyLastNameRequiredErrorMessageText() {
        log.info("Getting text from: " + lastNameRequiredErrorText.toString());
        return getTextFromElement(lastNameRequiredErrorText);
    }

    public String verifyEmailRequiredErrorMessageText() {
        log.info("Getting text from: " + emailRequiredErrorText.toString());
        return getTextFromElement(emailRequiredErrorText);
    }

    public String verifyPasswordRequiredErrorMessageText() {
        log.info("Getting text from: " + passwordRequiredErrorText.toString());
        return getTextFromElement(passwordRequiredErrorText);
    }

}
