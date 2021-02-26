global.fetch = require("node-fetch");

export const API_TOKEN = "31b86d9fb199af60f82e18402875783aee8e182d"

export async function deleteAllProjects() {
    // Get a list of user's projects
    let response = await fetch(`https://stage.lokalise.com/api2/projects`, {
        method: "get",
        body: JSON.stringify(this.body),
        headers: {"x-api-token": API_TOKEN}
    });
    let responseJson = await response.json()
    let projectIds = await responseJson.projects.map(projectId => projectId.project_id);

    // Loop through projectIds and delete each project
    for (let projectId of projectIds) {
        console.log(projectId)
        let projectDetailsUrl = `https://stage.lokalise.com/api2/projects/${projectId}`
        try {
            await fetch(projectDetailsUrl, {
                method: "delete",
                headers: {"x-api-token": API_TOKEN}
            })
        } catch (err) {
            console.log('error while trying to cleanup projects');
        }
    }
}
