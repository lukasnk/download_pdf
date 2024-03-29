Feature: Verify product information and access PDF document

  Scenario: Access and open a PDF document from the product details page
    Given I open the application's homepage
    And I accept the cookie consent
    Then the homepage should be loaded properly
    When I enter the product number "PRODUCT_NUMBER" and the serial number "SERIAL_NUMBER"
    And I click the "Search" button
    Then a new page with product information should be displayed
    When I click on the "Documents" from the left menu
    Then the main page should display available sections
      | Sections                   |
      | Operation                  |
      | Declarations, Certificates |
      | Drawings, plans            |
      | Components                 |
    When I click on the "PDF_NAME" document link
    Then a new tab with the PDF content should open