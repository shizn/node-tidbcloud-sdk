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

export class CreateClusterReqConfigIpAccessListInner {
    /**
    * The IP address or CIDR range that you want to add to the cluster\'s IP access list.
    */
    'cidr': string;
    /**
    * Description that explains the purpose of the entry.
    */
    'description'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cidr",
            "baseName": "cidr",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateClusterReqConfigIpAccessListInner.attributeTypeMap;
    }
}
