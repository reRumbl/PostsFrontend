const baseUrl: string = `${window.location.protocol}//${window.location.host}`;
const awsUrl: string = `${window.location.protocol}//${window.location.hostname}:9000`;

export default baseUrl;
export { awsUrl };
