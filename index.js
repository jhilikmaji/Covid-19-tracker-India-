$(document).ready(function(){
    var url="https://data.covid19india.org/data.json"
    $.get(url,function(data){
       
        var totalActive,totalRecovered,totalDeaths,totalConfirmed
        totalActive=data.statewise[0].active
        totalRecovered=data.statewise[0].recovered
        totalDeaths=data.statewise[0].deaths
        totalConfirmed=data.statewise[0].confirmed
        $("#active").html(totalActive)
        $("#recovered").html(totalRecovered)
        $("#deaths").html(totalDeaths)
        $("#confirmed").html(totalConfirmed)

        var state = []
        var confirmed = []
        var recovered = []
        var deaths = []
        $.each(data.statewise,function(id,obj){
            if(id!=0){
                state.push(obj.state)
                confirmed.push(obj.confirmed)
                recovered.push(obj.recovered)
                deaths.push(obj.deaths)
    
            }
          
        })
        
        var myChart=document.getElementById("myChart").getContext("2d")
        var chart= new Chart(myChart,{
            type:'line',
            data:{
                labels:state,
                datasets:[
                    {
                    label:"Confirmed Cases",
                    data:confirmed,
                    backgroundColor:"#ffff66",
                    borderColor:"#ffff66"
                    },
                    {
                        label:"Recovered Cases",
                        data:recovered,
                        backgroundColor:"#9fff80",
                        borderColor:"#9fff80"
                    },
                    {
                        label:"Death Cases",
                        data:deaths,
                        backgroundColor:"#ff8080",
                        borderColor:"#ff8080"
                    },
                ]
            },
            options:{}
        })
    })

})