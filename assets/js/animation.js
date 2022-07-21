import * as THREE from "../tools/three.js";
import {OrbitControls} from "../tools/orbitControls.js";
import {FontLoader} from "../tools/FontLoader.js";
import {TextGeometry} from "../tools/TextGeometry.js";
import {MouseMeshInteraction} from "../tools/three_mmi.js";
        
//Escena para colocar los objetos
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000)

//Camara para visualizar la escena
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight);
camera.position.z = 3;

//El render para cargar la escena
const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

//Objeto cubo
var geometry = new THREE.BoxGeometry(2,2,2, 1, 1, 1);
var material = new THREE.MeshBasicMaterial({color: 0xf82d97, wireframe: true})
var cube = new THREE.Mesh(geometry, material);
var cube1 = new THREE.Mesh((new THREE.BoxGeometry(1.9,1.9,1.9,)), material);
var cube2 = new THREE.Mesh((new THREE.BoxGeometry(1.7,1.7,1.7)), material);
var cube3 = new THREE.Mesh((new THREE.BoxGeometry(1.5,1.5,1.5)), material);
var cube4 = new THREE.Mesh((new THREE.BoxGeometry(1.3,1.3,1.3)), material);
var cube5 = new THREE.Mesh((new THREE.BoxGeometry(1.1,1.1,1.1)), (new THREE.MeshBasicMaterial({color: 0x000, wireframe: true})));
var cube6 = new THREE.Mesh((new THREE.BoxGeometry(.9,.9,.9)), material);
var cube7 = new THREE.Mesh((new THREE.BoxGeometry(.7,.7,.7)), material);
var cube8 = new THREE.Mesh((new THREE.BoxGeometry(.5,.5,.5)), material);
var cube9 = new THREE.Mesh((new THREE.BoxGeometry(.2,.2,.2)), material);
var cube10 = new THREE.Mesh((new THREE.BoxGeometry(.1,.1,.1)), (new THREE.MeshBasicMaterial({color: 0xffffff})));
var tunnel = new THREE.Mesh((new THREE.BoxGeometry(1,1,40, 20,20,100)), (new THREE.MeshBasicMaterial({color: 0x2ef8a0, wireframe: true})))
cube.position.z = 0;
cube.name = "principal";
tunnel.position.y = 38;
tunnel.position.z = -4;
tunnel.rotation.x = Math.PI/2;
tunnel.name = "tunnel";
scene.add(cube, cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9, cube10, tunnel);



const loader = new FontLoader();

var textMesh;
var semantic;
var mediaquery;
var turn;
var animateJs;
var wow;

var color = new THREE.MeshBasicMaterial({color: 0x01c4e7});
var shadow = new THREE.MeshBasicMaterial({color: 0x005c7c});

loader.load('assets/fonts/modera_regular.json', function (font){
    const geometry = new TextGeometry("Bienvenido.",{
        font : font,
        size: .5,
        height: .2,
        curveSegments: 12
    })
    textMesh = new THREE.Mesh(geometry, [ color , shadow ])
    textMesh.position.z = 7;
    textMesh.position.y = -.25;
    textMesh.position.x = 0;
    textMesh.translateY(0.25)
    geometry.center();

    const geometry1 = new TextGeometry("Semantico.",{
        font : font,
        size: .5,
        height: .2,
        curveSegments: 12
    })
    semantic = new THREE.Mesh(geometry1, [ color , shadow ]);
    semantic.position.y = 16,
    semantic.rotation.y = Math.PI;
    semantic.translateY(0.25);
    semantic.name="semantic"
    geometry1.center();

    const geometry2 = new TextGeometry("Mediaqueries.",{
        font : font,
        size: .5,
        height: .2,
        curveSegments: 12
    })
    mediaquery = new THREE.Mesh(geometry2, [ color , shadow ]);
    mediaquery.position.y = 15.5,
    mediaquery.rotation.y = Math.PI;
    mediaquery.translateY(0.25);
    mediaquery.name = "mediaquery"
    geometry2.center();

    const geometry3 = new TextGeometry("Turn.js.",{
        font : font,
        size: .5,
        height: .2,
        curveSegments: 12
    })
    turn = new THREE.Mesh(geometry3, [ color , shadow ]);
    turn.position.y = 15,
    turn.rotation.y = Math.PI;
    turn.translateY(0.25);
    turn.name= "turn"
    geometry3.center();

    const geometry4 = new TextGeometry("Animate.css.",{
        font : font,
        size: .5,
        height: .2,
        curveSegments: 12
    })
    animateJs = new THREE.Mesh(geometry4, [ color , shadow ]);
    animateJs.position.y = 14.5,
    animateJs.rotation.y = Math.PI;
    animateJs.translateY(0.25);
    animateJs.name = "animateJs";
    geometry4.center();

    const geometry5 = new TextGeometry("Wow.Js.",{
        font : font,
        size: .5,
        height: .2,
        curveSegments: 12
    })
    wow = new THREE.Mesh(geometry5, [ color , shadow ]);
    wow.position.y = 14,
    wow.rotation.y = Math.PI;
    wow.translateY(0.25);
    wow.name = "wow";
    geometry5.center();

    scene.add(textMesh, semantic, mediaquery, turn, animateJs ,wow);
})

// Controles para moverse con el mouse

var controls = new OrbitControls(camera, renderer.domElement);  
// controls.minDistance = ;
// controls.maxDistance = ;
controls.enableZoom = false;
controls.enableRotate = false;
controls.enablePan = false;

const mmi = new MouseMeshInteraction(scene, camera);
const lt = gsap.timeline();
			
mmi.addHandler("semantic", "mouseenter", function(mesh){
    gsap.to(semantic.position, {
        duration:1,
        z: -.3
    })
})
mmi.addHandler("semantic", "mouseleave", function(mesh){
    gsap.to(semantic.position, {
        duration:1,
        z: 0
    })
})

mmi.addHandler("semantic", "click", function(mesh){
    lt.to(camera.rotation, {
        duration:4,
        x: -(Math.PI/2)
    })
    lt.to(camera.position, {
        duration: 6,
        y: 60
    })
    setTimeout(function(){
        location.href = "/pages/semantic.html"
    },9000)
})

mmi.addHandler("mediaquery", "mouseenter", function(mesh){
    gsap.to(mediaquery.position, {
        duration:1,
        z: -.3
    })
})
mmi.addHandler("mediaquery", "mouseleave", function(mesh){
    gsap.to(mediaquery.position, {
        duration:1,
        z: 0
    })
})

mmi.addHandler("mediaquery", "click", function(mesh){
    lt.to(camera.rotation, {
        duration:4,
        x: -(Math.PI/2)
    })
    lt.to(camera.position, {
        duration: 6,
        y: 60
    })
    setTimeout(function(){
        location.href = "../../pages/mediaqueries.html"
    },9000)
})

mmi.addHandler("turn", "mouseenter", function(mesh){
    gsap.to(turn.position, {
        duration:1,
        z: -.3
    })
})
mmi.addHandler("turn", "mouseleave", function(mesh){
    gsap.to(turn.position, {
        duration:1,
        z: 0
    })
})

mmi.addHandler("turn", "click", function(mesh){
    lt.to(camera.rotation, {
        duration:4,
        x: -(Math.PI/2)
    })
    lt.to(camera.position, {
        duration: 6,
        y: 60
    })
    setTimeout(function(){
        location.href = "../../pages/turnJs.html"
    },9000)
})

mmi.addHandler("animateJs", "mouseenter", function(mesh){
    gsap.to(animateJs.position, {
        duration:1,
        z: -.3
    })
})
mmi.addHandler("animateJs", "mouseleave", function(mesh){
    gsap.to(animateJs.position, {
        duration:1,
        z: 0
    })
})

mmi.addHandler("animateJs", "click", function(mesh){
    lt.to(camera.rotation, {
        duration:4,
        x: -(Math.PI/2)
    })
    lt.to(camera.position, {
        duration: 6,
        y: 60
    })
    setTimeout(function(){
        location.href = "../../pages/animateCSS.html"
    },9000)
})


mmi.addHandler("wow", "mouseenter", function(mesh){
    gsap.to(wow.position, {
        duration:1,
        z: -.3
    })
})
mmi.addHandler("wow", "mouseleave", function(mesh){
    gsap.to(wow.position, {
        duration:1,
        z: 0
    })
})

mmi.addHandler("wow", "click", function(mesh){
    lt.to(camera.rotation, {
        duration:4,
        x: -(Math.PI/2)
    })
    lt.to(camera.position, {
        duration: 6,
        y: 60
    })
    setTimeout(function(){
        location.href = "../../pages/wowJs.html"
    },9000)
})

//Funcion que se llama a si misma para actualizar la escena
function animate(){
    requestAnimationFrame(animate);
    scene.traverse(function (object){
        if(object.isMesh === true){
            if(object.name === "tunnel" || object.geometry.type === "TextGeometry"){
                
            } else {
                object.rotation.x += 0.01;
                object.rotation.z += 0.01;
            }
        }
    })
    mmi.update();
    renderer.render(scene, camera);
}

//Funcion para ajustar la escena a la pantalla cuando cambie
function redimensionar(){
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
    renderer.render(scene, camera);
}

function start(){
    let lt = gsap.timeline();
    lt.to(camera.position, {
        duration: 3,
        z: 10,
    })

    lt.to(textMesh.position, {
        duration: 2,
        z: 11,
    },">2")

    lt.to(camera.position, {
        z: -4,
        duration: 3
    })

    lt.to(textMesh.position, {
        y: -1000,
        duration: .1
    })

    lt.to(camera.rotation, {
        y: Math.PI,
        duration: 2
    })

    lt.to(camera.position, {
        y: 15,
        duration: 3
    }, ">2")

}

window.addEventListener("load", ()=>{
    setTimeout(()=>{
        start()
    },2000)
})

//Llamo a las funciones anteriores
window.addEventListener("resize", redimensionar);

animate();


				