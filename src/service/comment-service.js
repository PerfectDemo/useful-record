import { baseApi } from './base-api';

class RecordService {
    constructor(api) {
        this.api = api;
    }

    addComment(recordId, comment) {
        comment.recordId = recordId;
        return this.api.post(`/comments/`, comment);
    }

    deleteCommen(id) {
        return this.api.delete(`/comments/${id}}`);
    }

    getComments(recordId) {
        return this.api.get(`/comments?q=recordId:${recordId}`);
    }

    updateComment(id, comment) {
        return this.api.post(`/comments/${id}`, comment);
    }
}


export default new RecordService(baseApi);