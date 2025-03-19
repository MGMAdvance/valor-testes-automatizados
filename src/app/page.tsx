import TodoList from '@/components/todo';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <TodoList />
            </main>
        </div>
    );
}
