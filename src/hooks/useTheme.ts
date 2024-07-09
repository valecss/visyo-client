import { BaseColors } from '@/styles';
import { create } from 'zustand';

type Theme = 'light' | 'dark';

interface ThemeState {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
    theme: 'light',
    setTheme: (theme) => set({ theme }),
}));

export const useThemeColors = () => {
    const theme = useThemeStore((state) => state.theme);
    return BaseColors[theme];
};