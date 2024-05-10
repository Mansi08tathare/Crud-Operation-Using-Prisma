import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { Prisma } from '@prisma/client';


@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: Prisma.BookCreateInput) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBookDto: Prisma.BookUpdateInput) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}
