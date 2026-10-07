const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


camera.position.z = 15;
camera.position.x = 0;
camera.position.y = 0;

scene.background=new THREE.Color(0xfadcf9)


//----------------------------------------------------------------------------------------------------//
// [WALLS] //

// wall - center
const Cgeometry = new THREE.PlaneGeometry( 15, 8 );
const Cmaterial = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
const Cplane = new THREE.Mesh( Cgeometry, Cmaterial );
scene.add( Cplane );

Cplane.position.x = 0
Cplane.position.y = 0
Cplane.position.z = 0

Cplane.rotation.x = 0
Cplane.rotation.y = 0
Cplane.rotation.z = 0

// wall - left
const Lgeometry = new THREE.PlaneGeometry( 35, 20 );
const Lmaterial = new THREE.MeshBasicMaterial( { color: 0xf7b72d, side: THREE.DoubleSide } );
const Lplane = new THREE.Mesh( Lgeometry, Lmaterial );
scene.add( Lplane );

Lplane.position.x = -15
Lplane.position.y = 0
Lplane.position.z = 0

Lplane.rotation.x = 0
Lplane.rotation.y = 1
Lplane.rotation.z = 0

// wall - right
const Rgeometry = new THREE.PlaneGeometry( 35, 20 );
const Rmaterial = new THREE.MeshBasicMaterial( { color: 0xf7b72d, side: THREE.DoubleSide } );
const Rplane = new THREE.Mesh( Rgeometry, Rmaterial );
scene.add( Rplane );

Rplane.position.x = 15
Rplane.position.y = 0
Rplane.position.z = 0

Rplane.rotation.x = 0
Rplane.rotation.y = -1
Rplane.rotation.z = 0

// wall - down
const Dgeometry = new THREE.PlaneGeometry( 35, 20 );
const Dmaterial = new THREE.MeshBasicMaterial( { color: 0xf7952d, side: THREE.DoubleSide } );
const Dplane = new THREE.Mesh( Dgeometry, Dmaterial );
scene.add( Dplane );

Dplane.position.x = 0
Dplane.position.y = -10
Dplane.position.z = 0

Dplane.rotation.x = -1
Dplane.rotation.y = 0
Dplane.rotation.z = 0

// wall - up
const Ugeometry = new THREE.PlaneGeometry( 35, 20 );
const Umaterial = new THREE.MeshBasicMaterial( { color: 0xfaf7ac, side: THREE.DoubleSide } );
const Uplane = new THREE.Mesh( Ugeometry, Umaterial );
scene.add( Uplane );

Uplane.position.x = 0
Uplane.position.y = 10
Uplane.position.z = 0

Uplane.rotation.x = 1
Uplane.rotation.y = 0
Uplane.rotation.z = 0

//----------------------------------------------------------------------------------------------------//
// [BED] //

// bed part 1
const BP1geometry = new THREE.PlaneGeometry( 3, 5 );
const BP1material = new THREE.MeshBasicMaterial( { color: 0x3c32fa, side: THREE.DoubleSide } );
const BP1plane = new THREE.Mesh( BP1geometry, BP1material );
scene.add( BP1plane );

BP1plane.position.x = -6
BP1plane.position.y = -3
BP1plane.position.z = 4.5

BP1plane.rotation.x = -1.5
BP1plane.rotation.y = 0
BP1plane.rotation.z = -0.3

// bed part 2
const BP2geometry = new THREE.PlaneGeometry( 5, 3 );
const BP2material = new THREE.MeshBasicMaterial( { color: 0x4472f2, side: THREE.DoubleSide } );
const BP2plane = new THREE.Mesh( BP2geometry, BP2material );
scene.add( BP2plane );

BP2plane.position.x = -4.5
BP2plane.position.y = -4.5
BP2plane.position.z = 4.8

BP2plane.rotation.x = 0
BP2plane.rotation.y = 1.23
BP2plane.rotation.z = 0.08

// bed part 3
const BP3geometry = new THREE.PlaneGeometry( 3, 3 );
const BP3material = new THREE.MeshBasicMaterial( { color: 0x739deb, side: THREE.DoubleSide } );
const BP3plane = new THREE.Mesh( BP3geometry, BP3material );
scene.add( BP3plane );

BP3plane.position.x = -6.4
BP3plane.position.y = -4.6
BP3plane.position.z = 7

BP3plane.rotation.x = 0
BP3plane.rotation.y = -0.34
BP3plane.rotation.z = 0.03

// pillow
const PLgeometry = new THREE.PlaneGeometry( 2, 1 );
const PLmaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
const PLplane = new THREE.Mesh( PLgeometry, PLmaterial );
scene.add( PLplane );

PLplane.position.x = -4.6
PLplane.position.y = -2.2
PLplane.position.z = 5

PLplane.rotation.x = -1
PLplane.rotation.y = 0
PLplane.rotation.z = 0

//----------------------------------------------------------------------------------------------------//
// [TABLE] //

// table part 1
const TBLgeometry = new THREE.PlaneGeometry( 3, 4 );
const TBLmaterial = new THREE.MeshBasicMaterial( { color: 0x7d314d, side: THREE.DoubleSide } );
const TBLplane = new THREE.Mesh( TBLgeometry, TBLmaterial );
scene.add( TBLplane );

TBLplane.position.x = 5.3
TBLplane.position.y = -3
TBLplane.position.z = 5

TBLplane.rotation.x = -1.4
TBLplane.rotation.y = 0
TBLplane.rotation.z = 0.3

// table part 2
const TBL2geometry = new THREE.PlaneGeometry( 4, 3 );
const TBL2material = new THREE.MeshBasicMaterial( { color: 0xdb6993, side: THREE.DoubleSide } );
const TBL2plane = new THREE.Mesh( TBL2geometry, TBL2material );
scene.add( TBL2plane );

TBL2plane.position.x = 4.1
TBL2plane.position.y = -4.7
TBL2plane.position.z = 5.2

TBL2plane.rotation.x =  0
TBL2plane.rotation.y = -1.4
TBL2plane.rotation.z = -0.1

// table part 3
const TBL3geometry = new THREE.PlaneGeometry( 3, 3 );
const TBL3material = new THREE.MeshBasicMaterial( { color: 0xed9ab9, side: THREE.DoubleSide } );
const TBL3plane = new THREE.Mesh( TBL3geometry, TBL3material );
scene.add( TBL3plane );

TBL3plane.position.x = 6
TBL3plane.position.y = -4.9
TBL3plane.position.z = 6.4

TBL3plane.rotation.x = 0
TBL3plane.rotation.y = 0.3
TBL3plane.rotation.z = 0

//----------------------------------------------------------------------------------------------------//
// [CHAIR] //

// chair part 1
const CHRgeometry = new THREE.PlaneGeometry( 2, 2 );
const CHRmaterial = new THREE.MeshBasicMaterial( { color: 0x2a7527, side: THREE.DoubleSide } );
const CHRplane = new THREE.Mesh( CHRgeometry, CHRmaterial );
scene.add( CHRplane );

CHRplane.position.x = 2
CHRplane.position.y = -4
CHRplane.position.z = 5

CHRplane.rotation.x = -1
CHRplane.rotation.y = 0
CHRplane.rotation.z = 0

// chair part 2
const CHR2geometry = new THREE.PlaneGeometry( 2, 2 );
const CHR2material = new THREE.MeshBasicMaterial( { color: 0x7bed77, side: THREE.DoubleSide } );
const CHR2plane = new THREE.Mesh( CHR2geometry, CHR2material );
scene.add( CHR2plane );

CHR2plane.position.x = 2.1
CHR2plane.position.y = -5.9
CHR2plane.position.z = 5

CHR2plane.rotation.x = 0
CHR2plane.rotation.y = 0
CHR2plane.rotation.z = 0

//----------------------------------------------------------------------------------------------------//
// [COMPUTER] //

// computer part 1
const CMPTRgeometry = new THREE.PlaneGeometry( 3, 2 );
const CMPTRmaterial = new THREE.MeshBasicMaterial( { color: 0x4d494f, side: THREE.DoubleSide } );
const CMPTRplane = new THREE.Mesh( CMPTRgeometry, CMPTRmaterial );
scene.add( CMPTRplane );

CMPTRplane.position.x = 6
CMPTRplane.position.y = -1
CMPTRplane.position.z = 5

CMPTRplane.rotation.x = 0
CMPTRplane.rotation.y = -1.5
CMPTRplane.rotation.z = 0

// computer part 2
const CMPTR2geometry = new THREE.PlaneGeometry( 0.5, 1 );
const CMPTR2material = new THREE.MeshBasicMaterial( { color: 0x6e6970, side: THREE.DoubleSide } );
const CMPTR2plane = new THREE.Mesh( CMPTR2geometry, CMPTR2material );
scene.add( CMPTR2plane );

CMPTR2plane.position.x = 6.2
CMPTR2plane.position.y = -2.2
CMPTR2plane.position.z = 5

CMPTR2plane.rotation.x = 0
CMPTR2plane.rotation.y = -1
CMPTR2plane.rotation.z = 0

// computer part 3
const CMPTR3geometry = new THREE.PlaneGeometry( 1, 1 );
const CMPTR3material = new THREE.MeshBasicMaterial( { color: 0x4d494f, side: THREE.DoubleSide } );
const CMPTR3plane = new THREE.Mesh( CMPTR3geometry, CMPTR3material );
scene.add( CMPTR3plane );

CMPTR3plane.position.x = 6.2
CMPTR3plane.position.y = -2.7
CMPTR3plane.position.z = 5

CMPTR3plane.rotation.x = -1
CMPTR3plane.rotation.y = -1
CMPTR3plane.rotation.z = 0.5

// computer part 4
const CMPTR4geometry = new THREE.PlaneGeometry( 0.5, 1 );
const CMPTR4material = new THREE.MeshBasicMaterial( { color: 0x4d494f, side: THREE.DoubleSide } );
const CMPTR4plane = new THREE.Mesh( CMPTR4geometry, CMPTR4material );
scene.add( CMPTR4plane );

CMPTR4plane.position.x = 3
CMPTR4plane.position.y = -1.9
CMPTR4plane.position.z = 8.5

CMPTR4plane.rotation.x = -1
CMPTR4plane.rotation.y = 0
CMPTR4plane.rotation.z = .7

// computer part 5
const CMPTR5geometry = new THREE.PlaneGeometry( 2.5, 1.5 );
const CMPTR5material = new THREE.MeshBasicMaterial( { color: 0x6e6970, side: THREE.DoubleSide } );
const CMPTR5plane = new THREE.Mesh( CMPTR5geometry, CMPTR5material );
scene.add( CMPTR5plane );

CMPTR5plane.position.x = 6
CMPTR5plane.position.y = -1
CMPTR5plane.position.z = 5

CMPTR5plane.rotation.x = 0
CMPTR5plane.rotation.y = -1.5
CMPTR5plane.rotation.z = 0

//----------------------------------------------------------------------------------------------------//
// [WINDOW] //

// window part 1
const WNDWgeometry = new THREE.PlaneGeometry( 5, 3 );
const WNDWmaterial = new THREE.MeshBasicMaterial( { color: 0xf27907, side: THREE.DoubleSide } );
const WNDWplane = new THREE.Mesh( WNDWgeometry, WNDWmaterial );
scene.add( WNDWplane );

WNDWplane.position.x = 4
WNDWplane.position.y = 0
WNDWplane.position.z = 1

WNDWplane.rotation.x = 0
WNDWplane.rotation.y = 0
WNDWplane.rotation.z = 0

// window part 2
const WNDW2geometry = new THREE.PlaneGeometry( 4.5, 2.5 );
const WNDW2material = new THREE.MeshBasicMaterial( { color: 0xfaf7c5, side: THREE.DoubleSide } );
const WNDW2plane = new THREE.Mesh( WNDW2geometry, WNDW2material );
scene.add( WNDW2plane );

WNDW2plane.position.x = 4
WNDW2plane.position.y = 0
WNDW2plane.position.z = 1

WNDW2plane.rotation.x = 0
WNDW2plane.rotation.y = 0
WNDW2plane.rotation.z = 0

// window part 3
const WNDW3geometry = new THREE.PlaneGeometry( 0.1, 2.5 );
const WNDW3material = new THREE.MeshBasicMaterial( { color: 0xf27907, side: THREE.DoubleSide } );
const WNDW3plane = new THREE.Mesh( WNDW3geometry, WNDW3material );
scene.add( WNDW3plane );

WNDW3plane.position.x = 4
WNDW3plane.position.y = 0
WNDW3plane.position.z = 1

WNDW3plane.rotation.x = 0
WNDW3plane.rotation.y = 0
WNDW3plane.rotation.z = 0

//----------------------------------------------------------------------------------------------------//
// [DRAWER] //

// drawer part 1
const DRWRgeometry = new THREE.PlaneGeometry( 2.5, 3 );
const DRWRmaterial = new THREE.MeshBasicMaterial( { color: 0x700d91, side: THREE.DoubleSide } );
const DRWRplane = new THREE.Mesh( DRWRgeometry, DRWRmaterial );
scene.add( DRWRplane );

DRWRplane.position.x = 0
DRWRplane.position.y = -3
DRWRplane.position.z = 1

DRWRplane.rotation.x = 0
DRWRplane.rotation.y = 0
DRWRplane.rotation.z = 0

// drawer part 2
const DRWR2geometry = new THREE.PlaneGeometry( 2, 2.5 );
const DRWR2material = new THREE.MeshBasicMaterial( { color: 0xce9ede, side: THREE.DoubleSide } );
const DRWR2plane = new THREE.Mesh( DRWR2geometry, DRWR2material );
scene.add( DRWR2plane );

DRWR2plane.position.x = 0
DRWR2plane.position.y = -3
DRWR2plane.position.z = 1

DRWR2plane.rotation.x = 0
DRWR2plane.rotation.y = 0
DRWR2plane.rotation.z = 0

// drawer part 3
const DRWR3geometry = new THREE.PlaneGeometry( 2, 0.1 );
const DRWR3material = new THREE.MeshBasicMaterial( { color: 0x700d91, side: THREE.DoubleSide } );
const DRWR3plane = new THREE.Mesh( DRWR3geometry, DRWR3material );
scene.add( DRWR3plane );

DRWR3plane.position.x = 0
DRWR3plane.position.y = -3
DRWR3plane.position.z = 1

DRWR3plane.rotation.x = 0
DRWR3plane.rotation.y = 0
DRWR3plane.rotation.z = 0

//----------------------------------------------------------------------------------------------------//
// [CLOSET] //

// closet part 1
const CLSTgeometry = new THREE.PlaneGeometry( 5, 7 );
const CLSTmaterial = new THREE.MeshBasicMaterial( { color: 0x12b57f, side: THREE.DoubleSide } );
const CLSTplane = new THREE.Mesh( CLSTgeometry, CLSTmaterial );
scene.add( CLSTplane );

CLSTplane.position.x = -4
CLSTplane.position.y = -1
CLSTplane.position.z = 1

CLSTplane.rotation.x = 0
CLSTplane.rotation.y = 0
CLSTplane.rotation.z = 0

// closet part 2
const CLST2geometry = new THREE.PlaneGeometry( 4.5, 6.5 );
const CLST2material = new THREE.MeshBasicMaterial( { color: 0x7df5cd, side: THREE.DoubleSide } );
const CLST2plane = new THREE.Mesh( CLST2geometry, CLST2material );
scene.add( CLST2plane );

CLST2plane.position.x = -4
CLST2plane.position.y = -1
CLST2plane.position.z = 1

CLST2plane.rotation.x = 0
CLST2plane.rotation.y = 0
CLST2plane.rotation.z = 0

// closet part 3
const CLST3geometry = new THREE.PlaneGeometry( 0.1, 6.5 );
const CLST3material = new THREE.MeshBasicMaterial( { color: 0x12b57f, side: THREE.DoubleSide } );
const CLST3plane = new THREE.Mesh( CLST3geometry, CLST3material );
scene.add( CLST3plane );

CLST3plane.position.x = -4
CLST3plane.position.y = -1
CLST3plane.position.z = 1

CLST3plane.rotation.x = 0
CLST3plane.rotation.y = 0
CLST3plane.rotation.z = 0

//----------------------------------------------------------------------------------------------------//
// [LAMP] //

// lamp part 1
const LMPgeometry = new THREE.CircleGeometry( 0.75, 32 );
const LMPmaterial = new THREE.MeshBasicMaterial( { color: 0xf71b7e } );
const LMPcircle = new THREE.Mesh( LMPgeometry, LMPmaterial );
scene.add( LMPcircle )

LMPcircle.position.x = 0
LMPcircle.position.y = -1.25
LMPcircle.position.z = 0.9

LMPcircle.rotation.x = 0
LMPcircle.rotation.y = 0
LMPcircle.rotation.z = 0

// lamp part 2
const LMP2geometry = new THREE.PlaneGeometry( 2, 2 );
const LMP2material = new THREE.MeshBasicMaterial( { color: 0xfc9fc9, side: THREE.DoubleSide } );
const LMP2plane = new THREE.Mesh( LMP2geometry, LMP2material );
scene.add( LMP2plane );

LMP2plane.position.x = 0
LMP2plane.position.y = 0
LMP2plane.position.z = 1

LMP2plane.rotation.x = -1
LMP2plane.rotation.y = 0
LMP2plane.rotation.z = 0

//----------------------------------------------------------------------------------------------------//

function animate( time ) {

  renderer.render( scene, camera );

}
renderer.setAnimationLoop( animate );