export class CustomerDto {
    constructor (   
        public name: string,
        public email: string,
        public password: string,
        public phone: string,
        public alternativeContact: string,
        public dateBirth: Date,
        public notification: boolean,
        public userName?: string) {
    }
}