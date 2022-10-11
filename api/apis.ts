export * from './backupApi';
import { BackupApi } from './backupApi';
export * from './clusterApi';
import { ClusterApi } from './clusterApi';
export * from './projectApi';
import { ProjectApi } from './projectApi';
export * from './restoreApi';
import { RestoreApi } from './restoreApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [BackupApi, ClusterApi, ProjectApi, RestoreApi];
