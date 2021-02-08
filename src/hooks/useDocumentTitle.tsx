import { useEffect } from "react";

type Hook = (title: string) => void;

export const useDocumentTitle: Hook = (title) => {
  useEffect(() => {
    document.title = `PROTRACK | ${title}`;
  }, [title]);
};
