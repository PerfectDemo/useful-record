import { baseApi } from './base-api';
class RecordService {
    constructor(api) {
        this.api = api;
    }

    addRecord(record) {
        return this.api.post('/records', record);
    }

    deleteRecord(id) {
        return this.api.delete(`/records/${id}`);
    }

    getRecord() {
        return this.api.get('/records');
    }

    updateRecord(id, record) {
        return this.api.post(`/records/${id}`, record);
    }
}


export default new RecordService(baseApi);