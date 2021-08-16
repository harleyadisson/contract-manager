import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class ContractTerm {
  @PrimaryGeneratedColumn()
  id: string
 
  @Column()
  startDate: string;

  @Column()
  endDate: string;
}
