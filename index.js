const express = require("express");

const app = express();

app.set('view engine','ejs');
app.use(express.static("public"));

app.get("/", (req, res) => {
let content = [
      {name: 'C Language', img: '/images/c.png', alt: "C Logo", url: '/c'},
      {name: 'C++', img: '/images/cpp.png', alt: "C++ Logo", url: '/cpp'},
      {name: 'Python', img: '/images/python.png', alt: "Python Logo", url: '/py'},
      {name: 'Java', img: '/images/java.png', alt: "Java Logo", url: '/java'},
      {name: 'Ruby', img: '/images/ruby.png', alt: "Ruby Logo", url: '/rb'},
      {name: 'HTML', img: '/images/html.png', alt: "HTML Logo", url: '/html'},
      {name: 'CSS', img: '/images/css.png', alt: "CSS Logo", url: '/css'},
      {name: 'JavaScript', img: '/images/javascript.png', alt: "JavaScript Logo", url: '/js'},
      {name: 'PHP', img: '/images/php.png', alt: "PHP Logo", url: '/php'},
      {name: 'Bash', img: '/images/bash.png', alt: "Bash Logo", url: '/sh'},
      {name: 'Go', img: '/images/go.png', alt: "Go Lang Logo", url: '/go'},
];

  res.render('home',{
    title: 'Quick Guides',
    brand: 'Quick Guides',
    stylesheet: '/css/home.css',
    navMenu: [
      {name:'Home',link:'/',active:true},
      {name:'About',link:'/about',active:false},
      {name:'Contact',link:'/contact',active:false},
    ],
    content: content,
  });
});

app.get("/c", (req, res) => {
  res.render('c',{
    title: 'C - Quick Guide',
    stylesheet: '/css/c_style.css',
  });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is Running !");
});
