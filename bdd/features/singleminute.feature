Feature: Berlin clock fifth row display
  Displaying every single minute over five on the berlin clock

  Scenario: Its is below the first five minutes
    Given the API endpoint /time
    When I request the time for 00:00:xx
    Then the fifth row is OFF
    And the fifth row is filled with O

  Scenario: Its is in the first five minutes
    Given the API endpoint /time
    When I request the time for 00:01:xx
    Then the fifth row is ON with 1 light
    And the fifth row's first element is Y
