//tres parametros
//requisição, resposta, next (prosseguir)
//os parametros são fornecidos automaticamente pelo express


export default function autenticar(requisição, resposta, next){
    if(requisição.session.autenticacao === true){
        next();
    } else{
        resposta.redirect('/login');
    
    }

}