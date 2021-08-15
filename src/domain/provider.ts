import { Address } from "./address";
import { ProviderType } from "./provider.type";

export class Provider {
    id: string;
    providerType: ProviderType
    document: string;
    name: string;
    email: string;
    address: Address;
  }