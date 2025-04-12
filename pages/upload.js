
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function Upload() {
  const { t } = useTranslation('common');
  const [file, setFile] = useState(null);
  const [hw, setHw] = useState('');
  const [sw, setSw] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('submit') + ' (demo)');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <LanguageSwitcher />
      <h2>{t('upload')}</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} required /><br /><br />
        <input type="text" placeholder={t('hw')} value={hw} onChange={(e) => setHw(e.target.value)} required /><br /><br />
        <input type="text" placeholder={t('sw')} value={sw} onChange={(e) => setSw(e.target.value)} required /><br /><br />
        <textarea placeholder={t('description')} value={description} onChange={(e) => setDescription(e.target.value)} /><br /><br />
        <button type="submit">{t('submit')}</button>
      </form>
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
