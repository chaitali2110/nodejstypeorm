const db = require("./../database/db");
const  Products  = require("./../entities/Products");
const  Categories  = require("./../entities/Categories");
const { In } = require("typeorm");


var productData = db.datasource.getRepository(Products);
var categoryData = db.datasource.getRepository(Categories);


var Product = function(product)
{
    this.name = product.name;
    this.price = product.price;
    this.categoryId = product.categoryId;
    this.image = product.image;
}

Product.addProduct = async(data) =>{
    try{
        const pro = await productData.save(data);
        return pro;
    }catch(err){
        return err;
    }
}

Product.chkProduct = async(name,caregoryId)=>{
    try{
        const pro = await productData.findOne({where:{name:name,categoryId:caregoryId}});
        return pro;
    }catch(err){
        return err;
    }
}


Product.allProduct = async(page = 1,take = 2)=>{
    try{
        var skip = (page - 1) * take;

        const [pro,count] = await productData.findAndCount({relations: ['categoryinfo'],take:take,skip: skip});
        const lastpage1 = count/take;
        const lastPage = lastpage1.toFixed(0);
        return {pro,count,lastPage};
    }catch(err){
        return err;
    }
   
}

Product.updateData = async(id,data)=>{
    try{
        const product = await productData.findOne({where: { id: id}});
        productData.merge(product, data);
        const result = await productData.save(productData.merge(product, data));
        return result;
    }catch(err){
        return err;
    }   
}

Product.deleteData = async(id) =>{
    try{
        const product = await productData.delete({id});
        return product;
    }catch(err){
        return err;
    }
}

async function getId(id,cat=[]) {
    var a = await categoryData.find({where:{parentId:id}});

    for(var i=0;i < a.length;i++)
    {
        cat.push(a[i].id);
        await getId(a[i].id,cat);
    }
    return cat;
}

Product.getCatProduct = async(id)=>{
   try{
    var catids = [];
    catids.push(id);
    var ids = await getId(id,catids);

    var product = await productData.find({where:{categoryId:In([ids])}});

    return product;
   }catch(err){
    return err;
   }
    

}
module.exports = Product;