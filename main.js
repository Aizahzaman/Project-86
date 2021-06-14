var canvas=new fabric.Canvas("myCanvas");
 player_x=10;
 player_y=10;

 block_w=30;
 block_h=30;

 player_img="";
 block_img="";

 function showgroot(){
     fabric.Image.fromURL("https://static.wikia.nocookie.net/p__/images/f/f6/GOTG2_Baby_Groot.png/revision/latest?cb=20200629020713&path-prefix=protagonist",function(Img){
         player_img=Img;

         player_img.scaleToWidth(150);
         player_img.scaleToHeight(140);
         player_img.set({
             top:player_y,
             left:player_x,
         });
         canvas.add(player_img);
     });
 }

 function showblock(getimg){
    fabric.Image.fromURL(getimg,function(Img){
        block_img=Img;

        block_img.scaleToWidth(block_w);
        block_img.scaleToHeight(block_h);
        block_img.set({
            top:player_y,
            left:player_x,
        });
        canvas.add(block_img);
    });
}