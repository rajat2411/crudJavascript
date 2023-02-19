let form=document.getElementById('myForm')
let btn=document.getElementById('submit')
let prodName=document.getElementById('name')
let prodPrice=document.getElementById('price')
let prodDesc=document.getElementById('desc')
let prodCategory=document.getElementById('category')
let prodQty=document.getElementById('qty')
let tbody=document.getElementById('tbody')



const fetchData=()=>{
    var products;
    if(localStorage.getItem('products')==null){
        products=[]
    }
    else{
        products=JSON.parse(localStorage.getItem('products'))

    }
    var text='';
    // console.log(products)
    products.forEach((val,idx)=>{
        text+="<tr>"
        text+="<td>"+(idx+1)+"</td>"
        text+="<td>"+val.name+"</td>"
        text+="<td>"+val.price+"</td>"
        text+="<td>"+val.desc+"</td>"
        text+="<td>"+val.qty+"</td>"
        text+="<td>"+val.category+"</td>"
        text+=`<td><button onclick=deleteElement("${val.name}") class="btn btn-danger">delete<button> </td>`

        text+="</tr>"



        // text+=`<tr class="">
        //         <td scope="row">${idx+1}</td>
        //         <td>${val.name}</td>
        //         <td>${val.price}</td>
        //         <td>${val.desc}</td>
        //         <td>${val.qty}</td>
        //         <td>${val.category}</td>
        //         <td>
        //         <button class='btn btn-primary' onClick="">Alter</button>
        //         <button class='btn btn-warning' onclick="deleteElement(${idx+1})">Delete</button>
                
                
        //         </td>
        //         </tr>
                
        //         `
            })
            tbody.innerHTML=text;
            // console.log(text)
}

document.onload=fetchData()


// add data

form.addEventListener('submit',(e)=>{
    e.preventDefault()
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

 var products;

 if(localStorage.getItem('products')==null){
    products=[]
 }
 else{
    products=JSON.parse(localStorage.getItem('products'))
 }
 products.push(data)
//  console.log(products)

 localStorage.setItem('products',JSON.stringify(products))
 
 fetchData()

 prodName.value=" "
 prodPrice.value=" "
 prodDesc.value=" "

// name=" ";
// price=" "
// desc=" "
// category=" "
// qty=" "


})




//  dont use localtorage.remove ,, it is always good to use the below method
// alert('delete krduga')

// fetc hData()



const deleteElement=(name)=>{
//  var products;
// //  if(localStorage.getItem('products')==null){
// //     products=[];
// //  }
// //  else{
//     let product=localStorage.getItem('products')
//     products=JSON.parse(product)

// //  }

//  products.splice(id,1);
//  console.log(products)
//  localStorage.setItem('products',JSON.stringify(products))
// clhcl

console.log(typeof(name))
alert(name)
localStorage.removeItem('products',name);
 
//  fetchData()

}


// issue in delete