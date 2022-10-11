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

export class OpenapiTiDBComponent {
    /**
    * The size of the TiDB component in the cluster. You can get the available node size of each region from the response of [List the cloud providers, regions and available specifications](#tag/Cluster/operation/ListProviderRegions).  **Additional combination rules**: - If the vCPUs of TiDB or TiKV component is 2 or 4, then their vCPUs need to be the same. - If the vCPUs of TiDB or TiKV component is 2 or 4, then the cluster does not support TiFlash.  **Limitations**: - You cannot modify `node_size` for TiDB of an existing cluster.
    */
    'nodeSize': string;
    /**
    * The number of nodes in the cluster. You can get the minimum and step of a node quantity from the response of [List the cloud providers, regions and available specifications](#tag/Cluster/operation/ListProviderRegions). 
    */
    'nodeQuantity': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "nodeSize",
            "baseName": "node_size",
            "type": "string"
        },
        {
            "name": "nodeQuantity",
            "baseName": "node_quantity",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return OpenapiTiDBComponent.attributeTypeMap;
    }
}
