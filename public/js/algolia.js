<script>
!(function (e, a, t, n, s, i, c) {
  (e.AlgoliaAnalyticsObject = s),
    (e[s] =
      e[s] ||
      function () {
        (e[s].queue = e[s].queue || []).push(arguments);
      }),
    (i = a.createElement(t)),
    (c = a.getElementsByTagName(t)[0]),
    (i.async = 1),
    (i.src = n),
    c.parentNode.insertBefore(i, c);
})(window, document, 'script', ALGOLIA_INSIGHTS_SRC, 'aa');

window.aa('init', {
        appId: '2XJQHYFX2S',
        apiKey: '63c304c04c478fd0c4cb1fb36cd666cb',
        useCookie: true,
        cookieDuration: 15552000000,
    });

    aa('getUserToken', null, (err, newUserToken) => {
        if (err) {
            console.error(err);
            return;
        }
        window.colbyNews.algoliaUserToken = newUserToken;
    });
</script>