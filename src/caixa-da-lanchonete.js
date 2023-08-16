class CaixaDaLanchonete {
    
    calcularValorDaCompra(metodoDePagamento, itens) {

        let i;
        let tamanhoItens = itens.length;
        let total = 0, contadorChantily = 0, contadorQueijo = 0, contadorCombo = 0;
        if (tamanhoItens == 0) {
            return "Não há itens no carrinho de compra!";
        }

        for (i = 0; i < tamanhoItens; i++) {
            const [item, quantidade] = itens[i].split(',');
            
            let preco = 0;

            if (quantidade == 0 || quantidade == "") {
                return "Quantidade inválida!";
                
            }
            switch (item) {
                case "":
                    return "Não há itens no carrinho de compra!";
                    break;

                case "cafe":
                    preco = 3;
                    contadorChantily += 1;
                    contadorCombo += 1;
                    break;

                case "chantily":
                    if (contadorChantily == 0) {
                        return "Item extra não pode ser pedido sem o principal";
                    }else{
                        preco = 1.5;
                    }
                     
                    break;

                case "suco":
                    preco = 6.20;
                    contadorCombo += 1;
                    break;

                case "sanduiche":
                    preco = 6.5;
                    contadorQueijo += 1;
                    contadorCombo += 1;
                    break;

                case "queijo":
                    if (contadorQueijo == 0) {
                        return "Item extra não pode ser pedido sem o principal";
                    }else{
                        preco = 2;
                    }
                    break;

                case "salgado":
                    preco = 7.25;
                    contadorCombo += 1;
                    break;

                case "combo1":
                    if (contadorCombo == 0) {
                        return "Item extra não pode ser pedido sem o principal";
                    }else{
                        preco = 9.5;
                    }
                    break;

                case "combo2":
                    if (contadorCombo == 0) {
                        return "Item extra não pode ser pedido sem o principal";
                    }else{
                        preco = 7.5;
                    }
                    break;
            
                default:
                    return "Item inválido!";
                    break;
            }
            
            total += preco * quantidade;
        }

        switch (metodoDePagamento) {
            case "debito":
                total = total;
                break;

            case "credito":
                total = total * 1.03;
                break;

            case "dinheiro":
                total = total * 0.95;
                break;

            default:
                return "Forma de pagamento inválida!";
                break;
        }

        return "R$ " + total.toFixed(2).replace(".", ",");
    }

}
//const caixa = new CaixaDaLanchonete();
//console.log(caixa.calcularValorDaCompra("debito", ["sanduiche,1", "combo1,1"]));

export { CaixaDaLanchonete };
