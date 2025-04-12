
import Link from 'next/link';
import { useRouter } from 'next/router';

const locales = ['bg', 'en', 'de', 'tr'];

export default function LanguageSwitcher() {
  const router = useRouter();
  const { pathname, query, asPath } = router;

  return (
    <div style={{ marginBottom: '1rem' }}>
      🌐 Language:
      {locales.map((lng) => (
        <span key={lng} style={{ marginLeft: 8 }}>
          <Link href={{ pathname, query }} as={asPath} locale={lng}>
            {lng.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
