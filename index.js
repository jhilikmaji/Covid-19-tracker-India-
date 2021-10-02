$(document).ready(function(){
    var url="https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true"
    $.get(url,function(data){
      
       $("#confirmed").html(data.totalCases)
       $("#active").html(data.activeCases)
       $("#recovered").html(data.recovered)
       $("#deaths").html(data.deaths)
    var region=[]
    var activeCases=[]
    var recovered=[]
    var deceased=[]
    
    $.each(data.regionData,function(id,obj){
        region.push(obj.region)
        activeCases.push(obj.totalInfected)
        recovered.push(obj.recovered)
        deceased.push(obj.deceased)
       
    })
    
      
    var myChart=document.getElementById("myChart").getContext("2d")
    var chart= new Chart(myChart,{
        type:'line',
        data:{
            labels:region,
            datasets:[
                {
                label:"Confirmed Cases",
                data:activeCases,
                backgroundColor:"rgb(255, 148, 77)",
                borderColor:"rgb(255, 194, 153)"
                },
                {
                    label:"Recovered Cases",
                    data:recovered,
                    backgroundColor:"#9fff80",
                    borderColor:"#00b33c"
                },
                {
                    label:"Death Cases",
                    data:deceased,
                    backgroundColor:"#ff0000",
                    borderColor:"#ff8080"
                },
            ]
        },
        options:{}
    })
})

                   
})