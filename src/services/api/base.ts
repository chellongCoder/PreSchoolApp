import { setAccessKey } from '../../utils/common';

export default class APIBase {
    private domain: string = '';
    private apiKey: string = '';
    private static instance: APIBase;
    
    private constructor() {
        this.domain = 'http://192.168.31.80:8080';
    }
    
    public static getInstance() {
        if (!this.instance) {
            this.instance = new APIBase();
        }
        return this.instance;
    }

    post(path: string, data: any, contentType?: string,  dataKey: string = '') {
        return this.raw(
            this.domain + path,
            {
                body: JSON.stringify(data),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': contentType ? contentType : 'application/json',
                    Authorization: `Bearer ${this.apiKey}`,
                },
                method: 'POST',
            },
            dataKey
        );
    }
    get(path: string, dataKey: string = '') {        
        return this.raw(
            this.domain + path,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.apiKey}`,
                },
                method: 'GET',
            },
            dataKey
        );
    }
    put(path: string, data: any, dataKey: string = '') {
        return this.raw(
            this.domain + path,
            {
                body: JSON.stringify(data),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.apiKey}`,
                },
                method: 'PUT',
            },
            dataKey
        );
    }

    public setupDomain(domain: string) {
        this.domain = domain;
    }

    public async setAPIKey(apiKey: string) {
        this.apiKey = apiKey;
        await setAccessKey(apiKey);
    }

    public async resetAPIKey() {
        await this.setAPIKey('')
    }

    futch = (url, opts: any ={}, onProgress) => {
        console.log( this.domain + url, opts)
        return new Promise( (res, rej)=>{
            let xhr = new XMLHttpRequest();
            xhr.open(opts.method || 'get', this.domain + url);
            for (let k in opts.headers||{})
                xhr.setRequestHeader(k, opts.headers[k]);
            xhr.onload = (e: any) => res(e.target);
            xhr.onerror = rej;
            if (xhr.upload && onProgress)
                xhr.upload.onprogress = onProgress; // event.loaded / event.total * 100 ; //event.lengthComputable
            xhr.send(opts.body);
        });
    }
    
    private async raw(url: string, params: any, dataKey: string = '') {
        try {
            let res = await fetch(url, params).then(response =>
                response.json()
            );
            if (res.status === true || res.status === 'success') {
                return [null, res[dataKey || 'data'], res];
            } else if (Array.isArray(res)) {
                return [null, res, res];
            } else {
                const errorMessage =
                    res.errors && typeof res.errors.message === 'string'
                        ? res.errors.message
                        : 'Lỗi api';
                return [errorMessage, null, null];
            }
        } catch (err) {
            console.warn(url, params, err);
            let errorMessage = 'Thao tác không thành công';
            if (typeof err === 'string') {
                errorMessage = err;
            } else if (err && typeof err.message === 'string') {
                errorMessage = err.message;
            }
            return [errorMessage, null, null];
        }
    }

   
    
}
