Feature: Berlin clock fourth row display
Displaying minutes between quarter hours on the berlin clock

Scenario: Input contains zero minutes
Given the API endpoint /time
When I request the time for 00:00:xx
Then the fourth row is OFF
And the fourth row is filled with O

  Scenario: Input contains one minute
    Given the API endpoint /time
    When I request the time for 00:01:xx
    Then the fourth row is ON with 1 light
    And the fourth row's first element is Y