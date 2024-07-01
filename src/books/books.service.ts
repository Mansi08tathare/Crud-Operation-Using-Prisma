import { HttpStatus, Injectable } from '@nestjs/common';
import {PrismaService} from '../prisma.service'
import { Prisma } from '@prisma/client';


@Injectable()
export class BooksService {
  constructor(private readonly databaseService:PrismaService){

  }
  
  async create(createBookDto: Prisma.BookCreateInput) {
    let resp = await this.databaseService.book.create({data:createBookDto});
    return {
      status:HttpStatus.OK,
      msg:'added successfully'
    }
  }

  async findAll() {
    let resp = this.databaseService.book.findMany({});
    return {
      status:HttpStatus.OK,
      resp:resp,
      msg:'retrieved all successfully'
    }
  }

   async findOne(id: number) {
     let resp =this.databaseService.book.findUnique({
      where:{
        id
      }
    });
    return {
      status:HttpStatus.OK,
      resp:resp,
      msg:'Retrieved successfully'
    }
  }

  async  update(id: number, updateBookDto: Prisma.BookUpdateInput) {
    let resp = this.databaseService.book.update({
      where:{
        id
      },
      data:updateBookDto
    });
    return{
      status:HttpStatus.OK,
      resp:resp,
      msg:'Updated Successfully'
    }
  }

  async  remove(id: number) {
    let resp = this.databaseService.book.delete({
      where:{
        id
      }
    });
    return {
      status:HttpStatus.OK,
      resp:resp,
      msg:'Deleted Successfully'
    }
  }
}
