package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.BuildYourOwnComputerPage;
import com.nopcommerce.demo.pages.ComputerPage;
import com.nopcommerce.demo.pages.DesktopsPage;
import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ComputerPageSteps {
    @Given("^User is on Homepage$")
    public void userIsOnHomepage() {
    }

    @When("^I click on Computers tab$")
    public void iClickOnComputersTab() {
        new HomePage().clickOnMenuTab("Computers");
    }

    @Then("^I should navigate to Computers page successfully$")
    public void iShouldNavigateToComputersPageSuccessfully() {
        Assert.assertEquals("Computers page is not displayed","Computers",new ComputerPage().verifyComputersText());
    }

    @And("^I click on Desktops link$")
    public void iClickOnDesktopsLink() {
        new ComputerPage().clickOnDesktopLink();
    }

    @Then("^I should navigate to Desktops page successfully$")
    public void iShouldNavigateToDesktopsPageSuccessfully() {
        Assert.assertEquals("Desktops page not displayed","Desktops",new DesktopsPage().verifyDesktopText());
    }

    @And("^I select product \"([^\"]*)\"$")
    public void iSelectProduct(String product){
        new DesktopsPage().selectProductFromDesktopPage(product);
    }

    @And("^I select \"([^\"]*)\" from Processor dropdown$")
    public void iSelectFromProcessorDropdown(String processor){
        new BuildYourOwnComputerPage().selectProcessorFromDropDown(processor);
    }

    @And("^I select \"([^\"]*)\" from Ram dropdown$")
    public void iSelectFromRamDropdown(String ram){
       new BuildYourOwnComputerPage().selectRAMFromDropDown(ram);
    }

    @And("^I select \"([^\"]*)\" from HDD options$")
    public void iSelectFromHDDOptions(String hdd){
        new BuildYourOwnComputerPage().selectHDDRadioButton(hdd);
    }

    @And("^I select \"([^\"]*)\" from OS options$")
    public void iSelectFromOSOptions(String os){
        new BuildYourOwnComputerPage().selectOSRadioButton(os);
    }

    @And("^I select \"([^\"]*)\" from Software options$")
    public void iSelectFromSoftwareOptions(String software){
        new BuildYourOwnComputerPage().selectSoftwareCheckBox(software);
    }

    @And("^I click on Add to cart button$")
    public void iClickOnAddToCartButton(){
        new BuildYourOwnComputerPage().clickOnAddToCartButton();
    }

    @Then("^Product is added to cart successfully$")
    public void productIsAddedToCartSuccessfully(){
        Assert.assertEquals("Product not added to cart","The product has been added to your shopping cart", new BuildYourOwnComputerPage().verifyProductAddedToCartText());
    }


}
