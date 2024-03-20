Feature: Verify product information and access PDF document

  Scenario: Access and open a PDF document from the product details page
    Given I open the application's homepage
    Then the homepage should be loaded properly
    When I enter the product number "123456" and the serial number "ABCDEF"
    And I click the "Search" button
    Then a new page with product information should be displayed
    When I click on the "Documents" link from the left menu
    Then the main page should display available documents
    When I click on the displayed document link
    Then a new tab with the PDF content should open

