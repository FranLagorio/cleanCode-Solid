(() => {
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
    email: string;
    role: string;
  }

  class User {
    public lastAccess: Date;
    public email: string;
    public role: string;
    constructor({ email, role }: UserProps) {
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkUserCredentials() {
      return true;
    }
  }

  interface SettingProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ lastOpenFolder, workingDirectory }: SettingProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
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

  class UserSetting {
    //prefencia de composicion
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      gender,
      birthdate,
      role,
      email,
      workingDirectory,
      lastOpenFolder,
    }: UserSettingProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
    }
  }

  const newUserSettings = new UserSetting({
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
