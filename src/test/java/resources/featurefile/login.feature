
Feature: Login Page Test
  As  a User I should be able to login successfully with valid credentials

  @Sanity @Smoke @Regression
  Scenario: User should navigate to login page successfully
    Given I am on homepage
    When I click on login link
    Then I should navigate to login page successfully

  @Smoke @Regression
  Scenario Outline: Verify the error message with invalid credentials
    Given I am on homepage
    When I click on login link
    And I enter email "<email>"
    And I enter password "<password>"
    And I click on login button
    Then I should see the error message "<errorMessage>"
    Examples:
      | email              | password | errorMessage                                                                                |
      | abcd123@gmail.com  | xyz123   | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
      | xyz123@gmail.com   | abc123   | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
      | adfafasd@gmail.com | xyz123   | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |


  @Sanity @Regression
  Scenario: User should login successfully with valid credentials
    Given I am on homepage
    When I click on login link
    And I enter email "munirshah791@gmail.com"
    And I enter password "Asdfg909"
    And I click on login button
    Then I can see the log out link is displayed


  @Regression
  Scenario: User should log out successfully
    Given I am on homepage
    When I click on login link
    And I enter email "munirshah791@gmail.com"
    And I enter password "Asdfg909"
    And I click on login button
    And I click on logout link
    Then I can see the login link displayed

