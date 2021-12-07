// verificação da data
let datahoje = new Date ('2021-12-07')
let dataevento = new Date ('2022-04-01')
if (dataevento > datahoje){
    console.log("Data válida. Cadastro permitido.")
}

// controle idade mínima
let idade = 19
if (idade > 18){
    console.log("Maior de 18 anos. Cadastro permitido.")
} else {
    console.log("Menor de 18 anos. Cadastro não permitido.")
}

// controle quantidade de participantes
let listadeparticipantes = ["Amanda Brasa","Virando Pires","Nicanor Almôndego","Waltel Oslalvo","Dircinha Mirinda","Oblívia Obliterada","Júnior Elder","Palomo Pomelo"]
if (listadeparticipantes.length < 100){
    console.log("Vagas disponíveis. Cadastro permitido.")
}

// lista de palestrantes
let listadepalestrantes = ["Dra. Lustrosa Ilustrada","Prof. Imaginando Vero","Dr. Half Mouth PhD"]
    console.log("Lista de palestrantes:")
let quantidadedepalestrantes = listadepalestrantes.length
for (let indice = 0; indice < quantidadedepalestrantes; indice++){
    const palestrantecorrente = listadepalestrantes[indice]
    console.log(palestrantecorrente)
}

// lista de participantes
    console.log("Lista de participantes:")
    let quantidadedeparticipantes = listadeparticipantes.length
    for (let indice = 0; indice < quantidadedeparticipantes; indice++){
        const participantecorrente = listadeparticipantes[indice]
        console.log(participantecorrente)
    } 