import Module from '..';

export default defineNuxtConfig({
  modules: [
    Module,
    '@antify/ui-module',
    '@antify/dev-module'
  ],
  antNoteModule: {
    providers: [
      {
        id: 'core',
        isSingleTenancy: true,
      },
      {
        id: 'tenant',
        isSingleTenancy: false,
      },
    ],
  },
  /**
   * Allow using packages outside the monorepo with "link:../../example-package".
   * Without strict, vite would throw 403 error.
   */
  vite: {
    server: {
      fs: {
        strict: false,
      }
    }
  }
});
