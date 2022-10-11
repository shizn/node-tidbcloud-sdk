import api = require('./api');
import fs = require('fs');

var username:string = process.env.TIDB_CLOUD_USERNAME as string;
var password:string = process.env.TIDB_CLOUD_PASSWORD as string;
var projectApi = new api.ProjectApi(username, password);
var clusterApi = new api.ClusterApi(username, password);
var projectIds = [] as string[];
async function listAllProjects() {
    var apiResponse = await projectApi.listProjects(1,10);
    console.log(apiResponse.body);
    projectIds = apiResponse.body.items.map(project => project.id!);
}
async function listAllClusters() {
    await(listAllProjects());
    for(var projectId of projectIds) {
        var apiResponse = await clusterApi.listClustersOfProject(projectId,1,10);
        console.log(apiResponse.body);
    }
}
listAllClusters();