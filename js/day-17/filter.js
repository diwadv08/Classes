let div=document.querySelector("div");


const table_datas=[
    {
        name:"Hari",
        age:12,
        pwd:"1233$",
        email:"hari@gmail.com"
    },
    {
        name:"Varun",
        age:22,
        pwd:"1233$",
        email:"varun@gmail.com"
    },
    {
        name:"Ashwin",
        age:10,
        pwd:"1233$",
        email:"ashwin@gmail.com"
    },
    {
        name:"Hari",
        age:12,
        pwd:"1233$",
        email:"hari@gmail.com"
    },
    {
        name:"Varun",
        age:22,
        pwd:"1233$",
        email:"varun@gmail.com"
    },
    {
        name:"Ashwin",
        age:10,
        pwd:"1233$",
        email:"ashwin@gmail.com"
    },
    {
        name:"Hari",
        age:12,
        pwd:"1233$",
        email:"hari@gmail.com"
    },
    {
        name:"Varun",
        age:22,
        pwd:"1233$",
        email:"varun@gmail.com"
    },
    {
        name:"Ashwin",
        age:10,
        pwd:"1233$",
        email:"ashwin@gmail.com"
    },
    {
        name:"Hari",
        age:12,
        pwd:"1233$",
        email:"hari@gmail.com"
    },
    {
        name:"Varun",
        age:22,
        pwd:"1233$",
        email:"varun@gmail.com"
    },
    {
        name:"Ashwin",
        age:10,
        pwd:"1233$",
        email:"ashwin@gmail.com"
    },
    {
        name:"Hari",
        age:12,
        pwd:"1233$",
        email:"hari@gmail.com"
    },
    {
        name:"Varun",
        age:22,
        pwd:"1233$",
        email:"varun@gmail.com"
    },
    {
        name:"Ashwin",
        age:10,
        pwd:"1233$",
        email:"ashwin@gmail.com"
    },
    {
        name:"Hari",
        age:12,
        pwd:"1233$",
        email:"hari@gmail.com"
    },
    {
        name:"Varun",
        age:22,
        pwd:"1233$",
        email:"varun@gmail.com"
    },
    {
        name:"Ashwin",
        age:10,
        pwd:"1233$",
        email:"ashwin@gmail.com"
    },

    
];


let table_headings=Object.keys(table_datas[0]);
table_headings.unshift('id');
let main_table="<table cellpadding='10' border='1'><tr>";
table_headings.map((e)=>{
    main_table+=`<th>${e}</th>`
})
let num=1;
main_table+="</tr>";
table_datas.map((e)=>{
   main_table+=
   `<tr>
        <td>${num++}.</td>
        <td>${e.name}</td>
        <td>${e.age}</td>
        <td>${e.pwd}</td>
        <td>${e.email}</td>
    </tr>`
    
})



div.innerHTML=main_table;


