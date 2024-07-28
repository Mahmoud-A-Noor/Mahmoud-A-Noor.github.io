import { effect, signal } from "@preact/signals-react";

// export const themes = [
//     "light",
//     "cyberpunk",
//     "sunrise",
//     "forest",
//     "sea",
//     "dark",
//     "modern-dark",
//     "dark-cyberpunk",
//     "ocean",
// ]



export const themeSignal = signal(getThemeFromLocalStorage());

function getThemeFromLocalStorage (){
    const defaultTheme = 'light';
    const storedTheme = localStorage.getItem('theme');
    if (!storedTheme) {
        localStorage.setItem('theme', defaultTheme);
        return defaultTheme;
    }
    return storedTheme;
}


effect(() => {
  localStorage.setItem('theme', themeSignal.value);
});

