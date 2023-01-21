import React, { useEffect, useMemo, useState } from 'react';
import { getAllPages } from '../../../../lib/graphcms';
import { Header } from '../../2-molecules/Header';
import Footer from '../../3-organisms/Footer/Footer';
import styles from './PageLayout.module.css';

export interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const [pages, setPages] = useState<Models.MenuItem[]>([
    { pageName: 'frontpage', pageUrl: 'frontpage' },
    { pageName: 'about', pageUrl: 'about' },
    { pageName: 'project', pageUrl: 'projects' },
    { pageName: 'contact', pageUrl: 'contact' },
  ]);

  /* useEffect(() => {
    const getMenuItems = async () => {
      let items: Models.MenuItem[] = await getAllPages();
      setPages(items); 
      console.log(items)
    };
   
    getMenuItems()
  }, []); */

  return (
    <div className={styles.PageContent}>
      <Header menuItems={pages} />
      <main className={styles.body}>{children}</main>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
