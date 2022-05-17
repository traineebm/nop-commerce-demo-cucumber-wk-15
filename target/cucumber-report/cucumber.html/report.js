$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Page Test",
  "description": "As a user I should navigate to Computers page successfully",
  "id": "computer-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3763564500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "Verify User Should Navigate To Computer Page Successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Sanity"
    },
    {
      "line": 6,
      "name": "@Smoke"
    },
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should navigate to Computers page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 82000900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnComputersTab()"
});
formatter.result({
  "duration": 683529600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iShouldNavigateToComputersPageSuccessfully()"
});
formatter.result({
  "duration": 116792600,
  "status": "passed"
});
formatter.after({
  "duration": 896054200,
  "status": "passed"
});
formatter.before({
  "duration": 2290894300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 13,
  "name": "Verify user should navigate to Desktop page successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-desktop-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Smoke"
    },
    {
      "line": 12,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should navigate to Desktops page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 139500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnComputersTab()"
});
formatter.result({
  "duration": 645663600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 616872100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iShouldNavigateToDesktopsPageSuccessfully()"
});
formatter.result({
  "duration": 69980900,
  "status": "passed"
});
formatter.after({
  "duration": 868747200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Verify user should build their own computer and add them to cart successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-build-their-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"\u003cProcessor\u003e\" from Processor dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \"\u003cRam\u003e\" from Ram dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select \"\u003cHDD\u003e\" from HDD options",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select \"\u003cOperating System\u003e\" from OS options",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select \"\u003cSoftware\u003e\" from Software options",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on Add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Product is added to cart successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "computer-page-test;verify-user-should-build-their-own-computer-and-add-them-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "Processor",
        "Ram",
        "HDD",
        "Operating System",
        "Software"
      ],
      "line": 34,
      "id": "computer-page-test;verify-user-should-build-their-own-computer-and-add-them-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 35,
      "id": "computer-page-test;verify-user-should-build-their-own-computer-and-add-them-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 36,
      "id": "computer-page-test;verify-user-should-build-their-own-computer-and-add-them-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 37,
      "id": "computer-page-test;verify-user-should-build-their-own-computer-and-add-them-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2250096100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 35,
  "name": "Verify user should build their own computer and add them to cart successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-build-their-own-computer-and-add-them-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"2.2 GHz Intel Pentium Dual-Core E2200\" from Processor dropdown",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \"2 GB\" from Ram dropdown",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select \"320 GB\" from HDD options",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select \"Vista Home [+$50.00]\" from OS options",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select \"Microsoft Office [+$50.00]\" from Software options",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on Add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Product is added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 21800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnComputersTab()"
});
formatter.result({
  "duration": 721059100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 536953300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerPageSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1009053400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 10
    }
  ],
  "location": "ComputerPageSteps.iSelectFromProcessorDropdown(String)"
});
formatter.result({
  "duration": 92537400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 10
    }
  ],
  "location": "ComputerPageSteps.iSelectFromRamDropdown(String)"
});
formatter.result({
  "duration": 88042200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 10
    }
  ],
  "location": "ComputerPageSteps.iSelectFromHDDOptions(String)"
});
formatter.result({
  "duration": 63629200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageSteps.iSelectFromOSOptions(String)"
});
formatter.result({
  "duration": 56845400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageSteps.iSelectFromSoftwareOptions(String)"
});
formatter.result({
  "duration": 60489500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 52058100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.productIsAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 266913100,
  "status": "passed"
});
formatter.after({
  "duration": 882242300,
  "status": "passed"
});
formatter.before({
  "duration": 3133862300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 36,
  "name": "Verify user should build their own computer and add them to cart successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-build-their-own-computer-and-add-them-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\" from Processor dropdown",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \"4GB [+$20.00]\" from Ram dropdown",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select \"400 GB [+$100.00]\" from HDD options",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select \"Vista Premium [+$60.00]\" from OS options",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select \"Acrobat Reader [+$10.00]\" from Software options",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on Add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Product is added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 20500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnComputersTab()"
});
formatter.result({
  "duration": 793770500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 527825000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerPageSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1167948200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageSteps.iSelectFromProcessorDropdown(String)"
});
formatter.result({
  "duration": 46560700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageSteps.iSelectFromRamDropdown(String)"
});
formatter.result({
  "duration": 67053200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageSteps.iSelectFromHDDOptions(String)"
});
formatter.result({
  "duration": 80682100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageSteps.iSelectFromOSOptions(String)"
});
formatter.result({
  "duration": 62023500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageSteps.iSelectFromSoftwareOptions(String)"
});
formatter.result({
  "duration": 54159000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 47862800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.productIsAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 837823900,
  "status": "passed"
});
formatter.after({
  "duration": 890758200,
  "status": "passed"
});
formatter.before({
  "duration": 2401664600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 37,
  "name": "Verify user should build their own computer and add them to cart successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-build-their-own-computer-and-add-them-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\" from Processor dropdown",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \"8GB [+$60.00]\" from Ram dropdown",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select \"320 GB\" from HDD options",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select \"Vista Home [+$50.00]\" from OS options",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select \"Total Commander [+$5.00]\" from Software options",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on Add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Product is added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 29300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnComputersTab()"
});
formatter.result({
  "duration": 808098100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 612929300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerPageSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1110626300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageSteps.iSelectFromProcessorDropdown(String)"
});
formatter.result({
  "duration": 53860600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageSteps.iSelectFromRamDropdown(String)"
});
formatter.result({
  "duration": 73137100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 10
    }
  ],
  "location": "ComputerPageSteps.iSelectFromHDDOptions(String)"
});
formatter.result({
  "duration": 94323400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageSteps.iSelectFromOSOptions(String)"
});
formatter.result({
  "duration": 63853700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageSteps.iSelectFromSoftwareOptions(String)"
});
formatter.result({
  "duration": 54218500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 63971400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.productIsAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 294246300,
  "status": "passed"
});
formatter.after({
  "duration": 959063800,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Page Test",
  "description": "As  a User I should be able to login successfully with valid credentials",
  "id": "login-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3156240800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-page-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Sanity"
    },
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 55100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 789398900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 79871200,
  "status": "passed"
});
formatter.after({
  "duration": 886996300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-page-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Smoke"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login-page-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 20,
      "id": "login-page-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "abcd123@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 21,
      "id": "login-page-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "xyz123@gmail.com",
        "abc123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 22,
      "id": "login-page-test;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfafasd@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 23,
      "id": "login-page-test;verify-the-error-message-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2383873400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-page-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Smoke"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter email \"abcd123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 58900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 658631900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 116599700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 65873800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 538858500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 63924300,
  "status": "passed"
});
formatter.after({
  "duration": 870372300,
  "status": "passed"
});
formatter.before({
  "duration": 3009018900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-page-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Smoke"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter email \"xyz123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 36100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 773531200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 99360100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 72884400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 492390000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 84169700,
  "status": "passed"
});
formatter.after({
  "duration": 879646700,
  "status": "passed"
});
formatter.before({
  "duration": 2872854200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-page-test;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Smoke"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter email \"adfafasd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 16200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 648867300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfafasd@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 152495700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 68516100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 468114400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 72142200,
  "status": "passed"
});
formatter.after({
  "duration": 898178300,
  "status": "passed"
});
formatter.before({
  "duration": 2883942400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-page-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@Sanity"
    },
    {
      "line": 26,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I enter email \"munirshah791@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter password \"Asdfg909\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I can see the log out link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 16600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 601120000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "munirshah791@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 131587500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asdfg909",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 66109000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 626183600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iCanSeeTheLogOutLinkIsDisplayed()"
});
formatter.result({
  "duration": 64985600,
  "status": "passed"
});
formatter.after({
  "duration": 891099500,
  "status": "passed"
});
formatter.before({
  "duration": 2174462300,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "User should log out successfully",
  "description": "",
  "id": "login-page-test;user-should-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I enter email \"munirshah791@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter password \"Asdfg909\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on logout link",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I can see the login link displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 61500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 541725700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "munirshah791@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 140664100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asdfg909",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 68971100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 724914200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogoutLink()"
});
formatter.result({
  "duration": 695416500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iCanSeeTheLoginLinkDisplayed()"
});
formatter.result({
  "duration": 69320700,
  "status": "passed"
});
formatter.after({
  "duration": 933766100,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register Test",
  "description": "As a user I should register successfully on nop commerce website",
  "id": "register-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2959381100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should navigate to register page successfully",
  "description": "",
  "id": "register-test;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on register page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 555822800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iAmOnRegisterPage()"
});
formatter.result({
  "duration": 44955300,
  "status": "passed"
});
formatter.after({
  "duration": 875604800,
  "status": "passed"
});
formatter.before({
  "duration": 2358649300,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "verify That First Name Last Name Email Password And Confirm Password Fields Are Mandatory",
  "description": "",
  "id": "register-test;verify-that-first-name-last-name-email-password-and-confirm-password-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I get error message \u0027First name is required\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I get error message \u0027Last name is required\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I get error message \u0027Email is required\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I get error message \u0027Password is required\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I get error message \u0027Confirm Password is required\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 15300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 584506900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 149956000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iGetErrorMessageFirstNameIsRequired()"
});
formatter.result({
  "duration": 43889300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iGetErrorMessageLastNameIsRequired()"
});
formatter.result({
  "duration": 28310300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iGetErrorMessageEmailIsRequired()"
});
formatter.result({
  "duration": 28711000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iGetErrorMessagePasswordIsRequired()"
});
formatter.result({
  "duration": 24855400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iGetErrorMessageConfirmPasswordIsRequired()"
});
formatter.result({
  "duration": 16748000,
  "status": "passed"
});
formatter.after({
  "duration": 806962000,
  "status": "passed"
});
formatter.before({
  "duration": 3030581200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify that user should create account successfully",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I click on Gender \"male\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter First Name \"Munir\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter Last Name \"Shah\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select date of birth \"11\",\"November\",\"1987\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter email \"munirshah72@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter password \"Asdfg909\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter confirm password \"Asdfg909\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I am able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 17200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 747966600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "male",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iClickOnGender(String)"
});
formatter.result({
  "duration": 53831000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Munir",
      "offset": 20
    }
  ],
  "location": "RegisterSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 71039900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shah",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 66079800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 24
    },
    {
      "val": "November",
      "offset": 29
    },
    {
      "val": "1987",
      "offset": 40
    }
  ],
  "location": "RegisterSteps.iSelectDateOfBirth(String,String,String)"
});
formatter.result({
  "duration": 226676200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "munirshah72@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 81082500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asdfg909",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 79089700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asdfg909",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 90869000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 763891000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iAmAbleToRegisterSuccessfully()"
});
formatter.result({
  "duration": 64317100,
  "status": "passed"
});
formatter.after({
  "duration": 883243700,
  "status": "passed"
});
});