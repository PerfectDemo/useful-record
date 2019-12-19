import React, { createContext, useState } from 'react';
import useRecord from './hooks/use-record';

export const Context = createContext({});

export const Provider = (props) => {
    const { children } = props;

    const [ selectedRecord, setSelectedRecord ] = useState(null);
    const { records, setRecords, loading, error, updateRecord, addRecord } = useRecord();
    const [ addRecordDialogVisible, setAddRecordDialogVisible ] = useState(false);

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
        setAddRecordDialogVisible
    };

    return (
        <Context.Provider value={context}>{children}</Context.Provider>
    )
}

export const { Consumer } = Context;



