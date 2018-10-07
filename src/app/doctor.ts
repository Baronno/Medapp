export class Doctor {
  id: number;
  email: string;
  password: string;
  name: string;
  phone: number;
  specialty: string;

  setName(name:string) {
    this.name = name;
  }
}

