import { ref, watch } from "vue";

export const themes = [
    'day',
    'night',
    'auto',
] as const;

export type Theme = typeof themes[number];

export const loadTheme = (): Theme => {
    const t = localStorage.theme;
    if (themes.includes(t)) {
        return t as Theme;
    }
    return 'auto';
};

export const saveTheme = (theme: Theme): void => {
    localStorage.theme = theme;
};

export const theme = ref<Theme>(loadTheme());

const mq = window.matchMedia('(prefers-color-scheme: dark)');

export const osTheme = ref<'night' | 'day'>((mq.matches ? 'night' : 'day'));

export const syncTheme = () => {
    const t = theme.value === 'auto' ? osTheme.value : theme.value;
    const cl = document.documentElement.classList;
    if (t === 'night') cl.add('dark');
    else cl.remove('dark');
};

mq.addEventListener('change', (e) => {
    osTheme.value = e.matches ? 'night' : 'day';
    console.log('OS theme is now ' + osTheme.value);
    syncTheme();
});

watch(theme, () => {
    console.log('theme is now ' + theme.value);
    saveTheme(theme.value);
    syncTheme();
});