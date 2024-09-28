export interface ApuConfig {
    apuConfig: {
        assemblerOptions: any;
        runnerOptions: any;
    };
}

export function parseApuConfig(json: string): ApuConfig {
    return JSON.parse(json);
}
