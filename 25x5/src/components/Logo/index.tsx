import styles from './styles.module.css'

import { Hourglass } from 'lucide-react';

export function Logo() {
    return (    
        <div className={styles.logo}>
            <a href="#" className={styles.logoLink}>
                <Hourglass size={64} />
                <span>25x5</span>
            </a>
        </div>
    );
}