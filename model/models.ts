import localVarRequest from 'request';

export * from './clusterInfoOfRestore';
export * from './clusterItem';
export * from './clusterItemConfig';
export * from './clusterItemConfigComponents';
export * from './clusterItemConfigComponentsTidb';
export * from './clusterItemConfigComponentsTiflash';
export * from './clusterItemConfigComponentsTikv';
export * from './clusterItemStatus';
export * from './clusterItemStatusConnectionStrings';
export * from './clusterItemStatusConnectionStringsStandard';
export * from './clusterItemStatusConnectionStringsVpcPeering';
export * from './clusterItemStatusNodeMap';
export * from './clusterItemStatusNodeMapTidbInner';
export * from './clusterItemStatusNodeMapTiflashInner';
export * from './clusterItemStatusNodeMapTikvInner';
export * from './createBackupReq';
export * from './createBackupResp';
export * from './createClusterReq';
export * from './createClusterReqConfig';
export * from './createClusterReqConfigComponents';
export * from './createClusterReqConfigIpAccessListInner';
export * from './createClusterResp';
export * from './createRestoreReq';
export * from './createRestoreResp';
export * from './errorResponse';
export * from './getBackupOfClusterResp';
export * from './getClustersOfProjectResp';
export * from './getProjectsResp';
export * from './getProviderRegionsResp';
export * from './getRestoreResp';
export * from './listBackupItem';
export * from './listBackupOfClusterResp';
export * from './listProjectItem';
export * from './listProviderRegions400Response';
export * from './listProviderRegionsDefaultResponse';
export * from './listProviderRegionsItem';
export * from './listProviderRegionsItemTidbInner';
export * from './listProviderRegionsItemTidbInnerNodeQuantityRange';
export * from './listProviderRegionsItemTiflashInner';
export * from './listProviderRegionsItemTiflashInnerNodeQuantityRange';
export * from './listProviderRegionsItemTiflashInnerStorageSizeGibRange';
export * from './listProviderRegionsItemTikvInner';
export * from './listProviderRegionsItemTikvInnerNodeQuantityRange';
export * from './listProviderRegionsItemTikvInnerStorageSizeGibRange';
export * from './listRestoreResp';
export * from './listRestoreRespItem';
export * from './openapiBackupTypeEnum';
export * from './openapiCloudProvider';
export * from './openapiClusterComponents';
export * from './openapiClusterConfig';
export * from './openapiClusterConnectionStrings';
export * from './openapiClusterInfoOfRestore';
export * from './openapiClusterItem';
export * from './openapiClusterItemStatus';
export * from './openapiClusterNodeMap';
export * from './openapiClusterStatus';
export * from './openapiClusterType';
export * from './openapiCreateBackupResp';
export * from './openapiCreateClusterResp';
export * from './openapiCreateRestoreResp';
export * from './openapiGetBackupOfClusterResp';
export * from './openapiGetBackupOfClusterRespStatusEnum';
export * from './openapiGetClusterConfig';
export * from './openapiGetRestoreResp';
export * from './openapiGetRestoreRespStatusEnum';
export * from './openapiIpAccessListItem';
export * from './openapiListBackupItem';
export * from './openapiListBackupItemStatusEnum';
export * from './openapiListBackupOfClusterResp';
export * from './openapiListClustersOfProjectResp';
export * from './openapiListProjectItem';
export * from './openapiListProjectsResp';
export * from './openapiListProviderRegionsItem';
export * from './openapiListProviderRegionsResp';
export * from './openapiListRestoreOfProjectResp';
export * from './openapiListRestoreRespItem';
export * from './openapiListRestoreRespItemStatusEnum';
export * from './openapiNodeQuantityRange';
export * from './openapiNodeStatus';
export * from './openapiNodeStorageSizeRange';
export * from './openapiStandardConnection';
export * from './openapiTiDBComponent';
export * from './openapiTiDBNodeMap';
export * from './openapiTiDBProfile';
export * from './openapiTiFlashComponent';
export * from './openapiTiFlashNodeMap';
export * from './openapiTiFlashProfile';
export * from './openapiTiKVComponent';
export * from './openapiTiKVNodeMap';
export * from './openapiTiKVProfile';
export * from './openapiUpdateClusterComponents';
export * from './openapiUpdateClusterConfig';
export * from './openapiUpdateTiDBComponent';
export * from './openapiUpdateTiFlashComponent';
export * from './openapiUpdateTiKVComponent';
export * from './openapiVPCPeeringConnection';
export * from './protobufAny';
export * from './rpcStatus';
export * from './updateClusterComponents';
export * from './updateClusterComponentsComponents';
export * from './updateClusterComponentsComponentsTidb';
export * from './updateClusterComponentsComponentsTiflash';
export * from './updateClusterComponentsComponentsTikv';
export * from './updateClusterReq';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { ClusterInfoOfRestore } from './clusterInfoOfRestore';
import { ClusterItem } from './clusterItem';
import { ClusterItemConfig } from './clusterItemConfig';
import { ClusterItemConfigComponents } from './clusterItemConfigComponents';
import { ClusterItemConfigComponentsTidb } from './clusterItemConfigComponentsTidb';
import { ClusterItemConfigComponentsTiflash } from './clusterItemConfigComponentsTiflash';
import { ClusterItemConfigComponentsTikv } from './clusterItemConfigComponentsTikv';
import { ClusterItemStatus } from './clusterItemStatus';
import { ClusterItemStatusConnectionStrings } from './clusterItemStatusConnectionStrings';
import { ClusterItemStatusConnectionStringsStandard } from './clusterItemStatusConnectionStringsStandard';
import { ClusterItemStatusConnectionStringsVpcPeering } from './clusterItemStatusConnectionStringsVpcPeering';
import { ClusterItemStatusNodeMap } from './clusterItemStatusNodeMap';
import { ClusterItemStatusNodeMapTidbInner } from './clusterItemStatusNodeMapTidbInner';
import { ClusterItemStatusNodeMapTiflashInner } from './clusterItemStatusNodeMapTiflashInner';
import { ClusterItemStatusNodeMapTikvInner } from './clusterItemStatusNodeMapTikvInner';
import { CreateBackupReq } from './createBackupReq';
import { CreateBackupResp } from './createBackupResp';
import { CreateClusterReq } from './createClusterReq';
import { CreateClusterReqConfig } from './createClusterReqConfig';
import { CreateClusterReqConfigComponents } from './createClusterReqConfigComponents';
import { CreateClusterReqConfigIpAccessListInner } from './createClusterReqConfigIpAccessListInner';
import { CreateClusterResp } from './createClusterResp';
import { CreateRestoreReq } from './createRestoreReq';
import { CreateRestoreResp } from './createRestoreResp';
import { ErrorResponse } from './errorResponse';
import { GetBackupOfClusterResp } from './getBackupOfClusterResp';
import { GetClustersOfProjectResp } from './getClustersOfProjectResp';
import { GetProjectsResp } from './getProjectsResp';
import { GetProviderRegionsResp } from './getProviderRegionsResp';
import { GetRestoreResp } from './getRestoreResp';
import { ListBackupItem } from './listBackupItem';
import { ListBackupOfClusterResp } from './listBackupOfClusterResp';
import { ListProjectItem } from './listProjectItem';
import { ListProviderRegions400Response } from './listProviderRegions400Response';
import { ListProviderRegionsDefaultResponse } from './listProviderRegionsDefaultResponse';
import { ListProviderRegionsItem } from './listProviderRegionsItem';
import { ListProviderRegionsItemTidbInner } from './listProviderRegionsItemTidbInner';
import { ListProviderRegionsItemTidbInnerNodeQuantityRange } from './listProviderRegionsItemTidbInnerNodeQuantityRange';
import { ListProviderRegionsItemTiflashInner } from './listProviderRegionsItemTiflashInner';
import { ListProviderRegionsItemTiflashInnerNodeQuantityRange } from './listProviderRegionsItemTiflashInnerNodeQuantityRange';
import { ListProviderRegionsItemTiflashInnerStorageSizeGibRange } from './listProviderRegionsItemTiflashInnerStorageSizeGibRange';
import { ListProviderRegionsItemTikvInner } from './listProviderRegionsItemTikvInner';
import { ListProviderRegionsItemTikvInnerNodeQuantityRange } from './listProviderRegionsItemTikvInnerNodeQuantityRange';
import { ListProviderRegionsItemTikvInnerStorageSizeGibRange } from './listProviderRegionsItemTikvInnerStorageSizeGibRange';
import { ListRestoreResp } from './listRestoreResp';
import { ListRestoreRespItem } from './listRestoreRespItem';
import { OpenapiBackupTypeEnum } from './openapiBackupTypeEnum';
import { OpenapiCloudProvider } from './openapiCloudProvider';
import { OpenapiClusterComponents } from './openapiClusterComponents';
import { OpenapiClusterConfig } from './openapiClusterConfig';
import { OpenapiClusterConnectionStrings } from './openapiClusterConnectionStrings';
import { OpenapiClusterInfoOfRestore } from './openapiClusterInfoOfRestore';
import { OpenapiClusterItem } from './openapiClusterItem';
import { OpenapiClusterItemStatus } from './openapiClusterItemStatus';
import { OpenapiClusterNodeMap } from './openapiClusterNodeMap';
import { OpenapiClusterStatus } from './openapiClusterStatus';
import { OpenapiClusterType } from './openapiClusterType';
import { OpenapiCreateBackupResp } from './openapiCreateBackupResp';
import { OpenapiCreateClusterResp } from './openapiCreateClusterResp';
import { OpenapiCreateRestoreResp } from './openapiCreateRestoreResp';
import { OpenapiGetBackupOfClusterResp } from './openapiGetBackupOfClusterResp';
import { OpenapiGetBackupOfClusterRespStatusEnum } from './openapiGetBackupOfClusterRespStatusEnum';
import { OpenapiGetClusterConfig } from './openapiGetClusterConfig';
import { OpenapiGetRestoreResp } from './openapiGetRestoreResp';
import { OpenapiGetRestoreRespStatusEnum } from './openapiGetRestoreRespStatusEnum';
import { OpenapiIpAccessListItem } from './openapiIpAccessListItem';
import { OpenapiListBackupItem } from './openapiListBackupItem';
import { OpenapiListBackupItemStatusEnum } from './openapiListBackupItemStatusEnum';
import { OpenapiListBackupOfClusterResp } from './openapiListBackupOfClusterResp';
import { OpenapiListClustersOfProjectResp } from './openapiListClustersOfProjectResp';
import { OpenapiListProjectItem } from './openapiListProjectItem';
import { OpenapiListProjectsResp } from './openapiListProjectsResp';
import { OpenapiListProviderRegionsItem } from './openapiListProviderRegionsItem';
import { OpenapiListProviderRegionsResp } from './openapiListProviderRegionsResp';
import { OpenapiListRestoreOfProjectResp } from './openapiListRestoreOfProjectResp';
import { OpenapiListRestoreRespItem } from './openapiListRestoreRespItem';
import { OpenapiListRestoreRespItemStatusEnum } from './openapiListRestoreRespItemStatusEnum';
import { OpenapiNodeQuantityRange } from './openapiNodeQuantityRange';
import { OpenapiNodeStatus } from './openapiNodeStatus';
import { OpenapiNodeStorageSizeRange } from './openapiNodeStorageSizeRange';
import { OpenapiStandardConnection } from './openapiStandardConnection';
import { OpenapiTiDBComponent } from './openapiTiDBComponent';
import { OpenapiTiDBNodeMap } from './openapiTiDBNodeMap';
import { OpenapiTiDBProfile } from './openapiTiDBProfile';
import { OpenapiTiFlashComponent } from './openapiTiFlashComponent';
import { OpenapiTiFlashNodeMap } from './openapiTiFlashNodeMap';
import { OpenapiTiFlashProfile } from './openapiTiFlashProfile';
import { OpenapiTiKVComponent } from './openapiTiKVComponent';
import { OpenapiTiKVNodeMap } from './openapiTiKVNodeMap';
import { OpenapiTiKVProfile } from './openapiTiKVProfile';
import { OpenapiUpdateClusterComponents } from './openapiUpdateClusterComponents';
import { OpenapiUpdateClusterConfig } from './openapiUpdateClusterConfig';
import { OpenapiUpdateTiDBComponent } from './openapiUpdateTiDBComponent';
import { OpenapiUpdateTiFlashComponent } from './openapiUpdateTiFlashComponent';
import { OpenapiUpdateTiKVComponent } from './openapiUpdateTiKVComponent';
import { OpenapiVPCPeeringConnection } from './openapiVPCPeeringConnection';
import { ProtobufAny } from './protobufAny';
import { RpcStatus } from './rpcStatus';
import { UpdateClusterComponents } from './updateClusterComponents';
import { UpdateClusterComponentsComponents } from './updateClusterComponentsComponents';
import { UpdateClusterComponentsComponentsTidb } from './updateClusterComponentsComponentsTidb';
import { UpdateClusterComponentsComponentsTiflash } from './updateClusterComponentsComponentsTiflash';
import { UpdateClusterComponentsComponentsTikv } from './updateClusterComponentsComponentsTikv';
import { UpdateClusterReq } from './updateClusterReq';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "ClusterItem.ClusterTypeEnum": ClusterItem.ClusterTypeEnum,
        "ClusterItem.CloudProviderEnum": ClusterItem.CloudProviderEnum,
        "ClusterItemStatus.ClusterStatusEnum": ClusterItemStatus.ClusterStatusEnum,
        "ClusterItemStatusNodeMapTidbInner.StatusEnum": ClusterItemStatusNodeMapTidbInner.StatusEnum,
        "ClusterItemStatusNodeMapTiflashInner.StatusEnum": ClusterItemStatusNodeMapTiflashInner.StatusEnum,
        "ClusterItemStatusNodeMapTikvInner.StatusEnum": ClusterItemStatusNodeMapTikvInner.StatusEnum,
        "CreateClusterReq.ClusterTypeEnum": CreateClusterReq.ClusterTypeEnum,
        "CreateClusterReq.CloudProviderEnum": CreateClusterReq.CloudProviderEnum,
        "GetBackupOfClusterResp.TypeEnum": GetBackupOfClusterResp.TypeEnum,
        "GetBackupOfClusterResp.StatusEnum": GetBackupOfClusterResp.StatusEnum,
        "GetRestoreResp.StatusEnum": GetRestoreResp.StatusEnum,
        "ListBackupItem.TypeEnum": ListBackupItem.TypeEnum,
        "ListBackupItem.StatusEnum": ListBackupItem.StatusEnum,
        "ListProviderRegionsItem.ClusterTypeEnum": ListProviderRegionsItem.ClusterTypeEnum,
        "ListProviderRegionsItem.CloudProviderEnum": ListProviderRegionsItem.CloudProviderEnum,
        "ListRestoreRespItem.StatusEnum": ListRestoreRespItem.StatusEnum,
        "OpenapiBackupTypeEnum": OpenapiBackupTypeEnum,
        "OpenapiCloudProvider": OpenapiCloudProvider,
        "OpenapiClusterItem.ClusterTypeEnum": OpenapiClusterItem.ClusterTypeEnum,
        "OpenapiClusterItem.CloudProviderEnum": OpenapiClusterItem.CloudProviderEnum,
        "OpenapiClusterItemStatus.ClusterStatusEnum": OpenapiClusterItemStatus.ClusterStatusEnum,
        "OpenapiClusterStatus": OpenapiClusterStatus,
        "OpenapiClusterType": OpenapiClusterType,
        "OpenapiGetBackupOfClusterResp.TypeEnum": OpenapiGetBackupOfClusterResp.TypeEnum,
        "OpenapiGetBackupOfClusterResp.StatusEnum": OpenapiGetBackupOfClusterResp.StatusEnum,
        "OpenapiGetBackupOfClusterRespStatusEnum": OpenapiGetBackupOfClusterRespStatusEnum,
        "OpenapiGetRestoreResp.StatusEnum": OpenapiGetRestoreResp.StatusEnum,
        "OpenapiGetRestoreRespStatusEnum": OpenapiGetRestoreRespStatusEnum,
        "OpenapiListBackupItem.TypeEnum": OpenapiListBackupItem.TypeEnum,
        "OpenapiListBackupItem.StatusEnum": OpenapiListBackupItem.StatusEnum,
        "OpenapiListBackupItemStatusEnum": OpenapiListBackupItemStatusEnum,
        "OpenapiListProviderRegionsItem.ClusterTypeEnum": OpenapiListProviderRegionsItem.ClusterTypeEnum,
        "OpenapiListProviderRegionsItem.CloudProviderEnum": OpenapiListProviderRegionsItem.CloudProviderEnum,
        "OpenapiListRestoreRespItem.StatusEnum": OpenapiListRestoreRespItem.StatusEnum,
        "OpenapiListRestoreRespItemStatusEnum": OpenapiListRestoreRespItemStatusEnum,
        "OpenapiNodeStatus": OpenapiNodeStatus,
        "OpenapiTiDBNodeMap.StatusEnum": OpenapiTiDBNodeMap.StatusEnum,
        "OpenapiTiFlashNodeMap.StatusEnum": OpenapiTiFlashNodeMap.StatusEnum,
        "OpenapiTiKVNodeMap.StatusEnum": OpenapiTiKVNodeMap.StatusEnum,
}

let typeMap: {[index: string]: any} = {
    "ClusterInfoOfRestore": ClusterInfoOfRestore,
    "ClusterItem": ClusterItem,
    "ClusterItemConfig": ClusterItemConfig,
    "ClusterItemConfigComponents": ClusterItemConfigComponents,
    "ClusterItemConfigComponentsTidb": ClusterItemConfigComponentsTidb,
    "ClusterItemConfigComponentsTiflash": ClusterItemConfigComponentsTiflash,
    "ClusterItemConfigComponentsTikv": ClusterItemConfigComponentsTikv,
    "ClusterItemStatus": ClusterItemStatus,
    "ClusterItemStatusConnectionStrings": ClusterItemStatusConnectionStrings,
    "ClusterItemStatusConnectionStringsStandard": ClusterItemStatusConnectionStringsStandard,
    "ClusterItemStatusConnectionStringsVpcPeering": ClusterItemStatusConnectionStringsVpcPeering,
    "ClusterItemStatusNodeMap": ClusterItemStatusNodeMap,
    "ClusterItemStatusNodeMapTidbInner": ClusterItemStatusNodeMapTidbInner,
    "ClusterItemStatusNodeMapTiflashInner": ClusterItemStatusNodeMapTiflashInner,
    "ClusterItemStatusNodeMapTikvInner": ClusterItemStatusNodeMapTikvInner,
    "CreateBackupReq": CreateBackupReq,
    "CreateBackupResp": CreateBackupResp,
    "CreateClusterReq": CreateClusterReq,
    "CreateClusterReqConfig": CreateClusterReqConfig,
    "CreateClusterReqConfigComponents": CreateClusterReqConfigComponents,
    "CreateClusterReqConfigIpAccessListInner": CreateClusterReqConfigIpAccessListInner,
    "CreateClusterResp": CreateClusterResp,
    "CreateRestoreReq": CreateRestoreReq,
    "CreateRestoreResp": CreateRestoreResp,
    "ErrorResponse": ErrorResponse,
    "GetBackupOfClusterResp": GetBackupOfClusterResp,
    "GetClustersOfProjectResp": GetClustersOfProjectResp,
    "GetProjectsResp": GetProjectsResp,
    "GetProviderRegionsResp": GetProviderRegionsResp,
    "GetRestoreResp": GetRestoreResp,
    "ListBackupItem": ListBackupItem,
    "ListBackupOfClusterResp": ListBackupOfClusterResp,
    "ListProjectItem": ListProjectItem,
    "ListProviderRegions400Response": ListProviderRegions400Response,
    "ListProviderRegionsDefaultResponse": ListProviderRegionsDefaultResponse,
    "ListProviderRegionsItem": ListProviderRegionsItem,
    "ListProviderRegionsItemTidbInner": ListProviderRegionsItemTidbInner,
    "ListProviderRegionsItemTidbInnerNodeQuantityRange": ListProviderRegionsItemTidbInnerNodeQuantityRange,
    "ListProviderRegionsItemTiflashInner": ListProviderRegionsItemTiflashInner,
    "ListProviderRegionsItemTiflashInnerNodeQuantityRange": ListProviderRegionsItemTiflashInnerNodeQuantityRange,
    "ListProviderRegionsItemTiflashInnerStorageSizeGibRange": ListProviderRegionsItemTiflashInnerStorageSizeGibRange,
    "ListProviderRegionsItemTikvInner": ListProviderRegionsItemTikvInner,
    "ListProviderRegionsItemTikvInnerNodeQuantityRange": ListProviderRegionsItemTikvInnerNodeQuantityRange,
    "ListProviderRegionsItemTikvInnerStorageSizeGibRange": ListProviderRegionsItemTikvInnerStorageSizeGibRange,
    "ListRestoreResp": ListRestoreResp,
    "ListRestoreRespItem": ListRestoreRespItem,
    "OpenapiClusterComponents": OpenapiClusterComponents,
    "OpenapiClusterConfig": OpenapiClusterConfig,
    "OpenapiClusterConnectionStrings": OpenapiClusterConnectionStrings,
    "OpenapiClusterInfoOfRestore": OpenapiClusterInfoOfRestore,
    "OpenapiClusterItem": OpenapiClusterItem,
    "OpenapiClusterItemStatus": OpenapiClusterItemStatus,
    "OpenapiClusterNodeMap": OpenapiClusterNodeMap,
    "OpenapiCreateBackupResp": OpenapiCreateBackupResp,
    "OpenapiCreateClusterResp": OpenapiCreateClusterResp,
    "OpenapiCreateRestoreResp": OpenapiCreateRestoreResp,
    "OpenapiGetBackupOfClusterResp": OpenapiGetBackupOfClusterResp,
    "OpenapiGetClusterConfig": OpenapiGetClusterConfig,
    "OpenapiGetRestoreResp": OpenapiGetRestoreResp,
    "OpenapiIpAccessListItem": OpenapiIpAccessListItem,
    "OpenapiListBackupItem": OpenapiListBackupItem,
    "OpenapiListBackupOfClusterResp": OpenapiListBackupOfClusterResp,
    "OpenapiListClustersOfProjectResp": OpenapiListClustersOfProjectResp,
    "OpenapiListProjectItem": OpenapiListProjectItem,
    "OpenapiListProjectsResp": OpenapiListProjectsResp,
    "OpenapiListProviderRegionsItem": OpenapiListProviderRegionsItem,
    "OpenapiListProviderRegionsResp": OpenapiListProviderRegionsResp,
    "OpenapiListRestoreOfProjectResp": OpenapiListRestoreOfProjectResp,
    "OpenapiListRestoreRespItem": OpenapiListRestoreRespItem,
    "OpenapiNodeQuantityRange": OpenapiNodeQuantityRange,
    "OpenapiNodeStorageSizeRange": OpenapiNodeStorageSizeRange,
    "OpenapiStandardConnection": OpenapiStandardConnection,
    "OpenapiTiDBComponent": OpenapiTiDBComponent,
    "OpenapiTiDBNodeMap": OpenapiTiDBNodeMap,
    "OpenapiTiDBProfile": OpenapiTiDBProfile,
    "OpenapiTiFlashComponent": OpenapiTiFlashComponent,
    "OpenapiTiFlashNodeMap": OpenapiTiFlashNodeMap,
    "OpenapiTiFlashProfile": OpenapiTiFlashProfile,
    "OpenapiTiKVComponent": OpenapiTiKVComponent,
    "OpenapiTiKVNodeMap": OpenapiTiKVNodeMap,
    "OpenapiTiKVProfile": OpenapiTiKVProfile,
    "OpenapiUpdateClusterComponents": OpenapiUpdateClusterComponents,
    "OpenapiUpdateClusterConfig": OpenapiUpdateClusterConfig,
    "OpenapiUpdateTiDBComponent": OpenapiUpdateTiDBComponent,
    "OpenapiUpdateTiFlashComponent": OpenapiUpdateTiFlashComponent,
    "OpenapiUpdateTiKVComponent": OpenapiUpdateTiKVComponent,
    "OpenapiVPCPeeringConnection": OpenapiVPCPeeringConnection,
    "ProtobufAny": ProtobufAny,
    "RpcStatus": RpcStatus,
    "UpdateClusterComponents": UpdateClusterComponents,
    "UpdateClusterComponentsComponents": UpdateClusterComponentsComponents,
    "UpdateClusterComponentsComponentsTidb": UpdateClusterComponentsComponentsTidb,
    "UpdateClusterComponentsComponentsTiflash": UpdateClusterComponentsComponentsTiflash,
    "UpdateClusterComponentsComponentsTikv": UpdateClusterComponentsComponentsTikv,
    "UpdateClusterReq": UpdateClusterReq,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
            
        }
    }
}

export class HttpDigestAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password, sendImmediately:false
            
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
