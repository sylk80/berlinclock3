Feature: Berlin clock top item display
Displaying even and odd seconds on the berlin clock

Scenario: Input contains odd seconds
Given the API endpoint /time
When I request the time for 00:00:01
Then the seconds lightbulb is OFF
And the seconds is O

  Scenario: Input contains even seconds
    Given the API endpoint /time
    When I request the time for 00:00:00
    Then the seconds lightbulb is ON
    And the seconds is Y