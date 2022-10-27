const db = require("../database/db");
var  Categories  = require("./../entities/Categories");

var categoryData = db.datasource.getRepository(Categories);


var Category = function(category)
{
    this.id = category.id;
    this.parentId = category.parentId;
    this.catname = category.catname;
}

Category.chkCategory = async(parentId,catname)=>{
    try{
        const cat = await categoryData.findOne({where:{parentId:parentId,catname:catname}});
        return cat;
    }catch(err){
        return err;
    }
   
}
Category.addCategory = async (data)=>{
    try{
        const cat = await categoryData.save(data);
        return cat;
    }catch(err){
        return err;
    }
    
}

async function recursive(id) {
    var cat = await categoryData.find({where:{parentId:id}});

    for(var i=0;i < cat.length;i++)
    {
        cat[i].subcategory = await recursive(cat[i].id);
    }
    return cat;
}


Category.allCategory = async(page = 1,take = 2) =>{
    try{
        var skip = (page - 1) * take;
        const [cat,count] = await categoryData.findAndCount({where:{parentId:0},take:take,skip:skip});
        
        await Promise.all(cat.map(async cat=>{
            var a = await recursive(cat.id);
            cat['subcategory'] = a;
        }));
        const lastpage1 = count/take;
        const lastPage = lastpage1.toFixed(0);
        return {cat,count,lastPage};
    }
    catch(err){
        return err;
    }
}

module.exports = Category;