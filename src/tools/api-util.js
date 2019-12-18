export default class ApiUtil {
    constructor(prefix) {
        this.prefix = prefix;
    }

    _request(url, init, headers) {
    
        url = this.prefix ? `${this.prefix}${url}` : url;
        let options = Object.assign({},  {
            mode: 'cors'
        }, init);

        options.headers = Object.assign({}, options.headers || {}, headers || {});
        // let response = await fetch(url, options);
        // response = this.parseResponse(response);
        // return response;
        console.log(url, options)
        return fetch(url, options).then(response => {
            const _response = this.parseResponse(response);
            return _response;
        })
    }

    parseResponse(response) {
        let newResponse = this.checkStatus(response);
        return this.parseBody(newResponse);
    }

    parseBody(response) {
        const contentType = response.headers.get('Content-Type');
        if (contentType) {
            if (contentType.indexOf('text') !== -1) {
                return response.text();
            }

            if (contentType.indexOf('json') !== -1) {
                return response.json();
            }

            if (contentType.indexOf('form') !== -1) {
                return response.formData();
            }
        }
    }

    checkStatus(response) {
        if(response.status >= 200 && response.status < 300) { //响应成功
            return response;
        }
        if(response.status === 301 || response.status === 302) { //重定向
            window.location = response.headers.get('Location');
        }
        const error = new Error(response.statusText);
        error.data = response;
        throw error;
    }

    get(url, headers, options) {
        let _headers = Object.assign({}, {
            'Content-Type': 'application/json'
        }, headers);

        let _options = Object.assign({}, options);

        return this._request(url, _options, _headers);        
    }

    post(url, data, headers, options) {
        let _headers = Object.assign({}, {
            'Content-Type': 'application/json'
        }, headers);

        let _submitData = this.parseRequestBody(data, headers);

        let _options = Object.assign({}, {
            method: 'POST',
            body: _submitData
        }, options);

        return this._request(url, _options, _headers);        
    }

    put(url, data, headers, options) {
        let _headers = Object.assign({}, {
            'Content-Type': 'application/json'
        }, headers);

        let _submitData = this.parseRequestBody(data, headers);

        let _options = Object.assign({}, {
            method: 'PUT',
            body: _submitData
        }, options);

        return this._request(url, _options, _headers);        
    }

    delete(url, data, headers, options) {
        let _headers = Object.assign({}, {
            'Content-Type': 'application/json'
        }, headers);

        let _submitData = this.parseRequestBody(data, headers);

        let _options = Object.assign({}, {
            method: 'DELETE',
            body: _submitData
        }, options);

        return this._request(url, _options, _headers);        
    }

    parseRequestBody(data, headers) {
        if (headers['Content-Type'].indexOf('form') !== -1 || headers['content-type'].indexOf('form') !== -1) {
            const formData = new FormData();
            for (let key in data) {
                formData.append(key, data[key]);
            }

            return formData;
        }

        if (headers['Content-Type'].indexOf('json') !== -1 || headers['content-type'].indexOf('json') !== -1) {
            return JSON.stringify(data);
        }

        return data;

    }
};