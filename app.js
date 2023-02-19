let form=document.getElementById('myForm')
let btn=document.getElementById('submit')
let prodName=document.getElementById('name')
let prodPrice=document.getElementById('price')
let prodDesc=document.getElementById('desc')
let prodCategory=document.getElementById('category')
let prodQty=document.getElementById('qty')
let tbody=document.getElementById('tbody')



// const reloadPage = () => {
//     location.reload();
//   };
  
  
  
  
  
  
// let testdata=JSON.parse(localStorage.getItem('products'))
// console.log(testdata)
// localStorage.clear()

// let arr=localStorage.getItem('products');
// console.log(JSON.parse(arr))

const fetchData=()=>{
    // let product= JSON.parse(localStorage.getItem('products'))
    let product=localStorage.getItem('products')
    let products=JSON.parse(product)
    console.log(products)
    if(Array.isArray(products)){
        let text="";
         products.map((val,idx)=>{
                text=`<tr class="">
                <td scope="row">${idx+1}</td>
                <td>${val.name}</td>
                <td>${val.price}</td>
                <td>${val.desc}</td>
                <td>${val.qty}</td>
                <td>${val.category}</td>
                <td>
                <button class='btn btn-primary' onClick="">Alter</button>
                <button class='btn btn-warning' onclick="deleteElement(${idx+1})">Delete</button>
                
                
                </td>
                </tr>
                
                `
            })
            tbody.innerHTML+=text;
    }
    
    

    // console.log(products)
    // if(products!=null){
    //     
    // }
}


// new approach 

document.onload=fetchData()
// let newProd=[]

form.addEventListener('submit',(e)=>{
    // e.preventDefault();
    
    let name=prodName.value 
    let price=prodPrice.value
    let desc=prodDesc.value
    let category=prodCategory.value
    let qty=prodQty.value

     const data={
    name,
    price,
    desc,
    category,
    qty
 }

 let dtaFromS=JSON.parse(localStorage.getItem('products'));
 console.log(dtaFromS)
 console.log(JSON.stringify([data]))
 
 if(dtaFromS==null){
     localStorage.setItem('products',JSON.stringify([data]) )
 }
 else{
    
    // console.log(dtaFromS.push(data))
    // console.log(JSON.str`ingify(newProd))
    dtaFromS.push(data)
    // let newArr=[...dtaFromS]
    // localStorage.clear()
    // localStorage.clear()
    localStorage.setItem('products',JSON.stringify(dtaFromS))
    // newProd.
    // fetchData()
    // reloadPage()
 }



})




// delete element
let deleteElement=(id)=>{

    

    localStorage.removeItem('products',id)
    // fetchData();
    reloadPage()
}










// let prod=[];
// form.addEventListener('submit',(e)=>{
//     // alert('called')
//     // let newData=[];
//     e.preventDefault();

//     let items=JSON.parse(localStorage.getItem("items")) || [];
//     let name=prodName.value 
//     let price=prodPrice.value
//     let desc=prodDesc.value
//     let category=prodCategory.value
//     let qty=prodQty.value
// // console.log(name,price,desc,category,qty)
//  const data={
//     name,
//     price,
//     desc,
//     category,
//     qty
//  }
// //  items.push(data);
// prod.push(...items,data)
// // console.log(prod)
// console.log(JSON.stringify(prod))

// localStorage.setItem('products',JSON.stringify(data))
// // fetchData()




// });
// // let show=document.getElementById('shw')
// let tbody=document.getElementById('tbody')
// const fetchData=()=>{
//     // // alert('mai hooo')
//     let data =localStorage.getItem('products');
//     // let data = localStorage.getItem("products") ;
//     let products=JSON.parse(data)
//     console.log(data)

    
//     products.map((val,idx)=>{
//         let text="";
//         text=`<tr class="">
//         <td scope="row">${idx+1}</td>
//         <td>${val.name}</td>
//         <td>${val.price}</td>
//         <td>${val.desc}</td>
//         <td>${val.qty}</td>
//         <td>${val.category}</td>
//         </tr>
        
//         `
//         tbody.innerHTML+=text;
//     })
// }

// fetchData()


// if(testdata){
//     fetchData()
// }
// else{
//     console.error('no data ')
// }