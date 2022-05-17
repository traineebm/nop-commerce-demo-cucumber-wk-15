package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginSteps {

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        String expectedMessage = "Welcome, Please Sign In!";
        String actualMessage = new LoginPage().getWelcomeText();
        Assert.assertEquals("Login page is not displayed",expectedMessage,actualMessage);
    }


    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email){
        new LoginPage().enterEmailId(email);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password){
        new LoginPage().enterPassword(password);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton(){
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should see the error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String errorMessage){
        Assert.assertEquals("Error message not displayed",errorMessage,new LoginPage().getErrorMessage());
    }

    @Then("^I can see the log out link is displayed$")
    public void iCanSeeTheLogOutLinkIsDisplayed() {
        String expectedMessage = "Log out";
        Assert.assertEquals("Logout link not displayed",expectedMessage,new HomePage().verifyLogOutLinkIsDisplayed());
    }

    @And("^I click on logout link$")
    public void iClickOnLogoutLink() {
        new HomePage().clickOnLogoutLink();
    }

    @Then("^I can see the login link displayed$")
    public void iCanSeeTheLoginLinkDisplayed() {
        String expectedMessage = "Log in";
        Assert.assertEquals("Login link is not displayed", expectedMessage, new HomePage().verifyLoginLinkIsVisible());
    }
}
