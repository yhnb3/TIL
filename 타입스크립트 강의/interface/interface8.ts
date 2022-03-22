interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: 'Mark',
  gender: 'male'
}

p81.gender = 'female' /// Readonly이기 때문에 에러