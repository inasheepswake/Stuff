

function createSceneTuto(engine) {
    var scene = new BABYLON.Scene(engine);
	var camera = new BABYLON.TouchCamera("TouchCamera", new BABYLON.Vector3(-.2, .2, -80 ), scene);
	
	var light0 = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(1, 10, 1), scene);
light0.diffuse = new BABYLON.Color3(1, 0, 0);
light0.specular = new BABYLON.Color3(1, 1, 1);
	 
    //Creation of spheres
    var sphere = BABYLON.Mesh.CreateSphere("Sphere", 100, 1, scene);
    var ground = BABYLON.Mesh.CreatePlane("Plane", 0, scene);
    
	var skybox = BABYLON.Mesh.CreateSphere("skyBox", 100, 1000, scene);
	var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	skyboxMaterial.backFaceCulling = false;
	skybox.material = skyboxMaterial;

    //Positioning the meshes
    sphere.position.z = -0;
    sphere.position.y = -3;
    
    var materialSphere = new BABYLON.StandardMaterial("texture1", scene);
    var materialGround = new BABYLON.StandardMaterial("texture2", scene);
    
    sphere.material = materialSphere;

	sphere.rotation.x = Math.PI/7;
	 
	     
    materialSphere.diffuseTexture = new BABYLON.Texture("img/cat.jpg", scene);
    materialGround.diffuseTexture = new BABYLON.Texture("img/flower.jpg", scene);
    
    materialSphere.alpha = 0;
    
    
    
    materialSphere.diffuseTexture.uScale = 10;
	materialSphere.diffuseTexture.vScale = 10;
    
    materialSphere.diffuseTexture.hasAlpha = false;
    materialSphere.backFaceCulling = true;
    
    materialSphere.wireframe = false;
    







var animation = new BABYLON.Animation(
"tutoAnimation",
"position.x",
100,
BABYLON.Animation.ANIMATIONTYPE_FLOAT,
BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    // An array with all animation keys
var keys = [];  

	keys.push({ frame: 0, value: 800 });
	keys.push({ frame: 10, value: -3 });
	keys.push({ frame: 20, value: 30 });
	keys.push({ frame: 30, value: -9 });
	keys.push({ frame: 40, value: 12 });
	keys.push({ frame: 50, value: -65 });
	keys.push({ frame: 60, value: 42 });
	keys.push({ frame: 70, value: -9 });
	keys.push({ frame: 80, value: 20 });
	keys.push({ frame: 90, value: -3 });
	keys.push({ frame: 100, value: 5 });

animation.setKeys(keys);


sphere.animations.push(animation);


    
    
    
var animation2 = new BABYLON.Animation(
"tutoAnimation2",
"position.y",
100,
BABYLON.Animation.ANIMATIONTYPE_FLOAT,
BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    // An array with all animation keys
var keys = [];  

	keys.push({ frame: 0, value: 800 });
	keys.push({ frame: 5, value: -3 });
	keys.push({ frame: 15, value: 30 });
	keys.push({ frame: 25, value: -9 });
	keys.push({ frame: 35, value: 12 });
	keys.push({ frame: 45, value: -65 });
	keys.push({ frame: 55, value: 42 });
	keys.push({ frame: 65, value: -9 });
	keys.push({ frame: 75, value: 20 });
	keys.push({ frame: 85, value: -3 });
	keys.push({ frame: 95, value: 5 });

animation2.setKeys(keys);


sphere.animations.push(animation2);



var animation3 = new BABYLON.Animation(
"tutoAnimation3",
"position.z",
10,
BABYLON.Animation.ANIMATIONTYPE_FLOAT,
BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    // An array with all animation keys
var keys = [];  

	keys.push({ frame: 0, value: 10 });
	keys.push({ frame: 52, value: 1000 });
	keys.push({ frame: 92, value: 0 });

animation3.setKeys(keys);


sphere.animations.push(animation3);

scene.beginAnimation(sphere, 0, 100, true);

    
  
    
    
    
    
   

scene.gravity = new BABYLON.Vector3(0, 0, 0);
camera.applyGravity = false; 
//Set the ellipsoid around the camera (e.g. your player's size)
camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);

// Enable Collisions
scene.collisionsEnabled = true;

sphere.checkCollisions = true;
ground.checkCollisions = true;




var particleClckwise00 = new BABYLON.ParticleSystem("particles", 2000, scene);
particleClckwise00.particleTexture = new BABYLON.Texture("img/clckwise.png", scene);
particleClckwise00.minAngularSpeed = -2;
particleClckwise00.maxAngularSpeed = 2;
particleClckwise00.minSize = .1;
particleClckwise00.maxSize = .5;
particleClckwise00.minLifeTime = 1;
particleClckwise00.maxLifeTime = 360;
particleClckwise00.minEmitPower = .0000001;
particleClckwise00.maxEmitPower = .01;
particleClckwise00.emitter = new BABYLON.Vector3(0, 0, 0);
particleClckwise00.emitRate = 500000000;
particleClckwise00.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
particleClckwise00.minEmitBox = new BABYLON.Vector3(0, 0, 0);
particleClckwise00.maxEmitBox = new BABYLON.Vector3(0, 0, 0);
particleClckwise00.direction1 = sphere.position;
particleClckwise00.direction2 = camera.position;
particleClckwise00.color1 = new BABYLON.Color4(1, .1, .6, .1);
particleClckwise00.color2 = new BABYLON.Color4(1, 1, .1, .1);
particleClckwise00.gravity = scene.gravity;
particleClckwise00.disposeOnStop = false;
particleClckwise00.targetStopDuration = 0;
particleClckwise00.start();

var particleClckwise01 = new BABYLON.ParticleSystem("particles", 2000, scene);
particleClckwise01.particleTexture = new BABYLON.Texture("img/clckwise.png", scene);
particleClckwise01.minAngularSpeed = -2;
particleClckwise01.maxAngularSpeed = 2;
particleClckwise01.minSize = .1;
particleClckwise01.maxSize = .5;
particleClckwise01.minLifeTime = 1;
particleClckwise01.maxLifeTime = 360;
particleClckwise01.minEmitPower = -.0000001;
particleClckwise01.maxEmitPower = -.01;
particleClckwise01.emitter = new BABYLON.Vector3(0, 0, 0);
particleClckwise01.emitRate = 500000000;
particleClckwise01.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
particleClckwise01.minEmitBox = new BABYLON.Vector3(0, 0, 0);
particleClckwise01.maxEmitBox = new BABYLON.Vector3(0, 0, 0);
particleClckwise01.direction1 = sphere.position;
particleClckwise01.direction2 = camera.position;
particleClckwise01.color1 = new BABYLON.Color4(1, .1, .6, .1);
particleClckwise01.color2 = new BABYLON.Color4(1, 1, .1, .1);
particleClckwise01.gravity = scene.gravity;
particleClckwise01.disposeOnStop = false;
particleClckwise01.targetStopDuration = 0;
particleClckwise01.start();


var particleClckwise1 = new BABYLON.ParticleSystem("particles", 800, scene);
particleClckwise1.particleTexture = new BABYLON.Texture("img/clckwise.png", scene);
particleClckwise1.minAngularSpeed = -2;
particleClckwise1.maxAngularSpeed = 2;
particleClckwise1.minSize = .1;
particleClckwise1.maxSize = .5;
particleClckwise1.minLifeTime = 1;
particleClckwise1.maxLifeTime = 200;
particleClckwise1.minEmitPower = 1;
particleClckwise1.maxEmitPower = 1;
particleClckwise1.emitter = new BABYLON.Vector3(0, 0, 0);
particleClckwise1.emitRate = 500000000;
particleClckwise1.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
particleClckwise1.minEmitBox = new BABYLON.Vector3(0, 0, 0);
particleClckwise1.maxEmitBox = new BABYLON.Vector3(0, 0, 0);
particleClckwise1.direction1 = new BABYLON.Vector3(3, -3, -3);
particleClckwise1.direction2 = new BABYLON.Vector3(3, 3, 3);
particleClckwise1.color1 = new BABYLON.Color4(1, .1, .6, .1);
particleClckwise1.color2 = new BABYLON.Color4(1, 1, .1, .1);
particleClckwise1.gravity = scene.gravity;
particleClckwise1.disposeOnStop = false;
particleClckwise1.targetStopDuration = 3;
particleClckwise1.start();

var particleClckwise2 = new BABYLON.ParticleSystem("particles", 800, scene);
particleClckwise2.particleTexture = new BABYLON.Texture("img/clckwise.png", scene);
particleClckwise2.minAngularSpeed = -2;
particleClckwise2.maxAngularSpeed = 2;
particleClckwise2.minSize = .1;
particleClckwise2.maxSize = .5;
particleClckwise2.minLifeTime = 1;
particleClckwise2.maxLifeTime = 200;
particleClckwise2.minEmitPower = 1;
particleClckwise2.maxEmitPower = 1;
particleClckwise2.emitter = new BABYLON.Vector3(0, 0, 0);
particleClckwise2.emitRate = 500000000;
particleClckwise2.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
particleClckwise2.minEmitBox = new BABYLON.Vector3(0, 0, 0);
particleClckwise2.maxEmitBox = new BABYLON.Vector3(0, 0, 0);
particleClckwise2.direction1 = new BABYLON.Vector3(-3, -3, -3);
particleClckwise2.direction2 = new BABYLON.Vector3(-3, 3, 3);
particleClckwise2.color1 = new BABYLON.Color4(1, .1, .6, .1);
particleClckwise2.color2 = new BABYLON.Color4(1, 1, .1, .1);
particleClckwise2.gravity = scene.gravity;
particleClckwise2.disposeOnStop = false;
particleClckwise2.targetStopDuration = 3;
particleClckwise2.start();

var particleClckwise3 = new BABYLON.ParticleSystem("particles", 800, scene);
particleClckwise3.particleTexture = new BABYLON.Texture("img/clckwise.png", scene);
particleClckwise3.minAngularSpeed = -2;
particleClckwise3.maxAngularSpeed = 2;
particleClckwise3.minSize = .1;
particleClckwise3.maxSize = .5;
particleClckwise3.minLifeTime = 1;
particleClckwise3.maxLifeTime = 200;
particleClckwise3.minEmitPower = 1;
particleClckwise3.maxEmitPower = 1;
particleClckwise3.emitter = new BABYLON.Vector3(0, 0, 0);
particleClckwise3.emitRate = 500000000;
particleClckwise3.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
particleClckwise3.minEmitBox = new BABYLON.Vector3(0, 0, 0);
particleClckwise3.maxEmitBox = new BABYLON.Vector3(0, 0, 0);
particleClckwise3.direction1 = new BABYLON.Vector3(-3, 3, -3);
particleClckwise3.direction2 = new BABYLON.Vector3(3, 3, 3);
particleClckwise3.color1 = new BABYLON.Color4(1, .1, .6, .1);
particleClckwise3.color2 = new BABYLON.Color4(1, 1, .1, .1);
particleClckwise3.gravity = scene.gravity;
particleClckwise3.disposeOnStop = false;
particleClckwise3.targetStopDuration = 3;
particleClckwise3.start();

var particleClckwise4 = new BABYLON.ParticleSystem("particles", 800, scene);
particleClckwise4.particleTexture = new BABYLON.Texture("img/clckwise.png", scene);
particleClckwise4.minAngularSpeed = -2;
particleClckwise4.maxAngularSpeed = 2;
particleClckwise4.minSize = .1;
particleClckwise4.maxSize = .5;
particleClckwise4.minLifeTime = 1;
particleClckwise4.maxLifeTime = 200;
particleClckwise4.minEmitPower = 1;
particleClckwise4.maxEmitPower = 1;
particleClckwise4.emitter = new BABYLON.Vector3(0, 0, 0);
particleClckwise4.emitRate = 500000000;
particleClckwise4.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
particleClckwise4.minEmitBox = new BABYLON.Vector3(0, 0, 0);
particleClckwise4.maxEmitBox = new BABYLON.Vector3(0, 0, 0);
particleClckwise4.direction1 = new BABYLON.Vector3(-3, -3, -3);
particleClckwise4.direction2 = new BABYLON.Vector3(3, -3, 3);
particleClckwise4.color1 = new BABYLON.Color4(1, .1, .6, .1);
particleClckwise4.color2 = new BABYLON.Color4(1, 1, .1, .1);
particleClckwise4.gravity = scene.gravity;
particleClckwise4.disposeOnStop = false;
particleClckwise4.targetStopDuration = 3;
particleClckwise4.start();


var particleClckwise5 = new BABYLON.ParticleSystem("particles", 800, scene);
particleClckwise5.particleTexture = new BABYLON.Texture("img/clckwise.png", scene);
particleClckwise5.minAngularSpeed = -2;
particleClckwise5.maxAngularSpeed = 2;
particleClckwise5.minSize = .1;
particleClckwise5.maxSize = .5;
particleClckwise5.minLifeTime = 1;
particleClckwise5.maxLifeTime = 200;
particleClckwise5.minEmitPower = 1;
particleClckwise5.maxEmitPower = 1;
particleClckwise5.emitter = new BABYLON.Vector3(0, 0, 0);
particleClckwise5.emitRate = 500000000;
particleClckwise5.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
particleClckwise5.minEmitBox = new BABYLON.Vector3(0, 0, 0);
particleClckwise5.maxEmitBox = new BABYLON.Vector3(0, 0, 0);
particleClckwise5.direction1 = new BABYLON.Vector3(-3, 3, 3);
particleClckwise5.direction2 = new BABYLON.Vector3(3, -3, 3);
particleClckwise5.color1 = new BABYLON.Color4(1, .1, .6, .1);
particleClckwise5.color2 = new BABYLON.Color4(1, 1, .1, .1);
particleClckwise5.gravity = scene.gravity;
particleClckwise5.disposeOnStop = false;
particleClckwise5.targetStopDuration = 3;
particleClckwise5.start();



var particleClckwise6 = new BABYLON.ParticleSystem("particles", 800, scene);
particleClckwise6.particleTexture = new BABYLON.Texture("img/clckwise.png", scene);
particleClckwise6.minAngularSpeed = -2;
particleClckwise6.maxAngularSpeed = 2;
particleClckwise6.minSize = .1;
particleClckwise6.maxSize = .5;
particleClckwise6.minLifeTime = 1;
particleClckwise6.maxLifeTime = 200;
particleClckwise6.minEmitPower = 1;
particleClckwise6.maxEmitPower = 1;
particleClckwise6.emitter = new BABYLON.Vector3(0, 0, 0);
particleClckwise6.emitRate = 500000000;
particleClckwise6.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
particleClckwise6.minEmitBox = new BABYLON.Vector3(0, 0, 0);
particleClckwise6.maxEmitBox = new BABYLON.Vector3(0, 0, 0);
particleClckwise6.direction1 = new BABYLON.Vector3(-3, 3, -3);
particleClckwise6.direction2 = new BABYLON.Vector3(3, -3, -3);
particleClckwise6.color1 = new BABYLON.Color4(1, .1, .6, .1);
particleClckwise6.color2 = new BABYLON.Color4(1, 1, .1, .1);
particleClckwise6.gravity = scene.gravity;
particleClckwise6.disposeOnStop = false;
particleClckwise6.targetStopDuration = 3;
particleClckwise6.start();



scene.fogMode = BABYLON.Scene.FOGMODE_EXP;
scene.fogDensity = 1;
scene.fogColor = new BABYLON.Color3(0, 0, .1);

/*
BABYLON.SceneLoader.ImportMesh("", "output/", "reflect.babylon", scene, function (newMeshes, particleSystems) {
});
*/





    return scene;
}