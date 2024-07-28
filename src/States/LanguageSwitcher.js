import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { signal } from "@preact/signals-react";

export const languageSignal = signal(localStorage.getItem("i18nextLng"));

export default function useLocalizeDocumentAttributes() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (i18n.resolvedLanguage) {
      // Set the <html lang> attribute.
      document.documentElement.lang = i18n.resolvedLanguage;
      // Set the <html dir> attribute.
      document.documentElement.dir = i18n.dir(i18n.resolvedLanguage);
      
      languageSignal.value = i18n.resolvedLanguage;
    }

    document.title = t("document_title");
  }, [i18n.resolvedLanguage, t, i18n]);
}