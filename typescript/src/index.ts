import { helloMom } from "./application/mom";

type OnRequestType = {
  req: FetchEvent;
}

/**
 * Run each time a Request comes in.
 * You'll have a certain time to answer the request.
 * A Worker is
 */
async function onRequest({ req }: OnRequestType) {
  req.respondWith(new Response(new Blob([helloMom()]), {
    status: 200,
  }))
}

export { onRequest }
