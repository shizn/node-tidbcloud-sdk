/**
 * TiDB Cloud API
 * *TiDB Cloud API is in beta.
 *
 * The version of the OpenAPI document: v1-beta
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ClusterItemStatusConnectionStrings } from './clusterItemStatusConnectionStrings';
import { ClusterItemStatusNodeMap } from './clusterItemStatusNodeMap';

/**
* The status of the cluster.
*/
export class ClusterItemStatus {
    /**
    * TiDB version.
    */
    'tidbVersion'?: string;
    /**
    * Status of the cluster.
    */
    'clusterStatus'?: ClusterItemStatus.ClusterStatusEnum;
    'nodeMap'?: ClusterItemStatusNodeMap;
    'connectionStrings'?: ClusterItemStatusConnectionStrings;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tidbVersion",
            "baseName": "tidb_version",
            "type": "string"
        },
        {
            "name": "clusterStatus",
            "baseName": "cluster_status",
            "type": "ClusterItemStatus.ClusterStatusEnum"
        },
        {
            "name": "nodeMap",
            "baseName": "node_map",
            "type": "ClusterItemStatusNodeMap"
        },
        {
            "name": "connectionStrings",
            "baseName": "connection_strings",
            "type": "ClusterItemStatusConnectionStrings"
        }    ];

    static getAttributeTypeMap() {
        return ClusterItemStatus.attributeTypeMap;
    }
}

export namespace ClusterItemStatus {
    export enum ClusterStatusEnum {
        Available = <any> 'AVAILABLE',
        Creating = <any> 'CREATING',
        Modifying = <any> 'MODIFYING',
        Paused = <any> 'PAUSED',
        Resuming = <any> 'RESUMING',
        Unavailable = <any> 'UNAVAILABLE',
        Importing = <any> 'IMPORTING'
    }
}
