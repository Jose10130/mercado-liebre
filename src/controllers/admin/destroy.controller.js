const { loadData, saveData } = require("../../data");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports=(req,res)=>{
  const { id } = req.params
  const products = loadData()

  const productseliminar = products.filter( p => p.id !== +id)
  saveData (productseliminar)
    res.redirect("/productos")
  }