import {Entity,Column,PrimaryGeneratedColumn,ManyToOne, JoinColumn} from 'typeorm';
import Categories from './Categories';
@Entity('itens')
export default class Orphanatos{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    description:string;

    @Column()
    image:string;

    @Column()
    value:number;

    @Column()
    category_id:number;

    @ManyToOne(()=> Categories, categories => categories.item)
    @JoinColumn({name:'category_id'})
    categories:Categories;
}