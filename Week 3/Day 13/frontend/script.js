fetch('http://localhost:3000/home')
.then((res)=>res.json())
.then((data)=>console.log(data.products))
.catch((err)=>console.log(err, 'this is error'))