import React from 'react'

const TextContext = React.createContext();

export const TextProvider = ({children})=>{
    const [extractedText, setExtractedText] = React.useState('');

    React.useEffect(()=>{
    },[extractedText])

    return(
        <TextContext.Provider value={{extractedText, setExtractedText}}>
            {children}
            </TextContext.Provider>
    );
};

export default TextContext;