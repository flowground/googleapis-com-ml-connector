/**
 * Auto-generated action file for "Google Cloud Machine Learning Engine" API.
 *
 * Generated at: 2019-05-07T14:41:48.704Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-ml-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'ml.projects.jobs.patch'
 * Endpoint Path: '/v1/{name}'
 * Method: 'patch'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "name",
    "updateMask",
    "alt",
    "bearer_token",
    "callback",
    "fields",
    "key",
    "oauth_token",
    "pp",
    "prettyPrint",
    "quotaUser",
    "uploadType",
    "upload_protocol"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "name": "name",
    "updateMask": "updateMask",
    "alt": "alt",
    "bearer_token": "bearer_token",
    "callback": "callback",
    "fields": "fields",
    "key": "key",
    "oauth_token": "oauth_token",
    "pp": "pp",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "uploadType": "uploadType",
    "upload_protocol": "upload_protocol",
    "createTime": "createTime",
    "endTime": "endTime",
    "errorMessage": "errorMessage",
    "etag": "etag",
    "jobId": "jobId",
    "labels": "labels",
    "batchSize": "batchSize",
    "dataFormat": "dataFormat",
    "inputPaths": "inputPaths",
    "maxWorkerCount": "maxWorkerCount",
    "modelName": "modelName",
    "outputPath": "outputPath",
    "region": "region",
    "runtimeVersion": "runtimeVersion",
    "signatureName": "signatureName",
    "uri": "uri",
    "versionName": "versionName",
    "predictionInput": "predictionInput",
    "errorCount": "errorCount",
    "nodeHours": "nodeHours",
    "predictionCount": "predictionCount",
    "predictionOutput": "predictionOutput",
    "startTime": "startTime",
    "state": "state",
    "args": "args",
    "goal": "goal",
    "hyperparameterMetricTag": "hyperparameterMetricTag",
    "maxParallelTrials": "maxParallelTrials",
    "maxTrials": "maxTrials",
    "params": "params",
    "hyperparameters": "hyperparameters",
    "jobDir": "jobDir",
    "masterType": "masterType",
    "packageUris": "packageUris",
    "parameterServerCount": "parameterServerCount",
    "parameterServerType": "parameterServerType",
    "pythonModule": "pythonModule",
    "pythonVersion": "pythonVersion",
    "scaleTier": "scaleTier",
    "workerCount": "workerCount",
    "workerType": "workerType",
    "trainingInput": "trainingInput",
    "completedTrialCount": "completedTrialCount",
    "consumedMLUnits": "consumedMLUnits",
    "isHyperparameterTuningJob": "isHyperparameterTuningJob",
    "trials": "trials",
    "trainingOutput": "trainingOutput",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'ml.projects.jobs.patch',
        pathName: '/v1/{name}',
        method: 'patch',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}