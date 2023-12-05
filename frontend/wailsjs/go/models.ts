export namespace bridge {
	
	export class EnvResult {
	    baseBath: string;
	    appName: string;
	    UserAgent: string;
	    os: string;
	
	    static createFrom(source: any = {}) {
	        return new EnvResult(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.baseBath = source["baseBath"];
	        this.appName = source["appName"];
	        this.UserAgent = source["UserAgent"];
	        this.os = source["os"];
	    }
	}
	export class FlagResult {
	    flag: boolean;
	    data: string;
	
	    static createFrom(source: any = {}) {
	        return new FlagResult(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.flag = source["flag"];
	        this.data = source["data"];
	    }
	}
	export class HTTPResult {
	    flag: boolean;
	    header: {[key: string]: string[]};
	    body: string;
	
	    static createFrom(source: any = {}) {
	        return new HTTPResult(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.flag = source["flag"];
	        this.header = source["header"];
	        this.body = source["body"];
	    }
	}

}

