package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class RegisterSteps {

    @When("^I click on register link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }

    @Then("^I am on register page$")
    public void iAmOnRegisterPage() {
        String expectedMessage = "Register";
        Assert.assertEquals("Register text is not displayed", expectedMessage,new RegisterPage().verifyRegisterPageText());
    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().clickOnRegisterButton();
    }

    @And("^I get error message 'First name is required'$")
    public void iGetErrorMessageFirstNameIsRequired() {
        String expectedMessage = "First name is required.";
        Assert.assertEquals("Firstname is not displayed",expectedMessage, new RegisterPage().verifyFirstNameRequiredErrorMessageText());
    }

    @And("^I get error message 'Last name is required'$")
    public void iGetErrorMessageLastNameIsRequired() {
        String expectedMessage = "Last name is required.";
        Assert.assertEquals("Lastname is not displayed",expectedMessage, new RegisterPage().verifyLastNameRequiredErrorMessageText());
    }

    @And("^I get error message 'Email is required'$")
    public void iGetErrorMessageEmailIsRequired() {
        String expectedMessage = "Email is required.";
        Assert.assertEquals("Incorrect email address entered",expectedMessage,new RegisterPage().verifyEmailRequiredErrorMessageText());
    }

    @And("^I get error message 'Password is required'$")
    public void iGetErrorMessagePasswordIsRequired() {
        String expectedMessage = "Password is required.";
        Assert.assertEquals("Incorrect password entered",expectedMessage,new RegisterPage().verifyPasswordRequiredErrorMessageText());
    }

    @And("^I get error message 'Confirm Password is required'$")
    public void iGetErrorMessageConfirmPasswordIsRequired() {
        String expectedMessage = "Password is required.";
        Assert.assertEquals("Password does not match",expectedMessage,new RegisterPage().verifyPasswordRequiredErrorMessageText());
    }

    @And("^I click on Gender \"([^\"]*)\"$")
    public void iClickOnGender(String gender)  {
        new RegisterPage().selectGender(gender);
    }

    @And("^I enter Last Name \"([^\"]*)\"$")
    public void iEnterLastName(String lastname){
        new RegisterPage().enterLastName(lastname);
    }

    @And("^I enter First Name \"([^\"]*)\"$")
    public void iEnterFirstName(String firstname){
        new RegisterPage().enterFirstName(firstname);
    }

    @And("^I select date of birth \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void iSelectDateOfBirth(String day, String month, String year)  {
      new RegisterPage().selectDateOfBirth(day, month, year);
    }

    @And("^I enter confirm password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String confirmpassword)  {
        new RegisterPage().enterConfirmPassword(confirmpassword);
    }

    @Then("^I am able to register successfully$")
    public void iAmAbleToRegisterSuccessfully() {
        Assert.assertEquals("Registration unsuccessful","Your registration completed",new RegisterPage().verifyRegistrationCompletedText());
    }
}
