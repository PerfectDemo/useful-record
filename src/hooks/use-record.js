import recordService from '../service/record-service';
import { useState, useEffect } from 'react';

export default function useRecord() {
    const [ records, setRecords ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const updateRecords = function () {
        setLoading(true);
        return recordService.getRecord()
            .then((records) => {
                setRecords(records);
                setLoading(false);
                setError(null);
            })
            .catch((error) => {
                setLoading(false);
                setError(error);
        });
    }

    const addRecord = function(record) {
        return recordService.addRecord(record)
            .then(() => {
                setError(null);
                return updateRecords();
            })
            .catch((error) => setError(error));
    }
    
    useEffect(() => {
        updateRecords();
    }, []);

    return { records, loading, error, updateRecords, addRecord };
}