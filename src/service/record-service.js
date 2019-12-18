import { baseApi } from './base-api';
console.log(baseApi);
class RecordService {
    constructor(api) {
        this.api = api;
    }

    addRecord(record) {
        return this.api.post('/api/records', record);
    }

    deleteRecord(id) {
        return this.api.delete(`/api/records/${id}`);
    }

    getRecord() {
        return this.api.get('/api/records');
    }

    updateRecord(id, record) {
        return this.api.post(`/api/records/${id}`, record);
    }
}


export default new RecordService(baseApi);