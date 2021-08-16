import { Address } from "./address";
import { ProviderType } from "./provider.type";
import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, PrimaryColumn } from "typeorm";

@Entity()
export class Provider {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    providerType: ProviderType

    @Column({ unique: true })
    document: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @OneToOne(type => Address, {cascade: ["insert", "update", "remove", "soft-remove", "recover"]})
    @JoinColumn()
    address: Address;
  }