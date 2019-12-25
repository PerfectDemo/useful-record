import React, { createContext, useState } from 'react';
import useRecord from './hooks/use-record';
import useComment from './hooks/use-comment';
import useMedia from './hooks/use-media';

export const Context = createContext({});

export const Provider = (props) => {
    const { children } = props;

    const [ selectedRecord, setSelectedRecord ] = useState(null);
    const [ addRecordDialogVisible, setAddRecordDialogVisible ] = useState(false);

    const { records, setRecords, loading, error, updateRecord, addRecord, deleteRecord } = useRecord();
    const { comments, addComment, updateComment, setRecordId, recordId, commentLoading } = useComment();

    const isWide = useMedia(
        ['(min-width: 1000px)', '(min-width: 600px)', '(min-width: 0px)'],
        [true, false, false],
        true
    )


    const context = {
        selectedRecord,
        setSelectedRecord,
        records,
        setRecords,
        loading,
        error,
        updateRecord,
        addRecord,
        deleteRecord,
        addRecordDialogVisible,
        setAddRecordDialogVisible,

        comments,
        addComment,
        updateComment,
        setRecordId,
        recordId,
        commentLoading, 

        isWide
    };

    return (
        <Context.Provider value={context}>{children}</Context.Provider>
    )
}

export const { Consumer } = Context;



