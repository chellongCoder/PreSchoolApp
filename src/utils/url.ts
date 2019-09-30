export class Url {
    static BASE_URL = 'https://smartcom.vn/appsolarlms/';
    static getResource(url) {
        return `${this.BASE_URL}${url}`
    } 
}