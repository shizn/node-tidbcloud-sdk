import api = require('./api');
import fs = require('fs');

var projectApi = new api.ProjectApi();
async function mainProgram() {
    var apiResponse = await projectApi.listProjects(1,10);
    console.log(apiResponse.body);
}
mainProgram();
