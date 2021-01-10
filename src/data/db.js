const tables = {
    "BRAND_PRODUCTS": require('./brandproducts.json'),
    "BRANDS": require('./brands.json'),
    "PRODUCTS": require('./products.json'),
  }
  
  export const TABLE_NAMES = {
    "BRAND_PRODUCTS": "BRAND_PRODUCTS",
    "BRANDS": "BRANDS",
    "PRODUCTS": "PRODUCTS",
  }
  
  const getSingleObjectWhere = (tableName, predicate) => {
    const table = tables[tableName]
    const res = table.find(predicate)
    if (res) {
      return Object.keys(res).reduce((obj, key) => {
        obj[key] = key.includes('img') ? res[key].split('/').pop() : res[key]
        return obj
      }, {})
    }
  }
   
  export const db = {
    getSingleObjectWhere
  }
  