import { Link } from '@remix-run/react';

import homeStyles from '~/styles/home.css';

export default function Index() {
  return (
    <main id="content">
      <h1>Um novo jeito de organizar suas anotações</h1>
      <p>Experimente agora!</p>
      <p id="cta">
        <Link to="/notes">anotações</Link>
      </p>
    </main>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: homeStyles }];
}
