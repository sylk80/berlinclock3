Feature: Berlin clock display input time
Displaying the input time in berlin clock format

Scenario: Valid input time is given below 5 hours
Given the API endpoint /time
When I request the time for 04:59:59
Then the berlin clock is shown
And it has 5 rows
And the first row has one length with Y
And the second row has fourth length with OOOO
And the third row has four length with RRRR
And the fourth row has eleven length with YYRYYRYYRYY
And the fifth row has four length with YYYY


Scenario: Valid input time is given 1 second later
  Given the API endpoint /time
  When I request the time for 05:00:00
  Then the berlin clock is shown
  And it has 5 rows
  And the first row has one length with O
  And the second row has fourth length with ROOO
  And the third row has four length with OOOO
  And the fourth row has eleven length with OOOOOOOOOOO
  And the fifth row has four length with OOOO
