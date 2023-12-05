// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {bridge} from '../models';

export function Download(arg1:string,arg2:string):Promise<bridge.FlagResult>;

export function Exec(arg1:string,arg2:Array<string>):Promise<bridge.FlagResult>;

export function GetEnv():Promise<bridge.EnvResult>;

export function GetInterfaces():Promise<bridge.FlagResult>;

export function GetSystemProxy():Promise<bridge.FlagResult>;

export function HttpGet(arg1:string,arg2:{[key: string]: string}):Promise<bridge.HTTPResult>;

export function KillProcess(arg1:number):Promise<bridge.FlagResult>;

export function Movefile(arg1:string,arg2:string):Promise<bridge.FlagResult>;

export function ProcessInfo(arg1:number):Promise<bridge.FlagResult>;

export function Readfile(arg1:string):Promise<bridge.FlagResult>;

export function Removefile(arg1:string):Promise<bridge.FlagResult>;

export function SetSystemProxy(arg1:boolean,arg2:string):Promise<bridge.FlagResult>;

export function StartKernel(arg1:string,arg2:string):Promise<bridge.FlagResult>;

export function UnzipZIPFile(arg1:string,arg2:string):Promise<bridge.FlagResult>;

export function Writefile(arg1:string,arg2:string):Promise<bridge.FlagResult>;
