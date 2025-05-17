import { useContext } from "react";
import { PostContext } from "./createContext";

export const usePostContext = () => useContext(PostContext);