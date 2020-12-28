module.exports = () => {
   const data = {
      "item": []
   }

   // create descripions data
   const mainDescriptionTxt = '商品メイン説明';
   const subDescriptionTxt = '商品サブ説明';

   const descripions = []

   for (let i = 1; i <= 3; i++) {
      descripions.push(
         {
            "description_id": i,
            "description": i === 1 ? mainDescriptionTxt : `${subDescriptionTxt}${i - 1}`,
            "description_type": i === 1 ? "main" : "sub"
         },
      )
   }

   for (let i = 1; i <= 50; i++) {
      data.item.push({
         "id": i,
         "goodsName": `テスト商品${i}`,
         "goodsBrand": "テストメーカー",
         "saleUnit": "90g×2",
         "goodsImgUri": "test2.jpg",
         "excludingTaxPrice": 1000,
         "includingTaxPrice": 1080,
         "descriptions": descripions
      })
   }
   return data;
}
