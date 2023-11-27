// Classe abstrata Veiculo
abstract class Veiculo {
  constructor(
    public modelo: string,
    public marca: string,
    public cor: string,
    public numeroRodas: number
  ) {}

  abstract clone(): Veiculo
  abstract represent(): string
}

// Subclasse Carro que estende Veiculo
class Carro extends Veiculo {
  constructor(
    modelo: string,
    marca: string,
    cor: string,
    numeroRodas: number,
    public tipoMotor: string
  ) {
    super(modelo, marca, cor, numeroRodas)
  }

  clone(): Carro {
    return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.tipoMotor)
  }

  represent(): string {
    return `Carro: ${this.modelo} - ${this.marca} - ${this.cor} - ${this.numeroRodas} rodas - Motor: ${this.tipoMotor}`
  }
}

// Subclasse Bicicleta que estende Veiculo
class Bicicleta extends Veiculo {
  constructor(
    modelo: string,
    marca: string,
    cor: string,
    numeroRodas: number,
    public tipoFreio: string
  ) {
    super(modelo, marca, cor, numeroRodas)
  }

  clone(): Bicicleta {
    return new Bicicleta(this.modelo, this.marca, this.cor, this.numeroRodas, this.tipoFreio)
  }

  represent(): string {
    return `Bicicleta: ${this.modelo} - ${this.marca} - ${this.cor} - ${this.numeroRodas} rodas - Freio: ${this.tipoFreio}`
  }
}

// Classe Aplicacao
export class Aplicacao {
  criarVeiculos(): Veiculo[] {
    const carro1 = new Carro('Sedan', 'Toyota', 'Preto', 4, 'Gasolina')
    const carro2 = new Carro('Hatch', 'Volkswagen', 'Vermelho', 4, 'Elétrico')
    const carro3 = new Carro('Hatch', 'Ford', 'Preto', 4, 'Flex')
    const bicicleta1 = new Bicicleta('BMX', 'Caloi', 'Azul', 2, 'Disco')
    const bicicleta2 = new Bicicleta('Mountain', 'Specialized', 'Verde', 2, 'V-Brake')
    const bicicleta3 = new Bicicleta('MountainBike', 'Monark', 'Azul', 2, 'V-Brake')

    const veiculos: Veiculo[] = [carro1, carro2, carro3, bicicleta1, bicicleta2, bicicleta3]

    const clonedVeiculos: Veiculo[] = []
    for (const veiculo of veiculos) {
      clonedVeiculos.push(veiculo.clone())
    }

    return clonedVeiculos
  }
}


