Feature: Berlin clock third row display
  Displaying every single hours over five on the berlin clock

  Scenario: Its is below the first six hours
    Given the API endpoint /time
    When I request the time for 05:59:59
    Then the third row is OFF
    And the third row is filled with O

  Scenario: It is the first six hours
    Given the API endpoint /time
    When I request the time for 06:00:00
    Then the third row is ON with 1 light
    And the third row's first element is R