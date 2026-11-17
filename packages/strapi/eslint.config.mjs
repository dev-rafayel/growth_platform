import config from '@growth/config/eslint';

const eslintConfig = [
  ...config,
  // Next's page-link rule looks for an app/pages directory, which a library package doesn't have.
  { rules: { '@next/next/no-html-link-for-pages': 'off' } },
];

export default eslintConfig;
