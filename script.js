let texto = "holaa";
function imprimirEnConsola() {
    texto = document.getElementById("textoIngresado").value;
    console.log(texto);
}

class CBinNode{
    constructor(valor){
        this.val = valor;
        this.nodes = [];
    }
}

// bool CBinTree::Find(int x, CBinNode**& p)
// {
//     for ( p = &m_root ;
//          *p && (*p)->value != x ;
//          p = &( (*p)->nodes[ (*p)->value < x ] ) );
//     return *p && (*p)->value == x;
// }

// bool CBinTree::Insert(int x)
// {
//     CBinNode** p;
//     if ( Find(x,p) ) return 0;
//     *p = new CBinNode(x);
//     return 0;
// }

class CBinTree{
    constructor(){
        this.m_root = new CBinNode(8);
    };
    find(valor, p){
        p = this.m_root;
        // console.log("imrpimiendo algo ",p)
        // for (; p != null ; p = p.nodes[valor < p.val] );
        // console.log("imrpimiendo algo ",p)
        return p;
    };
    insert(vlaInsert){
        let pos;
        if(this.find(vlaInsert, pos)){
            return 0;
        }
        console.log("imprimiendo pos: ",pos);
        //pos = new CBinNode(vlaInsert);
        //this.m_root.nodes[0] = new CBinNode(vlaInsert);
        return 1;
    }
    get(){
        //console.log(this.m_root.nodes[0].val)
    }
}

console.log(typeof(texto))
const y = new CBinTree();
y.insert(5);
y.get();
//console.log(y.m_root.nodes[0].val);

function hola(){
    document.getElementById('hola').innerHTML = Date();
    console.log("Imprime hola");
}

function mostrar(){
    document.getElementById('mostrarP').innerHTML = document.getElementById('Html');
}

function Agregar(valor){
    document.getElementById('pantallaResult').value += valor;     
}

function Borrar(){
    document.getElementById('pantallaResult').value = ' ';
}

function Calcular(){
    const resultado = document.getElementById('pantallaResult').value;
    const r = eval(resultado);
    document.getElementById('pantallaResult').value = r;
}











//Cosas por hacer:
//https://monkeytype.com
//https://1938.com.es/neo4j
//https://www.youtube.com/watch?v=8jNPelugC2s
//https://nextjs.org
//https://www.w3schools.com/tags/ref_eventattributes.asp
//
//Entretenimiento:
//https://animeflv.vc/anime/bungou-stray-dogs
//https://animeflv.vc/anime/heion-sedai-no-idatentachi
//
//Super Externo:
//Limpiar Ubuntu
//Desarmar laptop