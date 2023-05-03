Feature: Berlin clock second row display
Displaying every full five hours on the berlin clock

Scenario: Its is below the first five hours
Given the API endpoint /time
When I request the time for 04:59:59
Then the second row is OFF
And the second row is filled with O

  Scenario: Its is at the first five hours
    Given the API endpoint /time
    When I request the time for 05:00:00
    Then the second row is ON
    And the second row's first element is Y
