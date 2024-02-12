AFRAME.registerComponent('flying-birds', {
    init: function(){

        for (var i = 1; i <= 20; i++) {
            //id
            var id = `bird${i}`;
      
            //position variables     
            var posX =(Math.random() * 3000 + (-1000));      
            var posY = (Math.random() * 2 + (-1));
            var posZ = (Math.random() * 3000 + -1000);
      
            var position = { x: posX, y: posY, z: posZ };
      
            //call the function
            this.flying_birds(id, position);
          }
    },

flying_birds:(id,position)=>{

    terrain = document.querySelector("#terrain")

    var bird_el = document.createElement('a-entity');
    bird_el.setAttribute("scale",{x:500,y:500,z:500});
    bird_el.setAttribute("gltf-model","./assets/models/flying_bird/scene.gltf");
    bird_el.setAttribute("animation-mixer",{});
    bird_el.setAttribute("position",position);
    bird_el.setAttribute("id",id);

    terrain.appendChild(bird_el);

}
})