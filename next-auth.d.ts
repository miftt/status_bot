import { Session } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id?: string | undefined;
    } & Session['user'];
  }
}
