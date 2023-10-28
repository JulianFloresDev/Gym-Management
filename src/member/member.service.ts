import { Repository, FindOneOptions } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './member.entity';
import { CreateMemberDto } from './dto/member.dto';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private memberRepository: Repository<Member>,
  ) {}

  async createMember(member: CreateMemberDto): Promise<Member> {
    const newMember = this.memberRepository.create(member);
    return this.memberRepository.save(newMember);
  }

  async findAll(): Promise<Member[]> {
    return this.memberRepository.find();
  }

  async findOne(id: number): Promise<Member> {
    return this.memberRepository.findOne({ where: { id: id } });
  }

  async update(id: number, member: Member): Promise<Member> {
    await this.memberRepository.update(id, member);
    return this.memberRepository.findOne({ where: { id: id } });
  }

  async delete(id: number): Promise<void> {
    await this.memberRepository.delete(id);
  }

  async findOneById(id: number): Promise<Member> {
    const options: FindOneOptions<Member> = {
      where: { id: id },
    };
    return this.memberRepository.findOne(options);
  }
}
