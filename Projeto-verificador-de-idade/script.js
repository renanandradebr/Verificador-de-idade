function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector("div#res")

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homen'
            if (idade >=0 && idade <12){
                //crianca
                img.setAttribute('src', 'foto-homemcrianca.png')

            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'foto-homemjovem.png')

            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto-homemadulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto-homemidoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <12){
                //crianca
                img.setAttribute('src', 'foto-mulhercrianca.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'foto-mulherjovem.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto-mulheradulta.png')
            }else{
                //idosa
                img.setAttribute('src', 'foto-mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos. `
        res.appendChild(img) //fazer a imagem aparecer

    }

}