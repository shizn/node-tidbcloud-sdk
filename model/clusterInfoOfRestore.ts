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
* The information of the restored cluster. The restored cluster is the new cluster your backup data is restored to.
*/
export class ClusterInfoOfRestore {
    /**
    * The ID of the restored cluster. The restored cluster is the new cluster your backup data is restored to.
    */
    'id'?: string;
    /**
    * The name of the restored cluster. The restored cluster is the new cluster your backup data is restored to.
    */
    'name'?: string;
    /**
    * The status of the restored cluster. Possible values are `\"AVAILABLE\"`, `\"CREATING\"`, `\"MODIFYING\"`, `\"PAUSED\"`, `\"RESUMING\"`, `\"UNAVAILABLE\"`, `\"IMPORTING\"`, and `\"CLEARED\"`.
    */
    'status'?: string;

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
            "name": "status",
            "baseName": "status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ClusterInfoOfRestore.attributeTypeMap;
    }
}

