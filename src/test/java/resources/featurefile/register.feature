Feature: Register Test
  As a user I should register successfully on nop commerce website

  @Sanity @Smoke @Regression
  Scenario: Verify user should navigate to register page successfully
    Given   I am on homepage
    When    I click on register link
    Then    I am on register page

  @Smoke @Regression
  Scenario: verify That First Name Last Name Email Password And Confirm Password Fields Are Mandatory
    Given   I am on homepage
    When    I click on register link
    And     I click on register button
    And     I get error message 'First name is required'
    And     I get error message 'Last name is required'
    And     I get error message 'Email is required'
    And     I get error message 'Password is required'
    And     I get error message 'Confirm Password is required'


  @Regression
  Scenario: Verify that user should create account successfully
    Given   I am on homepage
    When    I click on register link
    And     I click on Gender "male"
    And     I enter First Name "Munir"
    And     I enter Last Name "Shah"
    And     I select date of birth "11","November","1987"
    And     I enter email "munirshah72@gmail.com"
    And     I enter password "Asdfg909"
    And     I enter confirm password "Asdfg909"
    And     I click on register button
    Then    I am able to register successfully

