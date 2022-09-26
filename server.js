@@ -17,12 +17,12 @@ const bodyparser = require('body-parser');
//Aseta määritykset express-palvelimelle
//Ota käyttöön public-tiedosto
app.use(express.static('public'));
    //Ota käyttöön bodyparser
 app.use(bodyparser.urlencoded({extended:false}));
//Ota käyttöön bodyparser
app.use(bodyparser.urlencoded({extended:false}));

//Muodostetaan tietokantayhteys
// Luo vakio connectionstringille
<<<<<<< HEAD
const uri = 'mongodb+srv://demokko:RAYTYfNnSu8rfuHo@cluster0.sotfj2v.mongodb.net/bookDb?retryWrites=true&w=majority'
=======

const uri = 'mongodb+srv://@cluster0.sotfj2v.mongodb.net/bookDb?retryWrites=true&w=majority'
>>>>>>> fd1d27f0a3b01e5f44701fcf286456275f92ecb2

// Muodostetaan yhteys tietokantaan
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser:true})
