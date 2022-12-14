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
import { ClusterInfoOfRestore } from './clusterInfoOfRestore';

/**
* The items of all restore tasks.
*/
export class ListRestoreRespItem {
    /**
    * The ID of the restore task.
    */
    'id'?: string;
    /**
    * The creation time of the backup in UTC.  The time format follows the [ISO8601](http://en.wikipedia.org/wiki/ISO_8601) standard, which is `YYYY-MM-DD` (year-month-day) + T +`HH:MM:SS` (hour-minutes-seconds) + Z. For example, `2020-01-01T00:00:00Z`.
    */
    'createTimestamp'?: Date;
    /**
    * The ID of the backup.
    */
    'backupId'?: string;
    /**
    * The cluster ID of the backup.
    */
    'clusterId'?: string;
    /**
    * The status of the restore task.
    */
    'status'?: ListRestoreRespItem.StatusEnum;
    'cluster'?: ClusterInfoOfRestore;
    /**
    * The error message of restore if failed.
    */
    'errorMessage'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "createTimestamp",
            "baseName": "create_timestamp",
            "type": "Date"
        },
        {
            "name": "backupId",
            "baseName": "backup_id",
            "type": "string"
        },
        {
            "name": "clusterId",
            "baseName": "cluster_id",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ListRestoreRespItem.StatusEnum"
        },
        {
            "name": "cluster",
            "baseName": "cluster",
            "type": "ClusterInfoOfRestore"
        },
        {
            "name": "errorMessage",
            "baseName": "error_message",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ListRestoreRespItem.attributeTypeMap;
    }
}

export namespace ListRestoreRespItem {
    export enum StatusEnum {
        Pending = <any> 'PENDING',
        Running = <any> 'RUNNING',
        Failed = <any> 'FAILED',
        Success = <any> 'SUCCESS'
    }
}
