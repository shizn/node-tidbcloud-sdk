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

/**
* The item of backup list.
*/
export class ListBackupItem {
    /**
    * The ID of the backup. It is generated by TiDB Cloud.
    */
    'id'?: string;
    /**
    * The name of the backup.
    */
    'name'?: string;
    /**
    * The description of the backup. It is specified by the user when taking a manual type backup. It helps you add additional information to the backup.
    */
    'description'?: string;
    /**
    * The type of backup. TiDB Cloud only supports manual and auto backup. For more information, see [TiDB Cloud Documentation](https://docs.pingcap.com/tidbcloud/backup-and-restore#backup).
    */
    'type'?: ListBackupItem.TypeEnum;
    /**
    * The creation time of the backup in UTC. The time format follows the [ISO8601](http://en.wikipedia.org/wiki/ISO_8601) standard, which is `YYYY-MM-DD` (year-month-day) + T +`HH:MM:SS` (hour-minutes-seconds) + Z. For example, `2020-01-01T00:00:00Z`.
    */
    'createTimestamp'?: Date;
    /**
    * The bytes of the backup.
    */
    'size'?: string;
    /**
    * The status of backup.
    */
    'status'?: ListBackupItem.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ListBackupItem.TypeEnum"
        },
        {
            "name": "createTimestamp",
            "baseName": "create_timestamp",
            "type": "Date"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ListBackupItem.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return ListBackupItem.attributeTypeMap;
    }
}

export namespace ListBackupItem {
    export enum TypeEnum {
        Manual = <any> 'MANUAL',
        Auto = <any> 'AUTO'
    }
    export enum StatusEnum {
        Pending = <any> 'PENDING',
        Running = <any> 'RUNNING',
        Failed = <any> 'FAILED',
        Success = <any> 'SUCCESS'
    }
}