import api from './base-api';

class RecordService {
    constructor(api) {
        this.api = api;
    }

    addComment(recordId, comment) {
        return this.api.post(`/api/records/${recordId}/comments`, comment);
    }

    deleteComment(recordId, id) {
        return this.api.delete(`/api/records/${recordId}/comments/${id}`);
    }

    getComments(recordId) {
        return this.api.get(`/api/records/${recordId}/comments`);
    }

    updateComment(recordId, id, comment) {
        return this.api.post(`/api/records/${recordId}/comments/${id}`, comment);
    }
}


export default new RecordService(api);