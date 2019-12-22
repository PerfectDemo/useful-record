import React, { createContext, useState } from 'react';
import useRecord from './hooks/use-record';
import useComment from './hooks/use-comment';

export const Context = createContext({});

export const Provider = (props) => {
    const { children } = props;

    const [ selectedRecord, setSelectedRecord ] = useState(null);
    const [ addRecordDialogVisible, setAddRecordDialogVisible ] = useState(false);

    const { records, setRecords, loading, error, updateRecord, addRecord } = useRecord();
    const { comments, addComment, updateComment, setRecordId, recordId, commentLoading } = useComment();


    const context = {
        selectedRecord,
        setSelectedRecord,
        records,
        setRecords,
        loading,
        error,
        updateRecord,
        addRecord,
        addRecordDialogVisible,
        setAddRecordDialogVisible,

        comments,
        addComment,
        updateComment,
        setRecordId,
        recordId,
        commentLoading 
    };

    return (
        <Context.Provider value={context}>{children}</Context.Provider>
    )
}

export const { Consumer } = Context;



