
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <LanguageSwitcher />
      <h1>{t('title')}</h1>
      <p><Link href="/upload">{t('upload')}</Link></p>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
