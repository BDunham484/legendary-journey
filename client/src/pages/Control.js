import Header from "@/components/Header"
import styles from '@/styles/Control.module.css'


const ControlCenter = () => {
    return (
        <div>
            <Header />
                <main id={styles.main}>
                    <div className={styles.container}>
                    CONTROLCENTER
                    </div>
                </main>
        </div>

    )
}

export default ControlCenter
