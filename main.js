$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    });

    $('form').on('submit', function(e){
        e.preventDefault();
        const endereçoImagem = $("#url-img").val();
        const novoItem = $('<li style="display:none;"></li>');
        const divNova = $('<div class="container"></div>');
        $(`<img src="${endereçoImagem}"/>`).appendTo(divNova);
        $(`<div class="imagem-link">
            <a href="${endereçoImagem}" target="_blank" title="Ver imagem em tamanho real">Ver foto em tamanho real</a>
            </div>`).appendTo(divNova);

        $(divNova).appendTo(novoItem);
        
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#url-img').val('');
    })

    $('#cancelar').click(function () {  
        $('form').slideUp();
    })
})