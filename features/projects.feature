Feature: Projects

    Scenario: Add first project
        Given user is logged in
        When user clicks on 'adding a project'
        When user fills required fields to create a new project 'test_translations'
        When user clicks on 'Proceed'
        Then user should see his 'test_translations' project
        When user refreshes the page
        Then user should see 1 project


    Scenario: Add nth project
        Given user is logged in
        Given user should see 1 project
        When user clicks on 'New project'
        When user fills required fields to create a new project 'test_translations2'
        Then user should see his 'test_translations2' project
        When user refreshes the page
        Then user should see 2 project


# Case 1: Add first project
# Preconditions:
# ● Logged user on ​/projects​ page
# Steps:
# 1. Add project with just required fields
# Expected result:
# ● Project should be created
# ● Project’s page should be opened
# ● On ​/projects​ there should be just this project

# Case 2: Add nth project
# Preconditions:
# ● Logged user on ​/projects​ page
# ● One existing project
# Steps:
# 1. Add project with just required fields
# Expected result:
# ● Project should be created
# ● Project’s page should be opened
# ● On ​/projects​ there should be two projects in correct order