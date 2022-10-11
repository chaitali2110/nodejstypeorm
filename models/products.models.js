const db = require("./../database/db");
const Products = require("./../entities/Products");

var productData = db.dataSource.getRepository(Products);

var Product = function(product)
{
    this.name = product.name;
    this.price = product.price;
    this.categoryId = product.categoryId;
}

Product.addProduct = async(data) =>{
    const pro = await productData.save(data);
    return pro;
}

Product.chkProduct = async(name,caregoryId)=>{
    const pro = await productData.findOne({where:{name:name,categoryId:caregoryId}});
    return pro;
}


Product.allProduct = async()=>{
    const pro = await productData.find({relations: ['categoryinfo']});
    return pro;
}

Product.updateData = async(id,data)=>{
    const product = await productData.findOne({where: { id: id}});
    productData.merge(product, data);
    const result = await productData.save(productData.merge(product, data));
    return result;
}

Product.deleteData = async(id) =>{
    const chkid = await productData.findOne({where:{id:id}});
    if(chkid)
    {
        const product = await productData.delete({id});
        return product;
    }
    else
    {
        return "Not Defined";
    }
}

Product.getCatProduct = async(id)=>{
    const product = await productData.find({where:{categoryId:id}});
    return product;
}
module.exports = Product;