import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwt:JwtService,){
    //@InjectRepository(User) private userRepository:Repository<User>
  }

  async signUp(authDto:CreateAuthDto){

  }

  async signIn(authDto:CreateAuthDto){
    //const user=this.userRepository.findOne(authDto.id)
    // if(!user){
    //   throw new ForbiddenException('These credentials do not match our records.')
    // }
    //const pwMatches=argon.verify(user.hash,authDto.password)
    // if(!pwMatches){
    //   throw new ForbiddenException('These credentials do not match our records.')
    // }
    // delete user.hash
    // return this.signToken(user.id,user.email)
  }
  
  signToken(userId:number,email:string){
    const payload = {sub:userId,email}
    const token=this.jwt.signAsync(payload,{
      expiresIn:'2h',
      secret:process.env.JWT_SECRET
    });
    //return {access_token:token}
  }
}
