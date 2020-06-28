# Deploy

To deploy to GitHub pages, we're using a GitHub action.

To do that, first create and add an ACCESS_TOKEN inside the github repo secrets.

Then, make a push with this file and don't forget to change the `TARGET_REPO` and `TARGET_BRANCH` as you want.

```yml
# .github/workflows/vuepress-deploy.yaml
name: Build and Deploy
on: [push]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@master

    - name: vuepress-deploy
      uses: jenkey2011/vuepress-deploy@1.0.1
      env:
        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        TARGET_REPO: VaibKS/vuepress-boilerplate
        TARGET_BRANCH: master
        BUILD_SCRIPT: yarn && yarn docs:build
        BUILD_DIR: docs/.vuepress/dist/
```