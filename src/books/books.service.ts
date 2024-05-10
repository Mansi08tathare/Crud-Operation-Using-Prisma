import { Injectable } from '@nestjs/common';
import {PrismaService} from '../prisma.service'
import { Prisma } from '@prisma/client';


@Injectable()
export class BooksService {
  constructor(private readonly databaseService:PrismaService){

  }
  
  async create(createBookDto: Prisma.BookCreateInput) {
    return this.databaseService.book.create({data:createBookDto});
  }

  async findAll() {
    return this.databaseService.book.findMany({});
  }

   async findOne(id: number) {
    return this.databaseService.book.findUnique({
      where:{
        id
      }
    });
  }

  async  update(id: number, updateBookDto: Prisma.BookUpdateInput) {
    return this.databaseService.book.update({
      where:{
        id
      },
      data:updateBookDto
    });
  }

  async  remove(id: number) {
    return this.databaseService.book.delete({
      where:{
        id
      }
    });
  }
}
