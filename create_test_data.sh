#!/usr/bin/env bash

GOODSNAME="テスト商品"
GOODSBRAND="テストメーカー"
SALEUNIT="90g×2"
EXCLUDINGTAXPRICE=1000
INCLUDINGTAXPRICE=1000

# curlでjson-serverにpostしてデータを50件作成する
for ((i = 2; i <= 50; i++)); do
  curl -X POST http://localhost:3001/items/ -d \
    "goodsName=${GOODSNAME}${i}&goodsBrand=${GOODSBRAND}&saleUnit=${SALEUNIT}&goodsImgUri=test2.jpg&excludingTaxPrice=${EXCLUDINGTAXPRICE}&includingTaxPrice=${INCLUDINGTAXPRICE}"
done
