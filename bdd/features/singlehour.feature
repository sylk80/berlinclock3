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

  Scenario: It is the first seven hours
    Given the API endpoint /time
    When I request the time for 07:59:59
    Then the third row is ON with 2 light
    And the third row's second element is R

  Scenario: It is the first eight hours
    Given the API endpoint /time
    When I request the time for 08:59:59
    Then the third row is ON with 3 light
    And the third row's third element is R

  Scenario: It is the first nine hours
    Given the API endpoint /time
    When I request the time for 09:59:59
    Then the third row is ON with 4 light
    And the third row's fourth element is R

  Scenario: It is the first ten hours
    Given the API endpoint /time
    When I request the time for 10:00:00
    Then the third row is OFF with 0 light
    And the third row is filled with O again