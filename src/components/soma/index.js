import React from 'react';


class Soma extends React.Component {

    state = {
        products: []
    };

    componentDidMount() {
        fetch('https://vollpilates.com.br/wp-json/wc/v1/orders?filter[posts_per_page]=-1&consumer_key=ck_9dd3ba58c6c5120ceb1de771d08038055da2cb27&consumer_secret=cs_a0bb9ce335fe159a9f9c30c7ebe079ace00bb55e')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    products: res
                });
            });
    }
    render() {

        const somar = this.state.products.map((acumulado) => parseFloat(acumulado.total))
        const result = somar.reduce((soma, nota) => soma + nota, 0);
        const resultFixed = result.toLocaleString('pt-br', {minimumFractionDigits: 2});

        const refund = this.state.products.filter(valor => valor.status === "refunded")
        const refundMap = refund.map(refundNumber => parseFloat(refundNumber.total))
        const refundResult = refundMap.reduce((first, second) => first + second, 0)
        const refundFixed = refundResult.toLocaleString('pt-br', {minimumFractionDigits: 2});

        const complet = this.state.products.filter(valor => valor.status === "completed")
        const completMap = complet.map(completNumber => parseFloat(completNumber.total))
        const completResult = completMap.reduce((first, second) => first + second, 0)
        const completFixed = completResult.toLocaleString('pt-br', {minimumFractionDigits: 2});

        const pending = this.state.products.filter(valor => valor.status === "pending")
        const pendingMap = pending.map(pendingNumber => parseFloat(pendingNumber.total))
        const pendingResult = pendingMap.reduce((first, second) => first + second, 0)
        const pendingFixed = pendingResult.toLocaleString('pt-br', {minimumFractionDigits: 2});
        

        const cancel = this.state.products.filter(valor => valor.status === "cancelled")
        const cancelMap = cancel.map(cancelNumber => parseFloat(cancelNumber.total))
        const cancelResult = cancelMap.reduce((first, second) => first + second, 0)
        const cancelFixed = cancelResult.toLocaleString('pt-br', {minimumFractionDigits: 2});

        const process = this.state.products.filter(valor => valor.status === "processing")
        const processMap = process.map(processNumber => parseFloat(processNumber.total))
        const processResult = processMap.reduce((first, second) => first + second, 0)
        const processFixed = processResult.toLocaleString('pt-br', {minimumFractionDigits: 2});

        const hold = this.state.products.filter(valor => valor.status === "on-hold")
        const holdMap = hold.map(holdNumber => parseFloat(holdNumber.total))
        const holdResult = holdMap.reduce((first, second) => first + second, 0)
        const holdFixed = holdResult.toLocaleString('pt-br', {minimumFractionDigits: 2});

        return (
            <div>
                <ul>
                    <li><strong>VALOR TOTAL: R$ {resultFixed}</strong></li>
                    <li>QUANT. - CONCLUIDO: R$ {completFixed}</li>
                    <li>QUANT. - PROCESSANDO: R$ {processFixed}</li>
                    <li>QUANT. - EM ESPERA: R$ {holdFixed}</li>
                    <li>QUANT. - PENDENTE: R$ {pendingFixed}</li>
                    <li>QUANT. - CANCELADO: R$ {cancelFixed}</li>
                    <li>QUANT. - REEMBOLSADO: R$ {refundFixed}</li>
                    {console.log(this.state.products)}
                </ul>
            </div>
        );
    }
}
export default Soma;
//https://grupovoll.com.br/cursos/wp-json/wc/v2/orders?consumer_key=ck_f9466a8e9c810380f732988207228cf3d554b2c0&consumer_secret=cs_a110ccf629c42d9b7b70fcb5a73d8978c71f9415

//QUANTIDADE DE PEDIDOS

/*TOTAL DE PEDIDOS:  xxx
PEDIDOS COM STATUS CONCLUIDO: xxxx
PEDIDOS COM STATUS PROCESSANDO: xxxx
PEDIDOS COM STATUS PAGAMENTO PENDENTE: xxxx
PEDIDOS COM STATUS CANCELADO: xxxx
PEDIDOS COM STATUS AGUARDANDO: xxx
PEDIDOS COM STATUS REEMBOLSADO: xxx


VALORES TOTAIS

TOTAL EM R$:  xxx
PEDIDOS COM STATUS CONCLUIDO R$: xxxx
PEDIDOS COM STATUS PROCESSANDO R$: xxxx
PEDIDOS COM STATUS PAGAMENTO PENDENTE R$: xxxx
PEDIDOS COM STATUS CANCELADO R$: xxxx
PEDIDOS COM STATUS AGUARDANDO R$: xxx
PEDIDOS COM STATUS REEMBOLSADO R$: xxx*/