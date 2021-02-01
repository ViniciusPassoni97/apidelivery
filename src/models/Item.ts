import {Entity,Column,PrimaryGeneratedColumn,ManyToOne, JoinColumn} from 'typeorm';
import Categories from './Categories';
@Entity('images')
export default class Orphanatos{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    path:string;

    @ManyToOne(()=> Categories, categories => categories.item)
    @JoinColumn({name:'category_id'})
    categories:Categories;
}