import React, { createContext, useContext, useState, ReactNode, useMemo } from "react";

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
        if(url.length <= 10 || url.length >= 13) return ;
        
        console.log(url.length);
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