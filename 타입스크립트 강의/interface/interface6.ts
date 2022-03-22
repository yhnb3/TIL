interface Iperson2 {
  name: string;
  age?: number;
}

interface IKorean extends Iperson2 {
  city: string;
}

const k: IKorean = {
  name: '엄강우', 
  city: '대구',
  age: 30
}

