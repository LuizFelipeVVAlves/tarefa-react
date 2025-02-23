import { createContext, JSX } from "react";

interface CommentsContext {
    comments?: JSX.Element[];
    setComments?: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
}

const CommentsContext = createContext<CommentsContext>({});

export { CommentsContext };