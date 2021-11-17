import React, { useCallback, useEffect } from 'react';

const Write = () => {
    const onWrite = useCallback(async() => {
        try {
            const ndef = new window.NDEFReader();
            const min = 1000;
            const max = 10000;
            let someMessage = "https://github.com/vovarudykk"
            await ndef.write({records: [{ recordType: "text", data: someMessage }]});
            alert(`Value Saved!`);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        onWrite();
    }, [onWrite])

    return (
      <></>
    );
};

export default Write;