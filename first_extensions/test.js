$('#btn').click(function(){
    $.ajax({
        url: "http://20.80.46.248:5000/watch?v=hC5nETdPFEw&ab_channel=郭董懂不懂",
        type: "GET",
        success: function(data){
            alert(data)
        }
    })
})