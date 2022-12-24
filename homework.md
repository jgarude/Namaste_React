## Whats CDN?

CDN means Content Delivery Network, it refers to geographically distributed servers which helps to deliver resources faster. It helps **cache** the content at user's end which loads content website faster

## Whats emmet?

Its a **tool/extension**, that helps web developers to write down the code faster.

## Whats crossorigin attribute in HTML?

crossorigin attribute allows to fetch the content from different origin. It also provides support for **CORS**, which means any resources apart from same origin should get loaded in browser

## Whats the use of async and defer for script tag?

Usually if we don't use async and defer tag then HTML parsing begins and as soon as it encounters the script then it loads the script and execute the script immediately and after that html parsing continue.

##### Use of async

HTML parsing start along with this it fetches the script and once the script gets loaded it stops html parsing and then executes the script and after this HTML parsing gets continues.

```sh
<script async src="...." ></script>
```

##### Use of defer

HTML parsing start along with this it fetches the script and once the script gets loaded it does not executes the script unless the html parsing finished. Its executes after the HTML parsing gets finishes.

```sh
<script defer src="...." ></script>
```

> async attribute does not fix/define the order for scripts it may cause issues if one script is dependent on another so in this case use defer.

> You can use async for external scripts.
