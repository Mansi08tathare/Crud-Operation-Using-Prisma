import { Injectable } from '@nestjs/common';
import {PrismaService} from '../prisma.service'
import { Prisma } from '@prisma/client';


@Injectable()
export class BooksService {
  constructor(private readonly databaseService:PrismaService){

  }
  
  async create(createBookDto: Prisma.BookCreateInput) {
    let resp = await this.databaseService.book.create({data:createBookDto});
    return resp
  }

  async findAll() {
    let resp = this.databaseService.book.findMany({});
    return resp
  }

   async findOne(id: number) {
     let resp =this.databaseService.book.findUnique({
      where:{
        id
      }
    });
    return resp
  }

  async  update(id: number, updateBookDto: Prisma.BookUpdateInput) {
    let resp = this.databaseService.book.update({
      where:{
        id
      },
      data:updateBookDto
    });
    return resp
  }

  async  remove(id: number) {
    let resp = this.databaseService.book.delete({
      where:{
        id
      }
    });
    return resp
  }
}
