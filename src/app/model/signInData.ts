export class SignInData {
    private login: string;
    private password: string;

    constructor(login: string, password: string) {
        this.login = login;
        this.password = password;
      Sytem.out.println("Wow!Forking Done");
    }

    getLogin(): string {
        return this.login;
    }

    getPassword(): string {
        return this.password;
    }
}
