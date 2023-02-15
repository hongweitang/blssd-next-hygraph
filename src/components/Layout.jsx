// https://nextjs.org/docs/basic-features/layouts#single-shared-layout-with-custom-app

import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <main className="max-w-screen-md mx-auto">{children}</main>
    </>
  );
}
