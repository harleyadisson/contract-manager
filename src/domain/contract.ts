import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { ContractTerm } from "./contract.term";
import { Provider } from "./provider";

@Entity()
export class Contract {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(type => Provider, contracts => Contract, {eager: true})
  provider: Provider;

  @Column()
  name: string;

  @Column()
  serviceDescription: string;
  
  @OneToOne(type => ContractTerm, {cascade: ["insert", "update", "remove", "soft-remove", "recover"], eager: true})
  @JoinColumn()
  term: ContractTerm;
}
