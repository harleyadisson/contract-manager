import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class ContractTerm {
  @PrimaryGeneratedColumn('uuid')
  id: string
 
  @Column()
  startDate: string;

  @Column()
  endDate: string;
}
