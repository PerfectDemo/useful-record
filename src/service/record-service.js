import api from './base-api';

class RecordService {
    constractor(api) {
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


export default new RecordService(api);