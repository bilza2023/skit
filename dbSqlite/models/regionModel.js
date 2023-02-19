

export default function getRegion  (db,DataTypes) {

const Region = db.define('regions', 
{
  id : {
    type : DataTypes.INTEGER,
    autoIncrement : true,
    allowNull : false,
    primaryKey : true,
    },
  name : {
    type : DataTypes.STRING,
    allowNull : false,
    },
  description : {
   type : DataTypes.TEXT,
   allowNull : true,
  },
  cityId : {
    type : DataTypes.INTEGER,
    allowNull : false,
  }

});
 
return Region;
}
//------------------------------
// module.exports = getRegion;