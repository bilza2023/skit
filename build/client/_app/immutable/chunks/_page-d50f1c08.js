async function e({fetch:t}){return{cities:await(await t("http://localhost:3000/api/get_cities")).json()}}const s=Object.freeze(Object.defineProperty({__proto__:null,load:e},Symbol.toStringTag,{value:"Module"}));export{s as _,e as l};
