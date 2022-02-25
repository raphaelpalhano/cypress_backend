Feature: Users ServeRest
   
    Background: Been Logged In
      Given that register a user type "admin"
      When that is logged with "admin"

    @get
    Scenario: Requesting from serverest API and validating contract
        When request all the users from /usuarios
        Then must be responsed the schema "get-users" with status 200

    @post
    Scenario Outline: Posting users on serverest API and validating Contract
        Given post the user of type "<type>"
        Then must be responsed the schema "post-user" with status <status>
        Examples:
            | type    | status |
            | invalid | 400    |
            | valid   | 201    |

    @delete
    Scenario: Deleting users from serverest by invalid
        Given that have registered a user in the plataform
        When to save the id of one of the users
        And delete the user by the id
        Then must be responsed the schema "delete-user" with status 200