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
const uri = 'mongodb+srv://demokko:rQzVIcmTCeKg46k9@cluster0.sotfj2v.mongodb.net/bookDb?retryWrites=true&w=majority'
const uri = 'mongodb+srv://demokko:XC9W0iI5IXSslY10@cluster0.sotfj2v.mongodb.net/bookDb?retryWrites=true&w=majority'
// Muodostetaan yhteys tietokantaan
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser:true})

@@ -33,6 +33,18 @@ db.once('open', function() {
    console.log('Tietokantayhteys avattu');
})

// Kirjoita get-funktio, req.query toimii nyt
app.get('/books', function(req,res) {
     // Hae kirjat tietokannasta
    book.find(req.query, function( err, result) { //tyhjät {} hakuehdossa tuo kaikki, req.query rajaa hakua
        if (err) {
            res.send(err)
        } else {
            res.send(result);
        }
    })
    })


//Laitetaan palvelin kuuntelemaan porttia 8080
const server = app.listen(8080, function(){});