import Router, { NextRouter } from 'next/router';
import { useEffect, useRef } from 'react';

/**
 * Scroll restoration to work around bugs in NextJS. At time of writing,
 * they do support `experimental: { scrollRestoration: true }` but there
 * are still bugs with it.
 * (https://github.com/vercel/next.js/issues/20951#issuecomment-1247401017)
 *
 * @param router (Non-reactive) NextRouter instance from _app props
 *
 * @example
 * // place in _app.tsx exported component:
 * useScrollRestoration(router);
 *
 * @see https://gist.github.com/claus/992a5596d6532ac91b24abe24e10ae81?permalink_comment_id=4301903#gistcomment-4301903
 * @see https://github.com/vercel/next.js/issues/3303#issuecomment-628400930
 * @see https://github.com/vercel/next.js/issues/12530#issuecomment-628864374
 * @see https://github.com/vercel/next.js/issues/20951#issuecomment-987252541
 */
export const useScrollRestoration = (router: NextRouter) => {
  const shouldScrollRestore = useRef(true);

  useEffect(
    () => {
    //   if (
    //     typeof window === undefined ||
    //     !('scrollRestoration' in window.history)
    //   ) {
    //     return;
    //   }
      let timer: NodeJS.Timeout;

      // Manual doesn't work well on iOS Safari https://github.com/vercel/next.js/issues/20951#issuecomment-1231966865
      const ua = window.navigator.userAgent.toLowerCase();
      const isMobileSafari = /safari/.test(ua) && /iphone|ipod|ipad/.test(ua);
      window.history.scrollRestoration = isMobileSafari ? 'auto' : 'manual';

      const saveScrollPos = (url: string) => {
        sessionStorage.setItem(
          `scrollPos:${url}`,
          JSON.stringify({ x: window.scrollX, y: window.scrollY }),
        );
      };

      const restoreScrollPos = (url: string) => {
        const json = sessionStorage.getItem(`scrollPos:${url}`);
        const scrollPos = json ? JSON.parse(json) : undefined;
        if (scrollPos) {
          window.scrollTo(scrollPos.x, scrollPos.y);
        }
      };

      const onBeforeUnload = (event: BeforeUnloadEvent) => {
        saveScrollPos(router.asPath);
        delete event['returnValue'];
      };

      const onRouteChangeStart = () => {
        saveScrollPos(router.asPath);
      };

      /**
       * Calling with relative url, not expected asPath, so this
       * will break if there is a basePath or locale path prefix.
       */
      const triggerRestore = (url: string) => {
        if (shouldScrollRestore.current) {
          // This short delay helps React scroll to correct position after initial hydration
		  shouldScrollRestore.current = false;
		  restoreScrollPos(url);
        //   timer = setTimeout(() => {
        //   }, 1);
        }
      };

      window.addEventListener('beforeunload', onBeforeUnload);
      Router.events.on('routeChangeStart', onRouteChangeStart);
      Router.events.on('routeChangeComplete', triggerRestore);
      Router.beforePopState(() => {
        shouldScrollRestore.current = true;
        return true;
      });

      // initial load (e.g. page refresh)
      if (shouldScrollRestore.current) {
        triggerRestore(router.asPath);
      }

      return () => {
        // clearTimeout(timer);
        window.removeEventListener('beforeunload', onBeforeUnload);
        Router.events.off('routeChangeStart', onRouteChangeStart);
        Router.events.off('routeChangeComplete', triggerRestore);
        Router.beforePopState(() => true);
      };
    },
    // Run only once - inputs can be safely treated as non-reactive
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
};