/* SystemJS module definition */
declare var module: NodeModule;
declare var require: any;
interface NodeModule {
  id: string;
}
interface Window {
  jwt_decode(jwt: string): any;
}
declare module "jwt-decode" {
function decode(token: string): any;
namespace decode {}
export = decode;
}
