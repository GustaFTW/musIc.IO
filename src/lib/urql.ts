import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from "urql";

const isServerSide = typeof window === 'undefined';
const ssrCache = ssrExchange({isClient: !isServerSide});

const client = createClient({
    url: 'https://api-us-west-2.graphcms.com/v2/cl5h6cfx40wx801ug6z1p4po7/master',
    exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
})

export { client, ssrCache };