const mongoose =require("mongoose")


const DB_NAME="ecom-animverse"


mongoose.connect(`mongodb+srv://abyrdakhlaoui:SaV6Zvr51BrzNCla@cluster0.c723amg.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
.then(() =>{console.log(`🟢 database started !`)})
.catch(() =>{ console.log(`🔴 error connexion to database !`) })
