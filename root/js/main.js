        // set scene camera and renderer
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        
        var renderer = new THREE.WebGLRenderer( );
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
        
        // update viewport on resize
        window.addEventListener( 'resize', function(){
            var width = window.innerWidth;
            var height = window.innerHeight;
            renderer.setSize( width, height );
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        } );
        

        var geometry = new THREE.TetrahedronBufferGeometry( 2, 0 );
        var material = new THREE.MeshPhongMaterial( { color: 0x99192, wireframe: true } );
        var crystal = ( geometry, material );
        
        scene.add( crystal );
                    

      
        camera.position.z = 20;
//        
        function update(){

        }
        

        // draw the scene
        function render(){
            renderer.render( scene, camera );
        }
        
        // run animations
        function animate (){
            requestAnimationFrame( animate );
            
            update();
            render();
        }
        
        animate();