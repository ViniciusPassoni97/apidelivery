import {Entity,Column,PrimaryGeneratedColumn,OneToMany, JoinColumn} from 'typeorm';
import Item from './Item';

@Entity('categories')
export default class Categories{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    description:string;

    
    @Column()
    image:string;

    @OneToMany(()=>Item,item => item.categories,
    {
        cascade:['insert','update']
    })
    @JoinColumn({name:'category_id'})
    item:Item[]
}