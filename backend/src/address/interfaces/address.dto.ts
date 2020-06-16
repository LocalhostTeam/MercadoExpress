export class AddressDto {
  constructor(
    public id: number,
    public cityId: number,
    public district: string,
    public street: string,
    public number: number,
    public cep: string,
    public obs: string,
    public customerId?: number,
    public marketId?: number,
  ) {}
}
