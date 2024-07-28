import { useTranslation } from 'react-i18next';
import { themeSignal } from "../../States/ThemeSwitcher";
import "./Navbar.css"

export default function Navbar(){

    const { i18n, t } = useTranslation()

    const toggleLanguage = () => {
        if (i18n.resolvedLanguage === "ar") {
          i18n.changeLanguage("en");
        } else {
          i18n.changeLanguage("ar");
        }
    };


    return (
        <>
            <h1 className={`${themeSignal}-text`}>{t('text', {date: new Date()})}</h1>
            <p>{t("trees_grown", { count: 4 })}</p>
            <button onClick={toggleLanguage}>
                Change Language
            </button>
            <div className="d-flex justify-content-center align-items-center">
                <button className="mx-2" onClick={()=>{
                    themeSignal.value = "light"
                }}>
                    Light
                </button>
                <button className="mx-2" onClick={()=>{
                    themeSignal.value = "cyberpunk"
                }}>
                    Cyberpunk
                </button>
                <button className="mx-2" onClick={()=>{
                    themeSignal.value = "sunrise"
                }}>
                    Sunrise
                </button>
                <button className="mx-2" onClick={()=>{
                    themeSignal.value = "forest"
                }}>
                    Forest
                </button>
                <button className="mx-2" onClick={()=>{
                    themeSignal.value = "sea"
                }}>
                    Sea
                </button>
                <button className="mx-2" onClick={()=>{
                    themeSignal.value = "dark"
                }}>
                    Dark
                </button>
                <button className="mx-2" onClick={()=>{
                    themeSignal.value = "modern-dark"
                }}>
                    Modern Dark
                </button>
                <button className="mx-2" onClick={()=>{
                    themeSignal.value = "dark-cyberpunk"
                }}>
                    Dark Cyberpunk
                </button>
                <button className="mx-2" onClick={()=>{
                    themeSignal.value = "ocean"
                }}>
                    Ocean
                </button>
            </div>
        </>
    )
}


