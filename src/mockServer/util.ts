/**
 * get absolute URL for msw
 * @see https://github.com/mswjs/msw/pull/406#issuecomment-708519619
 */
export function backendUrl(path: string) {
    return `${location.origin}/api${path}`;
}
