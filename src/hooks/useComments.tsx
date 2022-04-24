import React, { createContext, useContext, useEffect, useState, ReactNode, useCallback, useMemo } from "react";

type CommentsValue = {
    comments: object | null;
    setComments: object | null;
    url: string;
    setUrlPost(urlPost: string) : void;
}

type CommentsProviderProps = {
    children: ReactNode
}

export const Comments = createContext({} as CommentsValue);

function CommentsProvider({children}: CommentsProviderProps){
    const [comments, setComments] = useState<Object | null>(null);
    const [url, setUrl] = useState<string>("");
    
    function setUrlPost(urlPost: string){
        setUrl(urlPost)
    }
    
    useMemo(() => {
        console.log(url);
    }, [url]);

    return (
        <Comments.Provider value={{ comments, setComments, url, setUrlPost }}>
            {children}
        </Comments.Provider>
    );
}

function useComments() {
    const context = useContext(Comments);
    return context;
}

export {
    CommentsProvider,
    useComments
}