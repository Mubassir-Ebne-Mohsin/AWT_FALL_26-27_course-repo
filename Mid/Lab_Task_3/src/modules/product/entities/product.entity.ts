import{Column, Entity,PrimaryGeneratedColumn} from "typeorm";

@Entity('products')
export class ProductEntity{

 @PrimaryGeneratedColumn()
  id!:number;

  @Column()
    name!:string;

  @Column()
    category!:string;
  
  @Column({type: 'double precision'})
    price!:number;
   
   @Column({type: 'integer'})
    quantity!:number;

}