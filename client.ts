import api = require('./api');
import fs = require('fs');

var username:string = process.env.TIDB_CLOUD_USERNAME as string;
var password:string = process.env.TIDB_CLOUD_PASSWORD as string;
var projectApi = new api.ProjectApi(username, password);
async function listAllProjects() {
    var apiResponse = await projectApi.listProjects(1,10);
    console.log(apiResponse.body);
}
listAllProjects();


