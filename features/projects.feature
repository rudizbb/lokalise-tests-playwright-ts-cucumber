Feature: Projects

    @projects @firstProject
    Scenario: Add first project
        Given user is logged in
        When user clicks on 'adding a project'
        When user fills required fields to create a new project 'test_translations'
        When user clicks on 'Proceed'
        Then user should see his 'test_translations' project
        When user opens 'projects' page
        Then user should see 1 project

    @projects @nthProject
    Scenario: Add nth project
        Given framework has created project 'empty_project'
        Given user is logged in
        Given user should see 1 project
        When user clicks on 'New project'
        When user fills required fields to create a new project 'test_translations2'
        When user clicks on 'Proceed'
        Then user should see his 'test_translations2' project
        When user opens 'projects' page
        Then user should see 2 projects
