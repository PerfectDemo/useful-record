import recordService from '../service/record-service';
import { useState, useEffect } from 'react';

export default function useRecord() {
    const [ records, setRecords ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const updateData = function () {
        setLoading(true);
        recordService.getRecord()
            .then((records) => {
                setRecords(records);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setError(error);
        });
    }
    
    useEffect(() => {
        updateData();
    }, []);

    return { records, loading, error, updateData };
}