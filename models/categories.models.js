const db = require("./../database/db");
const Categories = require("./../entities/Categories");

const categoryData = db.dataSource.getRepository(Categories);

var Category = function(category)
{
    this.id = category.id;
    this.parentId = category.parentId;
    this.catname = category.catname;
}

Category.chkCategory = async(parentId,catname)=>{
    const cat = await categoryData.findOne({where:{parentId:parentId,catname:catname}});
    return cat;
}
Category.addCategory = async (data)=>{
    const cat = await categoryData.save(data);
    return cat;
}

async function recursive(id) {
    var cat = await categoryData.find({where:{parentId:id}});

    for(var i=0;i < cat.length;i++)
    {
        cat[i].subcategory = await recursive(cat[i].id);
    }
    console.log(cat);
    return cat;
}


Category.allCategory = async() =>{
    try{
        const cat = await categoryData.find({where:{parentId:0}});
        
        await Promise.all(cat.map(async cat=>{
            var a = await recursive(cat.id);
            cat['subcategory'] = a;
        }));
        return cat;
    }
    catch(err){
        console.log(err);
    }
}
module.exports = Category;