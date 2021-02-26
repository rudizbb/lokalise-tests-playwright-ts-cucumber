Feature: Keys

    @key @addFirstKey
    Scenario: Add first key
        Given framework has created project 'addFirstKey'
        Given user is logged in
        Then user should see 1 project
        Then user should see his 'addFirstKey' project
        When user clicks on 'addFirstKey'
        And user clicks on 'Add key'
        When user fills required fields to create a new key 'first_key'
        And user clicks on Save button
        Then user should see his 'first_key' key

    @key @addNthKey
    Scenario: Add nth key
        Given framework has created project 'addNthKey'
        Given framework has created a key per project
        Given user is logged in
        Then user should see 1 project
        Then user should see his 'addNthKey' project
        When user clicks on 'addNthKey'
        And user clicks on 'Add key'
        When user fills required fields to create a new key 'second_key'
        And user clicks on Save button
        Then user should see his 'default_key' key
        And user should see his 'second_key' key

    @keys @addTranslationForPlainKey
    Scenario: Add translation for plain key
        Given framework has created project 'addTranslationForPlainKey'
        Given framework has created a key per project
        Given user is logged in
        Then user should see 1 project
        Then user should see his 'addTranslationForPlainKey' project
        When user clicks on 'addTranslationForPlainKey'
        And user clicks on 'Empty'
        And user adds 'translate_plain_word' translation for 'default_key' key
        And user clicks on 'Confirm'
        Then user sees 'translate_plain_word' translation

    @key @addTranslationForPluralKey
    Scenario: Add translation for plural key
        Given framework has created project 'addTranslationForPluralKey'
        Given framework has created a plural key per project
        Given user is logged in
        Then user should see 1 project
        Then user should see his 'addTranslationForPluralKey' project
        When user clicks on 'addTranslationForPluralKey'
        When user adds 'translate_plural_word' translation for 'default_key' key
        And user clicks on 'Confirm'
        Then user sees 'translate_plural_word' translation

    @key @updateTranslation
    Scenario: Update translation
        Given framework has created project 'updateTranslation'
        Given framework has created a key with translation per project
        Given user is logged in
        Then user should see 1 project
        Then user should see his 'updateTranslation' project
        When user clicks on 'updateTranslation'
        And user clicks on 'default_translation'
        And user adds '_updated' as translation
        Then user sees 'default_translation_updated' translation
