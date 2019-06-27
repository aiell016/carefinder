<template>
    <div class="about">
        <h1>Projects</h1>

        <div class="centercontent">
            <h4>On The Radar</h4>
        </div>

        <div>
            <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;On The Radar is an academic planning application that helps students. 
                It  is a web-based application using  a MEVN stack (MongoDB Express.js VueJS Node.js.)  
                The app is being developed to be used by students, advisors, and department administrators.  
                Students must meet certain requirements within their general education courses in order to 
                complete their general education requirements for their major or program. The app will help 
                guide which course combinations meet those requirements by using an interactive radar graph.  
            </p>
            <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The next team to take over this project rewrote the app using Angular.
            </p>




                <div class="floatright">
                    <img  class="scale-down" src="../assets/otr3.png" style="width:500px;height:400px;">
                </div>
                <br />

                <div class="floatleft">
                    <img  class="scale-down" src="../assets/otr1.png" style="width:500px;height:400px;">
                </div>
                <br />

                <div class="floatnone">
                    <img  class="scale-down" src="../assets/otr2.png" style="width:300px;height:400px;">
                </div>
                <br />

                <div class="floatnone">
                    <img  class="scale-down" src="../assets/otrss.png" style="width:800px;height:400px;">
                </div>
                <br /> 
        </div>
        <br />
        <br />


        <div class="centercontent">
            <h4>Project Volga</h4>
        </div>
        <br />
        <br />





    </div>
</template>

<style scoped>

.centercontent {
    display: flex;
    justify-content: center;
    
}

p {
    text-align: left;
}

.image {
    height:400px;
    width:400px;
    object-fit:scale-down;

}

.left {
    display: flex;
    text-align: left;
}

.floatright {
    float: right;
    object-fit: fill;
}


.floatleft {
    float: left;
}


.floatnone {
    float: none;
}


.fill {object-fit: fill;}
.contain {object-fit: contain;}
.cover {object-fit: cover;}
.scale-down {object-fit: scale-down;}
.none {object-fit: none;}


</style>

