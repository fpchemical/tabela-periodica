
const nome = {
  lingua: 'pt-br', 
  valor: 'hidrogenio'
}
const familia = [
  {
    tipo: 'coluna',
    valor: '1'
  }, 
  {
    tipo: 'grupo',
    valor: '1A'
  }, 
  {
    tipo: 'descritivo',
    valor: 'sem familia'
  }
]
const propriedades = {
  fisicas: {},
  quimicas:{}
}
const distribuicaoEletronica = {
  k: [
    {
      subnivel: 's',
      eletrons: 1
    }
  ],
  l: [],
  m: [],
  n: [],
  o: [],
  p: [],
  q: [],
  camadaValencia: {
    k: {
      subnivel: 's',
      eletrons: 1
    }
  }
}

module.exports = { 
  simbolo: require('./atoms/simbolo'), 
  nome: require('./atoms/nome'), 
  familia: Array, 
  periodo: Number, 
  massaAtomica: Number,
  numero: {
    eletrons: Number,
    neutrons: Number,
    protons: Number
  },
  propriedades: Object,
  distribuicaoEletronica: Object,
  raioAtomico: Number,
  meiaVida: {
    valor: Number, 
    unidade: String
  },
  pontoFusao: Object,
  pontoEbulição: Object,
  densidade: {
    valor: Number, 
    unidade: String
  },
  energiaIonização: {
    valor: Number, 
    unidade: String
  },
  estatoOxidacao: Number,
  estruturaCristalina: String,
  raioCovalente:  {
    valor: Number, 
    unidade: String
  }
}

