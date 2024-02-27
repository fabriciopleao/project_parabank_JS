/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type register_page = typeof import('./pages/register_page.js');
type login_page = typeof import('./pages/login_page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, register_page: register_page, login_page: login_page}
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
