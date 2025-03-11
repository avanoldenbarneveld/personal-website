'use client';

import styles from '@/styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Alberto van Oldenbarneveld. All rights reserved.</p>
    </footer>
  );
}
