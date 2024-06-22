export function validateProperties(body: any, ...properties: string[]): boolean {
    return properties.every(prop => body.hasOwnProperty(prop));
}