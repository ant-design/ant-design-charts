import { Event } from '../utils/events';
import { ProjectReflection } from '../models';
import { ProjectReflection as JSONProjectReflection } from './schema';
export interface SerializeEventData {
    outputDirectory?: string;
    outputFile?: string;
}
export declare class SerializeEvent extends Event {
    readonly project: ProjectReflection;
    outputDirectory?: string;
    outputFile?: string;
    output: Partial<JSONProjectReflection>;
    constructor(name: string, project: ProjectReflection, output: Partial<JSONProjectReflection>);
}
