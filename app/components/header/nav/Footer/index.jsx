import styles from './style.module.scss';

export default function index() {
  return (
    <div className={styles.footer}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://wa.me/919047576773" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a href="mailto:info@bernaldarts.com">Email</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Behance</a>
    </div>
  )
}
