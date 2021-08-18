import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { ContractTerm } from "./contract.term";
import { Provider } from "./provider";

@Entity()
export class Contract {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(type => Provider, {cascade: ["insert", "update", "recover"]})
  @JoinColumn()
  provider: Provider;

  @Column()
  name: string;

  @Column()
  serviceDescription: string;
  
  @OneToOne(type => ContractTerm, {cascade: ["insert", "update", "remove", "soft-remove", "recover"]})
  @JoinColumn()
  term: ContractTerm;
}
