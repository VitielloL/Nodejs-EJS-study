# Status Code
Os códigos de status das respostas HTTP indicam se uma requisição HTTP foi corretamente concluída ou não.
## 100
* 100  Continue: indica que tudo ocorreu bem até agora e que o cliente deve continuar com a requisição ou ignorar se já concluiu o que gostaria.
* 101  Switching Protocol: código enviado em resposta a um cabeçalho de solicitação Upgrade (enUS) pelo cliente, e indica o protocolo a que o servidor está alternando.
* 102  Processing (WebDAV (enUS)): indica que o servidor recebeu e está processando a requisição, mas nenhuma resposta está disponível ainda.
* 103  Early Hints: tem o objetivo de ser utilizado com o cabeçalho Link, indicando que o agente deve iniciar a précarregar (enUS) recursos enquanto o servidor prepara uma resposta.

## 200
* 201  Created: a requisição foi bem sucedida e um novo recurso foi criado como resultado. Esta é uma típica resposta enviada após uma requisição POST.
* 202  Accepted: a requisição foi recebida mas nenhuma ação foi tomada sobre ela. Isto acontece em casos onde outro processo ou servidor lida com a requisição, ou para processamento em lote.
* 203  NonAuthoritative Information: o conjunto de metainformações retornadas não é o conjunto exato disponível no servidor de origem, mas coletado de uma cópia local ou de terceiros. 
* 204  No Content: não há conteúdo para enviar para esta solicitação, mas os cabeçalhos podem ser úteis. 
* 205  Reset Content: enviada após realizada a solicitação para informar ao user agent redefinir a visualização do documento que enviou essa solicitação.
* 206  Partial Content: usada por causa do cabeçalho de intervalo enviado pelo cliente para separar o download em vários fluxos.

## 300
* 300  Multiple Choice: a requisição tem mais de uma resposta possível. 
* 301  Moved Permanently: a URL do recurso requerido mudou. Provavelmente, a nova URL será especificada na resposta.
* 302  Found: a URL do recurso requerido foi mudada temporariamente. 
* 303  See Other: o servidor manda essa resposta para instruir o cliente a buscar o recurso requisitado em outra URL com uma requisição GET.
* 304  Not Modified: usada para questões de cache e informa ao cliente que a resposta não foi modificada
* 305  Use Proxy: indica que uma resposta deve ser acessada por um proxy. 
* 307  Temporary Redirect: possui a mesma semântica do código 302 Found, com a exceção de que o useragent não deve mudar o método HTTP utilizado.
* 308  Permanent Redirect: significa que o recurso agora está permanentemente localizado em outra URL

## 400
* 400  Bad Request: Solicitação Inválida
* 401  Unauthorized: Não autorizado
* 402  Payment Required: Pagamento necessário
* 403  Forbidden: Proibido
* 404  Not Found: Não encontrado
* 405  Method Not Allowed: Método não permitido
* 406  Not Acceptable: Não aceito
* 407  Proxy Authentication Required: Autenticação de Proxy Necessária
* 408  Request Timeout: Tempo de solicitação esgotado
* 409  Conflict: Conflito
* 410  Gone: Perdido
* 411  Length Required: Duração necessária
* 412  Precondition Failed: Falha de précondição
* 413  Request Entity Too Large: Solicitação da entidade muito extensa
* 414  RequestURL Too Large: Solicitação de URL muito Longa
* 415  Unsupported Media Type: Tipo de mídia não suportado
* 416  Request Range Not Satisfiable: Solicitação de faixa não satisfatória
* 417  Expectation Failed: Falha na expectativa

## 500
* 501  Not Implemented: o método da requisição não é suportado pelo servidor e não pode ser manipulado;
* 502  Bad Gateway: o servidor, ao trabalhar como um gateway a fim de obter uma resposta necessária para manipular a requisição, obteve uma resposta inválida;
* 503  Service Unavailable: o servidor não está pronto para manipular a requisição. Causas comuns são um servidor em manutenção ou sobrecarregado;
* 504  Gateway Timeout: esta resposta de erro é dada quando o servidor está atuando como um gateway e não obtém uma resposta a tempo;
* 505  HTTP Version Not Supported: a versão HTTP usada na requisição não é suportada pelo servidor;
* 506  Variant Also Negotiates: o servidor tem um erro de configuração interno;
* 507  Insufficient Storage: o servidor tem um erro interno de configuração;
* 508  Loop Detected (WebDAV (enUS): o servidor detectou um looping infinito ao processar a requisição;
* 510  Not Extended: exigemse extensões posteriores à requisição para o servidor atendêla;
* 511  Network Authentication Required: o cliente precisa se autenticar para ganhar acesso à rede.


