import { Address } from "./address";
import { ProviderType } from "./provider.type";
import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, PrimaryColumn, OneToMany } from "typeorm";
import { Contract } from "./contract";

@Entity()
export class Provider {

    @Column()
    providerType: ProviderType

    @PrimaryColumn({type: 'text',nullable: false})
    document!: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @OneToOne(type => Address, {cascade: ["insert", "update", "remove", "soft-remove", "recover"]})
    @JoinColumn()
    address: Address;

    @OneToMany(type => Contract, provider => Provider)
    contracts: Contract[];
  }