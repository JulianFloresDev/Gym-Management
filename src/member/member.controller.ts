import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Member } from './member.entity';
import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/member.dto';

@Controller('member')
export class MemberController {
  constructor(private memberService: MemberService) {}

  @Get()
  async findAll(): Promise<Member[]> {
    return this.memberService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Member> {
    return this.memberService.findOne(id);
  }

  @Post('/new-member')
  async create(@Body() member: CreateMemberDto): Promise<Member> {
    const newMember = await this.memberService.createMember(member);
    return newMember;
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() member: Member,
  ): Promise<Member> {
    return this.memberService.update(id, member);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.memberService.delete(id);
  }
}
