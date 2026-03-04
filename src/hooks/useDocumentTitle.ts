import { useEffect } from "react";

const BASE_TITLE = "Srpska Pravoslavna Crkva Sveti Sava Stockholm";

export const useDocumentTitle = (pageTitle?: string) => {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} | ${BASE_TITLE}` : BASE_TITLE;
    return () => {
      document.title = BASE_TITLE;
    };
  }, [pageTitle]);
};
