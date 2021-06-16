---
title: "CSR vs. SSR vs. SSG vs. ISR"
publishedAt: "2021-06-12"
summary: "Different rendering approaches and their use cases?"
---

As developers we face lots of challenges other than developing the product (mobile apps, landing pages, dashboards...) especially when it comes to the architecture we choose to reach the best profrmance. Well if you're reading this article that means you came accross the terms (CSR-SSR-SSG-ISR) but you didn't understand them, In this blog I'm goign to explain what are they and when to use them so in the future w=you will be able to develop your product with confidence that you have chosen the best approach. Before diving in, you have to know that all of them are different rendering modes for your website, konwing that lets start one by one

# CSR

Stands for client side rendering, this is the typical approach that frameworks like Angular, Vue or React ships as default and it exsited since ever. The server sends the markup to the client without any data,
then The browser downloads the sent files and then executes jsvascript, the browser fetches data (useEffect in React e.g.), Upon data fatching, the layout is updated (useState in React e.g.)

## Pros

- Fast rendering

- Page gets displayed immediately

## Cons

- Not SEO freindly

- It needs multiple round trips to the server (no initial data)

# SSR

Stands for server side rendering. On every request and instead of shiping the raw markup, our server take the responsibility to fetch the data on the server and coonstructing the bundle, once ready server ship the bundle to the client and when dwonloaded the browser renders it immedialtely no need to wait for hydration process nor to fetch the data (as it is fetched on the server)

## Pros

- Good for SEO

- No blank loading state, it's pre(rendered)

## Cons

- Slower TTFB(time to first byte), due to prerendring , bafore moving to the page using router it will stater a little.

- cannot be cached by CDN

# SSG

Stands for static site generation,

## Pros

- Fast rendering

- Page gets displayed immediately

## Cons

- Not SEO freindly

- It needs multiple round trips to the server (no initial data)

# ISR

## Pros

- Fast rendering

- Page gets displayed immediately

## Cons

- Not SEO freindly

- It needs multiple round trips to the server (no initial data)
