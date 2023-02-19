import {db,UserSeq,CitySeq,RegionSeq,BusinessSeq,BusinessTypeSeq,ArticleSeq} from './dbSequalize.js';
//-----------------------------------------------
import Table from './table';
////////////////////--user model--////////////////////////
const User = new Table( UserSeq );
const City = new Table( CitySeq );
const Region = new Table( RegionSeq );
const Business = new Table( BusinessSeq );
const BusinessType = new Table( BusinessTypeSeq );
const Article = new Table( ArticleSeq );


//................
export  {
db,
User,
City,
Region,
Business,
BusinessType,
Article
}

