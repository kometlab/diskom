function closeOk() {
    $('.ok-table').css({"display": "none"});
}

function closePage() {
    $('.create-table').css({"display": "none"});
    $('#name').val('');
    $('#desk').val('');
    $('#image').val('');
    $('#link').val('');
}

function openPage() {
    $('.create-table').css({"display": "block"})
}

function submitForm() {
    if(
        $('#name').val() != null &&
        $('#desk').val() != null &&
        $('#image').val() != null &&
        $('#link').val() != null
    ) {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/",
            data: JSON.stringify({
                icon: $('#image').val(),
                title: $('#name').val(),
                text: $('#desk').val(),
                link: $('#link').val()
            }),
            success: function (data) {
                console.log(data.title);
                console.log(data.link);
            },
            dataType: "json"
        });
        serverlist.append(
            '<div class="server anim">'+
                '<img src="'+$('#image').val()+'" class="server-image">'+
                '<span class="server-title">'+$('#name').val()+'</span><br>'+
                '<p class="server-text">'+$('#desk').val()+'</p><br>'+
                '<a href="'+$('#link').val()+'""><button class="join">Join</button></a>'+
            '</div>'
        )
        $('.ok-table').css({"display": "block"});
        closePage();
    }
}