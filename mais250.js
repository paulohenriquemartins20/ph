let inquirer = require('inquirer')
let fs = require('fs')
const { ifError } = require('assert')
const { json } = require('express/lib/response')


function operation(p) {

    inquirer.prompt([{
        type: 'list',
        name: 'action12',
        choices: [
            'criar conta',
            'consulta saldo',
            'depositar',
            'saca',
            'sair'
        ]
    }, ]).then((answer) => {
        let action = answer['action12']
        if (action == 'criar conta') {
            criarconta()
            definicao()
        } else if (action === 'consulta saldo') {
            saber()
        } else if (action === 'despositar') {

        } else if (action === 'saca') {

        } else if (action === 'sair') {
            console.log('programa encerrador')
        }


    }).catch((err) => console.log("deu erro"))
}
operation()

function criarconta() {

    console.log(' defina algumas das opcoes a segui .....')
}

function definicao() {
    inquirer.prompt([{
            name: 'nomedaconta',
            messege: ' nomeconta ?'
        },


    ]).then((answer) => {
        {
            let conta = answer['nomedaconta']
            console.info(conta)
            if (!fs.existsSync(conta)) {
                fs.mkdirSync(conta)

                operation()
                console.log(' < conta criada com sucesso!!!')
            } else {
                if (fs.existsSync(conta)) {
                    console.log(' ja exist')
                    definicao()
                }
            }






        }
    }).catch((err) => {
        console.log(err)
    })
}

// inquirer pra fazer perguntas pra sabe qual conta despoista 
function saber() {
    inquirer.prompt([{
        name: 'nome pfv',
        messege: 'nome da conta pra consulta? '
    }]).then((answer) => {
        let pes = answer['nome pfv']

        if (!fs.existsSync(pes)) {
            console.log(' conta nao exits')
            setTimeout(function() {
                operation()
            }, 2000)
        } else {
            if (fs.existsSync(pes)) {

                fs.readFile('./' + pes + '/k.txt', 'utf8', (err, data) => {
                    console.log(data) + console.log('reais')

                })
            } else {
                console.log('erro')
            }
        }


    }).catch((err) => { console.log(err) })

}

// deposita

function despot() {

}