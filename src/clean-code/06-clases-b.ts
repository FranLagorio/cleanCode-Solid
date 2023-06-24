(() => {
  // No aplicando el principio de responsabilidad única
  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    name: string;
    role: string;
  }

  class User extends Person {
    public lastAccess: Date;
    public email: string;
    public role: string;
    constructor({ email, role, name, gender, birthdate }: UserProps) {
      super({ name, gender, birthdate });
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkUserCredentials() {
      return true;
    }
  }

  interface UserSettingProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      lastOpenFolder,
      workingDirectory,
      role,
      email,
      name,
      gender,
      birthdate,
    }: UserSettingProps) {
      super({ email, role, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const newUserSettings = new UserSettings({
    email: "fran@gmail.com",
    role: "dev",
    name: "fran",
    birthdate: new Date("06-06-1995"),
    gender: "M",
    lastOpenFolder: "/src",
    workingDirectory: "/src",
  });

  console.log({ newUserSettings });
})();
