...indicators...

:heavy_check_mark: / :green_circle:  - green test

:x: / :red_circle: - failing test

:dart: - goal

:heavy_plus_sign: - items

:hammer_and_pick: - refactor

:warning: - Techdebt

### Description

The clock is read from the top row to the bottom. 
The top row of four red fields denote five full hours each, 
alongside the second row, also of four red fields, which denote one full hour each, displaying the hour value in 24-hour format. 
The third row consists of eleven yellow-and-red fields, which denote five full minutes each (the red ones also denoting 15, 30 and 45 minutes past), 
and the bottom row has another four yellow fields, which mark one full minute each. 
The round yellow light on top blinks to denote even- (when lit) or odd-numbered (when unlit) seconds.

Example: Two fields are lit in the first row (five hours multiplied by two, i.e. ten hours), but no fields are lit in the second row; therefore the hour value is 10.
Six fields are lit in the third row (five minutes multiplied by six, i.e. thirty minutes), while the bottom row has one field on (plus one minute). Hence, the lights of the clock altogether tell the time as 10:31. (Source: Wikipedia)

Task: Write a function that takes in a particular time as 24h format ('hh:mm:ss') and outputs a string that reproduces the Berlin Clock. The parameters should be as follows:

“O” = Light off
“R” = Red light
“Y” = Yellow light



### Scenario 1

:radio_button: As a

:arrow_right: I want

:arrow_left:  So that

### User acceptance test 1

:heavy_plus_sign: Given the API endpoint /time

:construction: When I call the endpoint

:heavy_exclamation_mark: Then I receive the time in Berlin Clock format


### E2Etest 1

:heavy_plus_sign: Given the API endpoint /time

:construction: When I request the time for 00:00:00

:heavy_exclamation_mark: Then the seconds are Y

:heavy_exclamation_mark: And the 5 hours is OOOO

:heavy_exclamation_mark: And the 1 hour is OOOO

:heavy_exclamation_mark: And the 5 minute is OOOOOOOOOOOY

:heavy_exclamation_mark: And the 1 minute is OOOO


### Component 1/2

:heavy_plus_sign: Given the API endpoint /time

:construction: When I request the time for 00:00:00 >> EVEN/ODD

:heavy_exclamation_mark: Then the seconds lightbulb is ON/OFF

:heavy_exclamation_mark: And the seconds is Y/O


### Unit tests

Berlin clock should have time
Berlin clock should have rows
Berlin clock should have multiple rows
Berlin clock's first row has 1 length
Berlin clock should show rows when asked
Berlin clock with time xx:xx:x1 should have O in first row
Berlin clock with time xx:xx:x3 should have O in first row
Berlin clock with time xx:xx:00 should have Y in first row
Berlin clock with time xx:xx:02 should have Y in first row

At 00:00:01 light is off - O
At 00:00:03 light is off - O
...
At 00:00:11 light is off - O
At 00:00:59 light is off - O

At 00:00:00 light is on - Y
At 00:00:02 light is on - Y
...
At 00:00:10 light is on - Y
At 00:00:58 light is on - Y


### Component 3/4

:heavy_plus_sign: Given the API endpoint /time

:construction: When I request the time for 04:59:59/05:00:00

:heavy_exclamation_mark: Then the second row is OFF/ON

:heavy_exclamation_mark: And the second row is filled with O/ second row's first element is R

### Unit tests


Berlin clock's second row has 4 length
Berlin clock with time 04:xx:xx should have O in second row first element
Berlin clock with time 05:00:00 should have R in second row first element

### Component 5/6/7

:heavy_plus_sign: Given the API endpoint /time

:construction: When I request the time for 10:00:00/15:00:00/20:00:00

:heavy_exclamation_mark: Then the second row is ON

:heavy_exclamation_mark: And second row's first two/three/four element is R


### Unit tests


Berlin clock's second row has 4 length
Berlin clock with time 10:xx:xx should have R in second row second element
Berlin clock with time 15:xx:xx should have R in second row third element
Berlin clock with time 20:xx:xx should have R in second row fourth element
Berlin clock with time 23:59:59 should have R in second row all element
Berlin clock with time 00:00:00 should have O in second row all element


## Component 8/9

:heavy_plus_sign: Given the API endpoint /time

:construction: When I request the time for 05:xx:xx/6:00:00

:heavy_exclamation_mark: Then the third row is OFF/ON

:heavy_exclamation_mark: And the third row is filled with O/ third row's first element is R

### Unit tests


Berlin clock's third row has 4 length
Berlin clock with time 05:xx:xx should have O in third row first element
Berlin clock with time 06:00:00 should have R in third row first element


## Component 10/11

:heavy_plus_sign: Given the API endpoint /time

:construction: When I request the time for 07:xx:xx/08:xx:xx

:heavy_exclamation_mark: Then the third row is ON

:heavy_exclamation_mark: And the third row's first and second element is R / first and second and third element is R

### Unit tests


Berlin clock's third row has 4 length
Berlin clock with time 07:xx:xx should have R in third row second element
Berlin clock with time 08:xx:xx should have R in third row third element

## Component 12/13

:heavy_plus_sign: Given the API endpoint /time

:construction: When I request the time for 09:xx:xx/10:xx:xx

:heavy_exclamation_mark: Then the third row is ON / OFF

:heavy_exclamation_mark: And the third row is filled with R / 0

### Unit tests


Berlin clock's third row has 4 length
Berlin clock with time 09:xx:xx should have R in third row fourth element
Berlin clock with time 10:xx:xx should have 0 in third row's any element


## Component 14/15

:heavy_plus_sign: Given the API endpoint /time

:construction: When I request the time for 00:00:xx/00:05:xx

:heavy_exclamation_mark: Then the fourth row is OFF / The fourth row is ON with 1 light

:heavy_exclamation_mark: And the fourth row's first element is 0 / Y


### Unit tests


Berlin clock's fourth row has 11 length
Berlin clock with time 00:00:xx should have 0 in fourth row first/any element
Berlin clock with time 00:05:xx should have Y in fourth row's first element

## Component 16/17

:heavy_plus_sign: Given the API endpoint /time

:construction: When I request the time for 00:10:xx/00:15:xx

:heavy_exclamation_mark: Then the fourth row is ON with 2/3 light

:heavy_exclamation_mark: And the fourth row's  second element is Y and third element is 0 / R


### Unit tests


Berlin clock's fourth row has 11 length
Berlin clock with time 00:10:xx should have Y in fourth row's first and second element
Berlin clock with time 00:15:xx should have Y in fourth row's first and second element and R in the third


## Component 18/19

:heavy_plus_sign: Given the API endpoint /time

:construction: When I request the time for 00:30:xx/00:45:xx

:heavy_exclamation_mark: Then the fourth row is ON with 6/9 light

:heavy_exclamation_mark: And the fourth row's third and sixth element is R / third, sixth and ninth element is R

### Unit tests


Berlin clock's fourth row has 11 length
Berlin clock with time 00:30:xx should have Y in first, second, fourth and fifth element and R in third and sixth
Berlin clock with time 00:45:xx should have Y in first, second, fourth, fifth, seventh, eighth element 
and R in third, sixth and ninth


## Component 20/21

:heavy_plus_sign: Given the API endpoint /time

:construction: When I request the time for 00:00:xx/00:01:xx

:heavy_exclamation_mark: Then the fifth row is OFF / on with 1 light

:heavy_exclamation_mark: And the fifth row's first element is 0 / Y

### Unit tests


Berlin clock's fifth row has 4 length
Berlin clock with time 00:00:xx should have 0 in fifth row first/any element
Berlin clock with time 00:01:xx should have Y in fifth row's first element


