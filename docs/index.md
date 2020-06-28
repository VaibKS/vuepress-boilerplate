---
home: true
navbar: false
sidebar: true
heroImage: ./assets/hero.png
# heroImage: https://images.unsplash.com/photo-1500614922032-b6dd337b1313?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80
heroText: VuePress Boilerplate
tagline: Simplify your VuePress workflow!

actionText: Reference →
actionLink: ./ref/
---

# Usage

Clone the boilerplate

```bash
$ git clone https://github.com/vuepress-boilerplate
```

Currently, the `base` is set to `'vuepress-boilerplate'`, so I can host it at [https://vaibhavshide.com/vuepress-boilerplate](https://vaibhavshide.com/vuepress-boilerplate).

You may remove it to host the site at the root of `localhost`, or change it as you wish.

```js{3}
module.exports = {
  // ...
  base: '/vuepress-boilerplate/',
  title: 'VuePress Boilerplate',
  description: 'VuePress is amazing!',
  // ...
}
```

Now, you may tweak it how you want it!

To remove the reference docs and the `.git` folder, run

```bash
$ npm run ref:clean
# or
$ yarn ref:clean
```