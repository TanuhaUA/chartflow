import { memo } from 'react';

  export const Header = memo(() => {
  return (
    <header className="header">
      <div className="header__content container">
        <img src="/favicon.png" alt="logo" width={60} height={60} />
        <h1 className="header__title">Build charts with no signup</h1>
      </div>
    </header>
  );
});
