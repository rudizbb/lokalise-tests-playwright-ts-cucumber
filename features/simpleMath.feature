Feature: Simple Maths

    In order to do Maths
    As a developer
    I want to increment variables

    Scenario: Easy Maths
        Given a variable set to 1
        When I increment the variable by 1
        Then the variable should contain 2
    
    Scenario: much more complex stuff
        Given a variable set to <var>
        When I increment the variable by <increment>
        Then the variable should contain <result>

        Examples:
        | var | increment | result |
        | 100 |         5 |    105 |
        |  99 |      1234 |   1333 |
        |  12 |         5 |     17 |
