import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes> ('dark');

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {

        event.preventDefault()

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return nextTheme
        })

        
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        console.log('Theme Changed:', theme);

        return (console.log('Cleanup Function'));
    }, [theme]);

    return (    
        <nav className={styles.menu}>
            <a href="#" className={styles.menuLink} aria-label='Ir para a Home' title='Home'>
                <HouseIcon />
            </a>

            <a href="#" className={styles.menuLink} aria-label='Ver histórico' title='Histórico'>
                <HistoryIcon />
            </a>

            <a href="#" className={styles.menuLink} aria-label='Ir para configurações' title='Configurações'>
                <SettingsIcon />
            </a>

            <a href="#" className={styles.menuLink} aria-label='Trocar tema' title='Tema' onClick={handleThemeChange}>
                <SunIcon />
            </a>
        </nav>
    );
}