import commentService from '../service/comment-service';
import { useState, useEffect } from 'react';

export default function useComment() {
    const [ comments, setComments ] = useState([]);
    const [ recordId, setRecordId ] = useState('');
    const [ commentLoading, setCommentLoading ] = useState(false);

    const updateComment = function () {
        if (!recordId) return;
        setCommentLoading(true);
        return commentService.getComments(recordId)
            .then((comments) => {
                setComments(comments); 
            })
            .finally(() => {
                setCommentLoading(false);
            });
    }

    const addComment = function(recordId, comment) {
        return commentService.addComment(recordId, comment)
            .then(() => {
                return updateComment(recordId);
            })
           // .catch((error) => setError(error));
    }

    useEffect(() => {
        updateComment();
    }, [recordId]);

    return { comments, addComment, updateComment, setRecordId, recordId, commentLoading };
};