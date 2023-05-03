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
    Then the second row is ON with 1 light
    And the second row's first element is R

  Scenario: It is at the second five hours
    Given the API endpoint /time
    When I request the time for 10:00:00
    Then the second row is ON with 2 lights
    And the second row's second element is R

  Scenario: It is at the third five hours
    Given the API endpoint /time
    When I request the time for 15:00:00
    Then the second row is ON with 3 lights
    And the second row's third element is R

  Scenario: It is at the fourth five hours
    Given the API endpoint /time
    When I request the time for 20:00:00
    Then the second row is ON with 4 lights
    And the second row's fourth element is R
