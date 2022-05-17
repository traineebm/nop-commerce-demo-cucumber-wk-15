Feature: Computer Page Test
  As a user I should navigate to Computers page successfully

  Background: I am on homepage

  @Sanity @Smoke @Regression
  Scenario: Verify User Should Navigate To Computer Page Successfully
    Given User is on Homepage
    When  I click on Computers tab
    Then  I should navigate to Computers page successfully

  @Smoke @Regression
  Scenario: Verify user should navigate to Desktop page successfully
    Given User is on Homepage
    When  I click on Computers tab
    And   I click on Desktops link
    Then  I should navigate to Desktops page successfully

  @Regression
  Scenario Outline: Verify user should build their own computer and add them to cart successfully
    Given User is on Homepage
    When  I click on Computers tab
    And   I click on Desktops link
    And   I select product "Build your own computer"
    And   I select "<Processor>" from Processor dropdown
    And   I select "<Ram>" from Ram dropdown
    And   I select "<HDD>" from HDD options
    And   I select "<Operating System>" from OS options
    And   I select "<Software>" from Software options
    And   I click on Add to cart button
    Then  Product is added to cart successfully

    Examples:
      | Processor                                       | Ram           | HDD               | Operating System        | Software                   |
      | 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]    | Microsoft Office [+$50.00] |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] | Vista Premium [+$60.00] | Acrobat Reader [+$10.00]   |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | Vista Home [+$50.00]    | Total Commander [+$5.00]   |
