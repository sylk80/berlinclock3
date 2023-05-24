Feature: Berlin clock fourth row display
Displaying minutes between hours, lights for five minutes

Scenario: Input contains zero minutes
Given the API endpoint /time
When I request the time for 00:00:xx
Then the fourth row is OFF
And the fourth row is filled with O

  Scenario: Input contains five minute
    Given the API endpoint /time
    When I request the time for 00:05:xx
    Then the fourth row is ON with 1 light
    And the fourth row's first element is Y

  Scenario: Input contains ten minute
    Given the API endpoint /time
    When I request the time for 00:10:xx
    Then the fourth row is ON with 2 light
    And the fourth row's second element is Y

  Scenario: Input contains fifteen minute
    Given the API endpoint /time
    When I request the time for 00:15:xx
    Then the fourth row is ON with 3 light
    And the fourth row's first two element is Y and the third is R

  Scenario: Input contains thirty minute
    Given the API endpoint /time
    When I request the time for 00:30:xx
    Then the fourth row is ON with 6 light
    And the fourth row's third and sixth element is R rest is yellow

  Scenario: Input contains forty-five minute
    Given the API endpoint /time
    When I request the time for 00:45:xx
    Then the fourth row is ON with 9 light
    And the fourth row's third, sixth and ninth element is R rest is yellow