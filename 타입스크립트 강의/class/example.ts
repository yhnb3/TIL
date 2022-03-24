abstract class AbstractPerson {          //new로 무언가를 할 수 없다. 오직 상속만을 하기 위한 클래스이다.
  protected _name: string = "Mark"

  abstract setName(name: string): void;
}

class Person extends AbstractPerson {
  public setName(name: string): void {
    this._name = name
  }
}

const p = new Person()
p.setName("강우")
