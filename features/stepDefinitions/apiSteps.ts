import { Given } from '@cucumber/cucumber';
import { API_TOKEN } from "../support/cleanUp";
import { OurWorld } from "../support/types";

Given('framework has created project {string}', async function (this: OurWorld, projectName: string) {
    await fetch("https://stage.lokalise.com/api2/projects", {
        method: "post",
        body: JSON.stringify({ name: `${projectName}` }),
        headers: {"x-api-token": API_TOKEN}
    })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
});

Given('framework has created a key per project', async function () {
    // Get a list of user's projects
    let response = await fetch(`https://stage.lokalise.com/api2/projects`, {
        method: "get",
        body: JSON.stringify(this.body),
        headers: {"x-api-token": API_TOKEN}
    });
    let responseJson = await response.json()
    let projectIds = await responseJson.projects.map(projectId => projectId.project_id);

    // Loop through projectIds and create keys for each project
    for (let projectId of projectIds) {
        console.log(projectId)
        let projectDetailsUrl = `https://stage.lokalise.com/api2/projects/${projectId}/keys`
        try {
            await fetch(projectDetailsUrl, {
                method: "post",
                body: JSON.stringify({ "keys": [
                        {
                            "key_name": "default_key",
                            "platforms": ["other"]
                        }
                ]}),
                headers: {"x-api-token": API_TOKEN}
            })
        } catch (err) {
            console.log('error while trying to cleanup projects');
        }
    }
});

Given('framework has created a key with translation per project', async function () {
    // Get a list of user's projects
    let response = await fetch(`https://stage.lokalise.com/api2/projects`, {
        method: "get",
        body: JSON.stringify(this.body),
        headers: {"x-api-token": API_TOKEN}
    });
    let responseJson = await response.json()
    let projectIds = await responseJson.projects.map(projectId => projectId.project_id);

    // Loop through projectIds and create key with translation for each project
    for (let projectId of projectIds) {
        console.log(projectId)
        let projectDetailsUrl = `https://stage.lokalise.com/api2/projects/${projectId}/keys`
        try {
            await fetch(projectDetailsUrl, {
                method: "post",
                body: JSON.stringify({ "keys": [
                        {
                            "key_name": "default_key",
                            "platforms": ["other"],
                            "is_plural": true,
                            "translations": [
                                {
                                    "language_iso": "en",
                                    "translation": {
                                        "one": "default_translation",
                                        "other": "another_translation"
                                    }
                                }
                            ]
                        }
                    ]}),
                headers: {"x-api-token": API_TOKEN},
            })
        } catch (err) {
            console.log('error while trying to cleanup projects');
        }
    }
});

Given('framework has created a plural key per project', async function () {
    // Get a list of user's projects
    let response = await fetch(`https://stage.lokalise.com/api2/projects`, {
        method: "get",
        body: JSON.stringify(this.body),
        headers: {"x-api-token": API_TOKEN}
    });
    let responseJson = await response.json()
    let projectIds = await responseJson.projects.map(projectId => projectId.project_id);

    // Loop through projectIds and create plural keys for each project
    for (let projectId of projectIds) {
        console.log(projectId)
        let projectDetailsUrl = `https://stage.lokalise.com/api2/projects/${projectId}/keys`
        try {
            await fetch(projectDetailsUrl, {
                method: "post",
                body: JSON.stringify({ "keys": [
                        {
                            "key_name": "default_key",
                            "platforms": ["other"],
                            "is_plural": true
                        }
                    ]}),
                headers: {"x-api-token": API_TOKEN}
            })
        } catch (err) {
            console.log('error while trying to cleanup projects');
        }
    }
});
