
let photos = document.getElementById('photos');
let nomeIdad= document.getElementById('nomeIdad');
let bioex= document.getElementById('bioex');
var user1 = "imagens/user1.jpg";
var user2 = "imagens/user2.jpg";
var user3 = "imagens/user3.jpg";


function passar(){
    alert('Você passou');
    photos.style.backgroundImage = 'url('+user1+')';
 nomeIdad.innerHTML='<span class="photo-and-age" style="font-weight: bold">Renata <br> 32</span>';
 
 bioex.innerHTML='<span class="photo-bio">Na verdade, estou aqui porque minha família e amigos acham estranho eu continuar aparecendo sozinha em eventos familiares, jantares, chás de bebê e casamentos. Então, você ir em algum evento?</span>'; 
}


function superlike(){
    alert('Super like enviado ao pretendente');
    
    photos.style.backgroundImage = 'url('+user2+')';
    nomeIdad.innerHTML='<span class="photo-and-age" style="font-weight: bold">Roberto <br> 50</span>';

    bioex.innerHTML='<span class="photo-bio">Vamos dar uma volta de lancha? Engraçado e verdadeiro. Precisa de mais?</span>';
    
}


function like(){
    alert('Like enviado ao pretendente');
    photos.style.backgroundImage = 'url('+user3+')';
    nomeIdad.innerHTML='<span class="photo-and-age" style="font-weight: bold">Sérgio <br> 31</span>';
    bioex.innerHTML='<span class="photo-bio">Conquistas notáveis na vida: Sabe cozinhar um miojo incrível. Cantor de banheiro semiprofissional. Nunca esteve na prisão (exceto jogando Monopoly).</span>';
 }





